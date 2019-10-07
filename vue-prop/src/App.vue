<template>
  <div>
    <h1>Vue 的prop</h1>

    <Header/>
    <Main/>
    <Button/>
  </div>
</template>

<script>
import Button from "./components/Button";
import Header from "./components/Header";
import Main from "./components/Main";
export default {
  name: "app",
  components: {
    Button,
    Header,
    Main
  }
};
const obj = {
  age: 10
};
const str = "age";
console.log(obj[str]);
</script>

<style>
</style>
