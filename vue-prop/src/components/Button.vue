<template>
  <div>
    <button
      :style="{color:color}"
      :class="{btn:true,[name]:true}"
      @click="$emit('clickFun')"
    >{{text}}</button>
  </div>
</template>

<script>
export default {
  name: "btn",
  data() {
    return {
      color: "#fff"
    };
  },
  props: {
    text: {
      type: String,
      default: "默认"
    },
    name: {
      validator: function(value) {
        return ["login", "signup", "more"].indexOf(value) !== -1;
      }
    },
    clickFun: {
      type: Function,
      default: function() {
        console.log("111");
      }
    }
  }

  // ,
  // methods: {
  //   changeColor() {
  //     this.color = "red";
  //     ;
  //   }
  // }
};
// this.$emit("clickFun");
</script>

<style>
.btn {
  width: 100px;
  background-color: rgb(182, 133, 133);
  color: #fff;
  user-select: none;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.5;
  border: 0;
  cursor: pointer;
  outline: none;
}
.btn.login {
  background-color: rgb(30, 105, 190);
}
.btn.signup {
  background-color: rgb(173, 45, 135);
}
.btn.more {
  background: none;
}
</style>
