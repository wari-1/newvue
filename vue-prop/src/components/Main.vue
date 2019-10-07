<template>
  <div class="main">
    <Button text="显示更多" name="more"/>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "mai",
  components: {
    Button
  }
};
</script>

<style>
.main {
  height: 50px;
  background-color: #ccc;
}
</style>
