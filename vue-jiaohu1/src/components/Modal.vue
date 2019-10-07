<template>
  <div class="modal-wrap">
    <div class="modal-mask" @click="$emit('close')"></div>
    <div class="modal">
      <div class="modal-head">
        <div class="title">Modal</div>
        <span @click="$emit('close')">x</span>
      </div>
      <div class="modal-content"></div>
      <div class="modal-foot">
        <Button @handleClick="$emit('close')" :text="cancelText" style="marginRight:12px"></Button>
        <Button @handleClick="okClick" :text="okText"></Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "modal",
  components: {
    Button
  },
  props: {
    cancelText: {
      type: String,
      default: ""
    },
    okText: {
      type: String,
      default: ""
    }
  },
  methods: {
    okClick(num) {
      this.$emit("close");
      this.$emit("okFunction");
    }
  }
};
</script>

<style>
.modal-wrap {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.modal-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
}
span {
  cursor: pointer;
}
.modal {
  width: 300px;
  height: 300px;
  border-radius: 8px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 150px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
}
.modal-head {
  padding: 15px 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
}
.modal-content {
  flex-grow: 1;
}
.modal-foot {
  padding: 15px 20px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: flex-end;
}
</style>
