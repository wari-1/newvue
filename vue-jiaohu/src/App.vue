<template>
  <div>
    <h1>Vue的Modal</h1>
    <ul>
      <li>
        <Button @handleClick="del" text="删除"/>
      </li>
    </ul>
    <Button @handleClick="open" text="按钮"></Button>
    <!-- <Buttonn :clickOpen="open" text="按钮"></Buttonn> -->
    <!-- <button @click="open">按钮</button> -->
    <Modal
      :visible="show"
      okText="ok"
      cancelText="cancel"
      @close="close"
      @okFunction="del"
      :color="color"
    >
      <!-- <template v-slot:head>
        <button>anniu</button>
      </template>-->
      <p>123</p>
    </Modal>
  </div>
</template>

<script>
import Modal from "./components/Modal";
import Button from "./components/Button";
// import Button from "./components/Button";
export default {
  name: "app",
  components: {
    Modal,
    Button
    // ,Button
  },
  data() {
    return {
      show: false,
      color: "#000"
    };
  },
  methods: {
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
    },
    // cancel() {
    //   this.show = false;
    //   console.log("111");
    //   this.color = "red";
    // },
    del() {
      console.log("AHJDBVUHQJD");
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
</style>
