<template>
  <div class="mainx">
    <Header />
    <ul class="nav">
      <li>
        <router-link to="/order" active-class="active">点菜</router-link>
      </li>
      <li>
        <router-link to="/comments" active-class="active">评论</router-link>
      </li>
      <li>
        <router-link to="/shop" active-class="active">商家</router-link>
      </li>
    </ul>
    <router-view></router-view>
    <!-- <div class="tabs">
      <div class="tab" style="display:none;">
        <div class="left">
          <ul class="nav1">
            <li v-for="good in goods" :key="good.id">{{good.name}}</li>
          </ul>
        </div>
        <div class="right">
          <div class="scroll-list-wrap">
            <cube-scroll ref="scroll" :data="goods" @scroll="scrollTo()">
              <div class="good" v-for="good in goods" :key="good.id">
                <h3>{{good.name}}</h3>
                <div class="box" v-for="food in good.foods" :key="food.id">
                  <img :src="food.image" alt />
                  <div class="description">
                    <h4>{{food.name}}</h4>
                    <p>{{food.info}}</p>
                    <span class="zan">{{`月售${food.sellCount} 赞${food.rating}`}}</span>
                    <div class="bottom">
                      <span class="price">{{`￥${food.price}`}}</span>
                      <button @click="$emit('add',food)">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </cube-scroll>
          </div>
        </div>
    </div>-->
    <!-- <div class="tab" style="display:none;">
        <div class="box" v-for="comment in comments" :key="comment.id">
          <img :src="comment.src" alt />
          <div class="description">
            <div class="title">
              <h4>{{comment.name}}</h4>
              <span>{{comment.time}}</span>
            </div>
            <p>{{comment.describe}}</p>
          </div>
        </div>
      </div>
      <div class="tab" style="display:none;">
        <h1>商家</h1>
    </div>-->
  </div>
</template>

<script>
document.documentElement.style.fontSize =
  document.documentElement.clientWidth / 10.8 + "px";
import Header from "./Header";
export default {
  name: "mainx",
  components: {
    Header
  },
  props: ["goods", "comments"],
  methods: {
    handleClick(index) {
      const len = document.querySelectorAll(".tab").length;
      for (let i = 0; i < len; i++) {
        document.querySelectorAll(".tab")[i].style.display = "none";
      }
      document.querySelectorAll(".tab")[index].style.display = "block";
    },
    scrollTo() {
      this.$refs.scroll.scrollTo(
        500,
        this.scrollToY,
        this.scrollToTime,
        ease[this.scrollToEasing]
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.mainx {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
ul.nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  line-height: 1.2rem;
  font-size: 0.45rem;
  color: #333333;
  list-style: none;
  border-bottom: 1px solid #f2f2f2;
  background-color: #fafafa;
  flex-shrink: 0;
}
a {
  padding: 0.2rem 0;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
}
.active {
  border-bottom: 1px solid #000;
}
.tab:first-child {
  display: flex;
  .left {
    width: 2.4rem;
    margin-right: 0rem;
    background-color: #f5f5f5;
    float: left;
    margin-right: 0.3rem;
    ul.nav1 {
      font-size: 0.32rem;
      line-height: 1.4rem;
      text-align: center;
      li.active {
        background-color: #fff;
      }
    }
  }
  .right {
    width: 7.5rem;
    float: left;
    .good {
      h3 {
        font-size: 0.42rem;
        line-height: 1rem;
        color: #fb4e44;
      }
      .box {
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
          }
        }
      }
    }
  }
}
.scroll-list-wrap {
  height: 16.5rem;
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
