<template>
  <div>
    <button @click="$emit('handleClick','1')" :style="mar">{{text}}</button>
  </div>
</template>

<script>
export default {
  name: "btn",
  props: {
    text: {
      type: String,
      default: "anniu"
    },
    handleClick: {
      type: Function,
      default: function() {
        console.log("abcd");
      }
    },
    mar: {
      type: String,
      default: "marginRight:0;"
    }
  }
};
</script>

<style>
</style>
