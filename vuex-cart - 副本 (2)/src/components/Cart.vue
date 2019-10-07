<template>
  <div>
    <h2>购物车</h2>
    <div class="cart">
      <span class="total">{{total}}</span>
      <ul class="cart" v-if="newProducts.length">
        <li v-for="goods in newProducts" :key="goods.id">
          <h4>{{goods.title}}</h4>
          <span class="price">￥{{goods.price}}</span>
          <button @click="$store.dispatch('sub',{id:goods.id})">-</button>
          <span class="num">{{goods.quantity}}</span>
          <button @click="$store.dispatch('add',{id:goods.id})">+</button>
          <span class="pn">{{(goods.price*goods.quantity).toFixed(2)}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart",
  computed: {
    newProducts() {
      // console.log(this.$store.getters.newProducts);
      return this.$store.getters.newProducts;
    },
    total() {
      const sum = this.newProducts.reduce((res, item) => {
        return res + item.price * item.quantity;
      }, 0);
      return sum.toFixed(2);
    }
  },
  created() {
    this.$store.dispatch("getCart");
  }
};
</script>

<style lang="scss">
.cart li {
  display: flex;
  align-items: center;
  width: 500px;
  h4 {
    margin-right: 10px;
  }
  .price {
    margin-right: 20px;
  }
  span.num {
    flex-shrink: 1;
    margin-right: 50px;
  }
}
</style>
