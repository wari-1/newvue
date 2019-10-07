<template>
  <div>
    <button @click="sub">-</button>
    <span>{{num}}</span>
    <button @click="add">+</button>
    <button @click="toH(100,1000)">把num变成100</button>
    <button @click="toH(200,1000)">把num变成200</button>
    
  </div>
</template>

<script>
export default {
  name: "app",
  computed: {
    num() {
      return this.$store.state.num;
    }
  },
  methods: {
    sub() {
      this.$store.commit("subNum");
    },
    add() {
      this.$store.commit("addNum");
    },
    toH(Nnum, newNum) {
      this.$store.commit("toHundred", { Nnum, newNum });
    }
  }
};
</script>

<style>
</style>
