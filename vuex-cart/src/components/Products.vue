<template>
  <div>
    <h2>商品列表</h2>
    <ul class="products" v-if="products.length">
      <li v-for="product in products" :key="product.id">
        <h4>{{product.title}}</h4>
        <span>￥{{product.price}}</span>
        <button
          @click="$store.dispatch('addCart',{id:product.id,inventory:product.inventory})"
          :disabled="quantityById[product.id]>=product.inventory?true:false"
        >add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "products",
  computed: {
    ...mapState({
      products: "products",
      quantityById: state => (state.cart ? state.cart.quantityById : {})
    })
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
