<template>
  <div>
    <h1>vue的交互</h1>
    <Button @handleClick="open" text="open"/>
    <Modal @close="close" okText="ok" cancelText="cancel" :okFunction="okFunction" v-show="show"></Modal>
  </div>
</template>

<script>
import Button from "./components/Button";
import Modal from "./components/Modal";

export default {
  name: "app",
  components: {
    Button,
    Modal
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
    },
    okFunction() {
      console.log("111");
    }
  }
};
</script>

<style>
</style>
