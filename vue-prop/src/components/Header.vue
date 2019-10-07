<template>
  <div class="header">
    <Button text="登录" name="login" @clickFun="login"/>
    <Button text="注册" name="signup" @clickFun="signup"/>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "hea",
  components: {
    Button
  },
  methods: {
    login() {
      console.log("header组件登录要做的事");
    },
    signup() {
      console.log("signup");
    }
  }
};
</script>

<style>
.header {
  height: 50px;
  background-color: teal;
}
</style>
