import axios from "axios";
import Vue from "vue";
import { log } from "util";
const cart = {
  state: {
    cart: null
  },
  mutations: {
    getCart(state, cart) {
      state.cart = cart;
    }
  },
  actions: {
    getCart({ commit }) {
      axios.get("http://localhost:3009/cart").then(res => {
        commit("getCart", res.data);
      });
    },
    addCart(context, payload) {
      // console.log(context);
      if (context.state.cart.productByIds.indexOf(payload.id) === -1) {
        axios
          .patch("http://localhost:3009/cart", {
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
            .patch("http://localhost:3009/cart", {
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
          .patch("http://localhost:3009/cart", {
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
          .patch("http://localhost:3009/cart", {
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
    newProducts(state, getters, rootState) {
      // console.log(rootState);
      const newProducts =
        state.cart && rootState.products.all.length
          ? state.cart.productByIds.map(item => {
              return {
                id: item,
                title: rootState.products.all.find(
                  product => product.id === item
                ).title,
                price: rootState.products.all.find(
                  product => product.id === item
                ).price,
                inventory: rootState.products.all.find(
                  product => product.id === item
                ).inventory,
                quantity: state.cart.quantityById[item]
              };
            })
          : [];
      // console.log(newProducts);
      return newProducts;
    },
    total(state, getters) {
      return getters.newProducts
        .reduce((res, item) => res + item.price * item.quantity, 0)
        .toFixed(2);
    }
  }
};
export default cart;
