<template>
  <div>
    <h2>购物车</h2>
    <div class="cart">
      <span class="total">{{total}}</span>
      <ul class="cart" v-if="newProducts.length">
        <li v-for="goods in newProducts" :key="goods.id">
          <h4>{{goods.title}}</h4>
          <span class="price">￥{{goods.price}}</span>
          <button @click="sub({id:goods.id})">-</button>
          <span class="num">{{goods.quantity}}</span>
          <button
            @click="addCart({id:goods.id,inventory:goods.inventory})"
            :disabled="goods.quantity>=goods.inventory?true:false"
          >+</button>
          <span class="pn">{{(goods.price*goods.quantity).toFixed(2)}}</span>
        </li>
      </ul>
      <!-- <span>{{obj.a}}</span>
      <button @click="changea">changea</button>
      <span>{{obj.b}}</span>
      <button @click="changeb">changeb</button>-->
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "cart",
  data() {
    return {
      obj: {
        a: 10,
        b: 20
      }
    };
  },
  computed: {
    ...mapGetters(["newProducts", "total"])
  },
  methods: {
    ...mapActions(["addCart", "sub"])
  },
  created() {
    this.$store.dispatch("getCart");
  }

  // methods: {
  //   changea() {
  //     this.$set(this.obj, "a", 50);
  //   },
  //   changeb() {
  //     this.$set(this.obj, "b", 100);
  //   }
  // }
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
