<template>
  <div>
    <img :src="src" alt>
  </div>
</template>

<script>
export default {
  name: "image",
  props: ["src"]
};
</script>

<style>
img {
  width: 280px;
  margin-bottom: 15px;
}
</style>
