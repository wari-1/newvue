<template>
  <div>
    <h1 :class="hasActive?'title active':'title'">组件的Data测试</h1>
    <button @click="handleClick">按钮</button>
    <br>
    <br>
    <button @click="handleShow">控制消失和出现</button>
    <div v-show="show1" class="box"></div>
    <div v-if="showBox1" class="box1"></div>
    <div v-else class="box2"></div>

    <div class="goods" v-for="(cart,index) in carts" :key="cart.id">
      <span>商品名：{{cart.goodsName}}</span>
      <span>索引值：{{index}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "demo",
  data() {
    return {
      hasActive: true,
      show1: true,
      showBox1: true,
      carts: [
        {
          id: "xxx",
          goodsName: "mac book pro",
          price: 12000,
          num: 1
        },
        {
          id: "xxxx",
          goodsName: "a8",
          price: 1200000,
          num: 1
        }
      ]
    };
  },
  methods: {
    handleClick() {
      console.log(this.hasActive);
      this.hasActive = !this.hasActive;
    },
    handleShow() {
      this.showBox1 = !this.showBox1;
    }
  }
};
</script>

<style>
.title {
  font-size: 25px;
  color: red;
}
.active {
  color: blueviolet;
}
.box {
  width: 200px;
  height: 200px;
  background-color: rgb(61, 54, 54);
}
.box1 {
  width: 200px;
  height: 200px;
  background-color: rgb(224, 68, 68);
}
.box2 {
  width: 200px;
  height: 200px;
  background-color: rgb(49, 72, 173);
}
</style>
