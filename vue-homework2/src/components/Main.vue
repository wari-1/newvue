<template>
  <div class="main">
    <div class="inner">
      <Content/>
      <Aside/>
    </div>
  </div>
</template>

<script>
import Content from "./Content";
import Aside from "./Aside";
export default {
  name: "mai",
  components: {
    Content,
    Aside
  }
};
</script>

<style>
.main {
  background-color: #121212;
  padding-top: 56px;
  padding-bottom: 90px;
}
.main .inner {
  display: flex;
  justify-content: space-around;
}
</style>
