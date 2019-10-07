<template>
  <div>
    <button @click="clickOpen">{{text}}</button>
  </div>
</template>

<script>
export default {
  name: "btn1",
  props: {
    text: {
      type: String,
      default: "anniu"
    },
    clickOpen: {
      type: Function,
      default: function() {
        console.log("111");
      }
    }
  }
};
</script>

<style>
</style>
