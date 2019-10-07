import axios from "axios";

export default new Vuex.Store({
  state: {},
  mutations: {
    getProducts(state, products) {
      state.products = products;
    },
    // addToCart(state, payload) {
    //   state.cart.productByIds.push(payload.id);
    //   state.cart.quantityById[payload.id] = 1;
    // }
    getCart(state, cart) {
      state.cart = cart;
    }
  },
  actions: {
    getProducts({ commit }) {
      axios.get("http://localhost:3008/products").then(res => {
        commit("getProducts", res.data);
      });
    },

    getCart({ commit }) {
      axios.get("http://localhost:3008/cart").then(res => {
        commit("getCart", res.data);
      });
    },
    addCart(context, payload) {
      // console.log(context);
      if (context.state.cart.productByIds.indexOf(payload.id) === -1) {
        axios
          .patch("http://localhost:3008/cart", {
            productByIds: [...context.state.cart.productByIds, payload.id],
            quantityById: {
              ...context.state.cart.quantityById,
              [payload.id]: 1
            }
          })
          .then(res => {
            context.commit("getCart", res.data);
          });
      } else {
        if (context.state.cart.quantityById[payload.id] < payload.inventory) {
          const newObj = Vue.set(context.state.cart, "quantityById", {
            ...context.state.cart.quantityById,
            [payload.id]: context.state.cart.quantityById[payload.id] + 1
          });
          axios
            .patch("http://localhost:3008/cart", {
              quantityById: newObj
            })
            .then(res => {
              context.commit("getCart", res.data);
            });
        } else {
          alert("库存不够");
        }
      }
    },

    sub(context, payload) {
      if (context.state.cart.quantityById[payload.id] > 1) {
        const newObj1 = Vue.set(context.state.cart, "quantityById", {
          ...context.state.cart.quantityById,
          [payload.id]: context.state.cart.quantityById[payload.id] - 1
        });
        axios
          .patch("http://localhost:3008/cart", {
            quantityById: newObj1
          })
          .then(res => {
            context.commit("getCart", res.data);
          });
      } else {
        const arr = context.state.cart.productByIds.filter(
          item => item != payload.id
        );
        const arr1 = { ...context.state.cart.quantityById };
        delete arr1[payload.id];
        axios
          .patch("http://localhost:3008/cart", {
            productByIds: arr,
            quantityById: arr1
          })
          .then(res => {
            context.commit("getCart", res.data);
          });
      }
    }
  },
  getters: {
    newProducts(state) {
      const newProducts =
        state.cart && state.products.length
          ? state.cart.productByIds.map(item => {
              return {
                id: item,
                title: state.products.find(product => product.id === item)
                  .title,
                price: state.products.find(product => product.id === item)
                  .price,
                inventory: state.products.find(product => product.id === item)
                  .inventory,
                quantity: state.cart.quantityById[item]
              };
            })
          : [];
      return newProducts;
    },
    total(state, getters) {
      return getters.newProducts
        .reduce((res, item) => res + item.price * item.quantity, 0)
        .toFixed(2);
    }
  }
});
