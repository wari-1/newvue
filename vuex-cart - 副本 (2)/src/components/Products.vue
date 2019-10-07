<template>
  <div>
    <h2>商品列表</h2>
    <ul class="products" v-if="products.length">
      <li v-for="product in products" :key="product.id">
        <h4>{{product.title}}</h4>
        <span>￥{{product.price}}</span>
        <button @click="$store.dispatch('addCart',{id:product.id})">add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "products",
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  created() {
    this.$store.dispatch("getProducts");
  }
};
</script>

<style lang="scss">
.products li {
  display: flex;
  align-items: center;
  width: 500px;
  span {
    flex-grow: 1;
    margin-left: 10px;
    color: rgb(185, 45, 45);
  }
  button {
    flex-shrink: 0;
  }
}
</style>
