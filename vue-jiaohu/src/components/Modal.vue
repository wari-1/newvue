<template>
  <div class="modal-wrap" v-show="visible">
    <div class="modal-mask" @click="$emit('close')"></div>
    <div class="modal">
      <div class="modal-head">
        <div class="title">{{title}}</div>
        <span @click="$emit('close')">x</span>
        <!-- <slot name="head"></slot> -->
      </div>
      <div class="modal-content">
        <slot></slot>
      </div>
      <div class="modal-foot">
        <!-- <button style="marginRight:12px" @click="$emit('close')">{{cancelText}}</button> -->
        <Button @handleClick="$emit('close')" :text="cancelText" mar="marginRight:12px"/>
        <Button @handleClick="ok" :text="okText"/>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "modal",
  data() {
    return {
      value: true
    };
  },
  components: {
    Button
  },
  props: {
    title: {
      type: String,
      default: "default"
    },
    okText: {
      default: "确认"
    },
    cancelText: {
      default: "取消"
    },
    visible: {
      type: Boolean,
      required: true
    },
    color: {
      type: String,
      default: "#000"
    }
  },
  methods: {
    ok(num) {
      console.log(num);
      this.$emit("close");
      this.$emit("okFunction");
    }
  }
  // methods: {
  //   ok
  //   // clickFun() {
  //   //   console.log("111");
  //   //   if (this.value) {
  //   //     this.value = !this.value;
  //   //   }
  //   // }
  // }
};
</script>

<style>
* {
  box-sizing: border-box;
}
.modal-wrap {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}
.modal-mask {
  /* position: absolute;
  top: 0;
  left: 0; */
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.2;
}
.modal {
  width: 520px;
  height: 240px;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  top: 20%;
  left: 30%;
  z-index: 100;
  display: flex;
  flex-direction: column;
}
.modal-head {
  padding: 15px 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
}
.modal-head span {
  cursor: pointer;
}

.title {
  font-size: 16px;
}
.modal-content {
  flex-grow: 1;
  padding: 0 20px;
}
.modal-foot {
  padding: 15px 20px;
  border-top: 1px solid #ccc;
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
}
</style>
