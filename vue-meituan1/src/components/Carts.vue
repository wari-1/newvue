<template>
  <div>
    <div class="mask" @click="$emit('showChoices')" v-show="isActive"></div>
    <div class="modal" v-show="isActive">
      <span v-if="!choices.length"></span>
      <span class="cou" v-else-if="total<12">还差{{12-total}}元就能起送，去凑单</span>
      <span class="manzu" v-else>满足起送价了</span>
      <div class="modal-head">
        <span>购物车</span>
        <span @click="$emit('clearCart')">清空购物车</span>
      </div>
      <div class="modal-content">
        <ul class="choices">
          <li v-for="choice in choices" :key="choice.id">
            <img :src="choice.image" alt />
            <div class="description">
              <h4>{{choice.name}}</h4>
              <div class="bottom">
                <span class="price">{{`￥${choice.price}`}}</span>
                <span class="price">{{choice.price*choice.num}}</span>
                <div class="right">
                  <button class="sub1" @click="$emit('sub1',choice)">-</button>
                  <span class="number">{{choice.num}}</span>
                  <button class="add1" @click="$emit('add1',choice)">+</button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <div class="top"></div>
      <div class="box">
        <div class="cart" @click="$emit('showChoices')">
          <i class="cubeic-mall"></i>
          <span>{{choices.length?choicesNum:''}}</span>
        </div>
        <div class="price1">
          <span>{{choices.length?total:''}}</span>
          <span>另需配送费￥1.5</span>
        </div>
        <span class="cha" v-if="!choices.length">￥12元起送</span>
        <span class="cha" v-else-if="total<12">差{{12-total}}元起送</span>
        <span class="jie" v-else>去结算</span>
      </div>
    </div>
  </div>
</template>

<script>
document.documentElement.style.fontSize =
  document.documentElement.clientWidth / 10.8 + "px";
export default {
  name: "foot",
  props: ["choices", "isActive", "choicesNum", "total"]
};
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  background-color: #fff;
}
.mask {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 998;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal {
  position: fixed;
  bottom: 1.5rem;
  left: 0;
  width: 100vw;
  z-index: 1000;
  background-color: #fff;
  .modal-head {
    border-bottom: 1px solid #ccc;
    padding: 0.2rem 0.2rem;
    display: flex;
    justify-content: space-around;
    font-size: 0.5rem;
  }
}
span.cou,
span.manzu {
  display: block;
  width: 10.8rem;
  padding-left: 0.5rem;
  font-size: 0.5rem;
  text-align: center;
  background-color: rgb(206, 159, 159);
  line-height: 2.5;
}
.modal-content {
  max-height: 8rem;
  overflow: auto;
  // position: relative;
  width: 100%;
  .choices {
    // position: absolute;
    // top: 0;
    // left: 0.5rem;
    width: 9.8rem;
    margin: 0 auto;

    background-color: #fff;
    li {
      display: flex;
      padding: 0.45rem 0;
      border-top: 1px solid #f3f3f3;
      img {
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 4px;
        margin-right: 0.2rem;
      }
      .description {
        display: flex;
        flex-direction: column;
        width: 7.8rem;
        h4 {
          font-size: 0.4rem;
          line-height: 0.68rem;
          flex-grow: 1;
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
          .right {
            display: flex;

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
    }
  }
}
.box {
  display: flex;
  background-color: #000;
  width: 100%;
  z-index: 999;
  .cart {
    background-color: #fed41e;
    text-align: center;
    width: 1.5rem;
    border-radius: 50%;
    position: relative;
    margin-top: -0.5rem;
    margin-left: 0.3rem;
    margin-bottom: 0.45rem;
    margin-right: 0.2rem;
    i {
      font-size: 0.7rem;
      line-height: 1.5rem;
      color: #403938;
    }
    span {
      width: 0.5rem;
      line-height: 0.5rem;
      color: #fff;
      background-color: #fd4e3b;
      border-radius: 50%;
      position: absolute;
      top: 0;
      right: 5px;
      font-size: 0.24rem;
    }
  }
  .price1 {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    span:first-child {
      font-size: 0.45rem;
      color: #fff;
      margin-top: 0.3rem;
    }
    // span:nth-child(2) {
    //   font-size: 0.45rem;
    //   color: #fff;
    //   margin-top: 0.3rem;
    // }
    span:last-child {
      color: #999999;
      font-size: 0.25rem;
      margin-top: 0.3rem;
    }
  }
  span.cha {
    color: #999999;
    font-size: 0.32rem;
    line-height: 1.5rem;
    float: right;
    width: 2rem;
    text-align: center;
  }
  span.jie {
    float: right;
    width: 2rem;
    flex-shrink: 0;
    text-align: center;
    color: #000;
    font-size: 0.32rem;
    line-height: 1.5rem;
    background-color: #fed41e;
  }
}
</style>
