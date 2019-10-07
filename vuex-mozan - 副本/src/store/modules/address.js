const address = {
  state: {
    address: [
      {
        id: "445",
        name: "yyqx",
        text: "北京市昌平区宏福中路4号",
        phoneNum: "150****9702",
        isDefault: false,
        checked: false,
        tooltip: false
      },
      {
        id: "44we5",
        name: "yyqxtt",
        text: "河北省秦皇岛市海港区燕山大学西校区(快递柜代收)",
        phoneNum: "150****9702",
        isDefault: false,
        checked: false,
        tooltip: false
      },
      {
        id: "4fsev45",
        name: "xxxx",
        text: "江西省赣州市于都县贡江镇里泗村五里组8号",
        phoneNum: "150****9702",
        isDefault: false,
        checked: false,
        tooltip: false
      }
    ]
  },
  mutations: {
    tooltipShow1(state, payload) {
      state.address.find(
        item => item.id === payload.id
      ).tooltip = !state.address.find(item => item.id === payload.id).tooltip;
    },
    del1(state, payload) {
      state.address = state.address.filter(item => item.id != payload.id);
    },
    changeChecked1(state, payload) {
      if (!state.address.find(item => item.id === payload.id).checked) {
        state.address = state.address.map(item => {
          return {
            ...item,
            checked: false
          };
        });
        state.address.find(item => item.id === payload.id).checked = true;
      } else {
        state.address.find(item => item.id === payload.id).checked = false;
      }
    },
    changeDefault(state, payload) {
      // if (!state.address.find(item => item.id === payload.id).isDefault) {
      state.address = state.address.map(item => {
        return {
          ...item,
          isDefault: false
        };
      });
      state.address.find(item => item.id === payload.id).isDefault = true;
      // } else {
      //   state.address.find(item => item.id === payload.id).isDefault = false;
      // }
    }
  },
  getters: {
    newAddress(state) {
      if (state.address.find(item => item.checked)) {
        return state.address.find(item => item.checked);
      } else if (state.address.find(item => item.isDefault)) {
        return state.address.find(item => item.isDefault);
      } else {
        return null;
      }
    }
  }
};
export default address;
