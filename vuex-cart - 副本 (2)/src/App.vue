<template>
  <div>
    <Products />
    <hr />
    <Cart />
  </div>
</template>

<script>
import Products from "./components/Products";
import Cart from "./components/Cart";
export default {
  name: "app",
  components: {
    Products,
    Cart
  },
  computed: {},
  methods: {}
};
</script>

<style>
</style>
