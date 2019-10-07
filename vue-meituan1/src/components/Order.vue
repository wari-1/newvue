<template>
  <div v-if="goods.length" class="order">
    <cube-scroll-nav :side="true" :data="goods" :current="current">
      <!-- <ul class="prepend-header" slot="prepend">
    <li>11</li>
    <li>22</li>
    <li>333</li>
      </ul>-->
      <cube-scroll-nav-panel
        v-for="item in goods"
        :key="item.id"
        :label="item.name"
        :title="item.name"
      >
        <ul>
          <li v-for="food in item.foods" :key="food.id">
            <div class="box1">
              <img :src="food.icon" />
              <div class="description">
                <h4>{{food.name}}</h4>
                <p>{{food.info}}</p>
                <span class="zan">{{`月售${food.sellCount} 赞${food.rating}`}}</span>
                <div class="bottom">
                  <span class="price">{{`￥${food.price}`}}</span>
                  <button
                    class="sub"
                    @click="sub(food)"
                    v-show="choices.find(item => item.id === food.id)"
                  >-</button>
                  <span>{{choices.find(item => item.id === food.id)?choices.find(item => item.id === food.id).num:''}}</span>
                  <button @click="add(food)">+</button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </cube-scroll-nav-panel>
    </cube-scroll-nav>
    <Carts
      :choices="choices"
      :isActive="isActive"
      @showChoices="showChoices"
      :choicesNum="choicesNum"
      :total="total"
      @sub1="sub"
      @add1="add"
      @clearCart="clearCart"
    />
  </div>
  <h4 v-else>稍等</h4>
</template>

<script>
import axios from "axios";
import Carts from "./Carts";
export default {
  name: "order",
  components: {
    Carts
  },
  data() {
    return {
      goods: [],
      isActive: false,
      choices: [],
      current: "current"
    };
  },
  created() {
    axios.get("http://localhost:3009/goods").then(res => {
      this.goods = res.data;
      this.current = this.goods[0].name;
    });
    axios.get("http://localhost:3009/choices").then(res => {
      this.choices = res.data;
    });
  },
  computed: {
    choicesNum() {
      const sum = this.choices.reduce((res, item) => {
        return res + item.num;
      }, 0);
      return sum;
    },
    total() {
      const sum1 = this.choices.reduce((res, item) => {
        return res + item.num * item.price;
      }, 0);
      return sum1;
    }
  },
  methods: {
    add(food) {
      if (this.choices.find(item => item.id === food.id)) {
        axios
          .patch(`http://localhost:3009/choices/${food.id}`, {
            num: this.choices.find(item => item.id === food.id).num + 1
          })
          .then(res => {
            this.choices.find(item => item.id === food.id).num = res.data.num;
          });
      } else {
        axios
          .post("http://localhost:3009/choices", { ...food, num: 1 })
          .then(res => {
            this.choices.push(res.data);
          });
      }
    },
    sub(food) {
      if (this.choices.find(item => item.id === food.id).num > 1) {
        axios
          .patch(`http://localhost:3009/choices/${food.id}`, {
            num: this.choices.find(item => item.id === food.id).num - 1
          })
          .then(res => {
            this.choices.find(item => item.id === food.id).num = res.data.num;
          });
      } else {
        axios.delete(`http://localhost:3009/choices/${food.id}`).then(res => {
          this.choices = this.choices.filter(item => item.id != food.id);
          if (!this.choices.length) {
            this.isActive = false;
          }
        });
      }
    },
    showChoices() {
      this.isActive = !this.isActive;
    },
    clearCart() {
      const arr = this.choices.map(item =>
        axios.delete(`http://localhost:3009/choices/${item.id}`)
      );
      Promise.all(arr).then(res => {
        this.choices = [];
        this.isActive = false;
      });
    }
  }
};
</script>

<style lang="scss" >
.order {
  flex-grow: 1;
  display: flex;
}
.box1 {
  display: flex;
  margin-bottom: 1.38rem;
  img {
    width: 2.7rem;
    height: 2.7rem;
    border-radius: 5px;
    margin-right: 0.25rem;
  }
  .description {
    display: flex;
    flex-direction: column;
    width: 4.7rem;
    h4 {
      font-size: 0.42rem;
      line-height: 0.68rem;
    }
    p {
      font-size: 0.3rem;
      line-height: 0.54rem;
      color: #666666;
      overflow: hidden;
      word-break: keep-all;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    span.zan {
      display: block;
      font-size: 0.3rem;
      line-height: 0.54rem;
      color: #666666;
    }
    .bottom {
      display: flex;

      width: 100%;
      span {
        display: block;
        color: #fb4e44;
        font-size: 0.4rem;
        line-height: 0.75rem;
        flex-grow: 0.9;
        text-align: left;
      }
      button {
        background-color: #fdce5c;
        width: 0.75rem;
        line-height: 0.75rem;
        border-radius: 50%;
        font-size: 0.32rem;
        text-align: center;
        color: #483308;
        flex-shrink: 0;
      }
      button.sub {
        color: #afafb1;
        background-color: #fff;
        border: 2px solid #dbdbdd;
      }
    }
  }
}
h2.cube-scroll-nav-panel-title {
  font-size: 0.62rem;
  line-height: 1rem;
  background-color: #fff;
  position: relative;
  top: -2px;
  left: -1px;
}
.cube-sticky-fixed {
}
.cube-scroll-nav {
  flex-grow: 1;
}
// .cube-scroll-nav_side > .cube-sticky > .cube-scroll-wrapper {
//   // height: 16.5rem;
// }
.cube-scroll-nav_side > .cube-sticky > .cube-sticky-fixed {
  background-color: #ccc;
}
.cube-scroll-nav-bar-item_active {
  background-color: #fff;
}
.tab:nth-child(2) {
  .box {
    width: 10rem;
    margin: 0 auto;
    display: flex;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #e4e4e4;
    img {
      width: 0.95rem;
      height: 0.95rem;
      border: 4px solid #e4e4e4;
      margin-right: 0.32rem;
      border-radius: 50%;
    }
    .description {
      width: 8.6rem;
      display: flex;
      flex-direction: column;
      .title {
        display: flex;
        h4 {
          font-size: 0.38rem;
          color: #353535;
          line-height: 0.6rem;
          flex-grow: 0.9;
        }
        span {
          color: #ababab;
          font-size: 0.25rem;
          flex-shrink: 0;
          line-height: 0.6rem;
        }
      }
      p {
        font-size: 0.32rem;
        line-height: 0.6rem;
      }
    }
  }
}
</style>
