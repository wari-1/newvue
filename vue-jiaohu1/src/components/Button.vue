<template>
  <div>
    <button @click="$emit('handleClick',2)">{{text}}</button>
  </div>
</template>

<script>
export default {
  name: "btn",
  props: {
    text: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
</style>
