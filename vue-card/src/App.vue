<template>
  <div>
    <Card1/>
    <Card2/>
    <Card3/>
  </div>
</template>

<script>
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
export default {
  name: "app",
  components: {
    Card1,
    Card2,
    Card3
  }
};
</script>

<style>
</style>
