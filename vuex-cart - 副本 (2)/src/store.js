import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    products: [],
    cart: null
  },
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
      if (!context.state.cart.productByIds.find(item => item === payload.id)) {
        axios
          .patch("http://localhost:3008/cart", {
            productByIds: [...context.state.cart.productByIds, payload.id],
            quantityById: {
              ...context.state.cart.quantityById,
              [payload.id]: 1
            }
          })
          .then(res => {
            // console.log(res.data);
            context.commit("getCart", res.data);
          });
      } else {
        axios
          .patch("http://localhost:3008/cart", {
            quantityById: {
              ...context.state.cart.quantityById,
              [payload.id]: context.state.cart.quantityById[payload.id] + 1
            }
          })
          .then(res => {
            // console.log(res.data);
            context.commit("getCart", res.data);
          });
      }
    },
    add(context, payload) {
      axios
        .patch("http://localhost:3008/cart", {
          quantityById: {
            ...context.state.cart.quantityById,
            [payload.id]: context.state.cart.quantityById[payload.id] + 1
          }
        })
        .then(res => {
          // console.log(res.data);
          context.commit("getCart", res.data);
        });
    },
    sub(context, payload) {
      if (context.state.cart.quantityById[payload.id] > 1) {
        axios
          .patch("http://localhost:3008/cart", {
            quantityById: {
              ...context.state.cart.quantityById,
              [payload.id]: context.state.cart.quantityById[payload.id] - 1
            }
          })
          .then(res => {
            // console.log(res.data);
            context.commit("getCart", res.data);
          });
      } else {
        const arr = context.state.cart.productByIds.filter(
          item => item != payload.id
        );
        axios
          .patch("http://localhost:3008/cart", {
            productByIds: arr
          })
          .then(res => {
            // console.log(res.data);
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
    }
  }
});

export default store;
