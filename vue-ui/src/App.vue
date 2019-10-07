<template>
  <div class="app">
    <h1 class="title">Vue的UI</h1>
    <i class="el-icon-share"></i>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="danger">危险</el-button>
    <!-- <el-switch v-model="value" active-color="#13ce66" inactive-color="#ffffff"></el-switch> -->
    <!-- <Posts /> -->
    <router-view></router-view>
    <!-- <el-carousel :interval="5000" type="card" height="200px" trigger="click" arrow="always">
      <el-carousel-item
        v-for="item in items"
        :key="item.id"
        :label="`${item.text}`"
        :name="`${item.text}`"
      >
    <img :src="`${item.src}`" alt />-->
    <!-- <h3 class="medium">{{ item }}</h3>x -->
    <!-- </el-carousel-item>
    </el-carousel>-->
  </div>
</template>

<script>
export default {
  name: "app",

  data() {
    return {
      items: [
        {
          id: "123",
          src: "//wx1.sinaimg.cn/mw690/006VJhk2ly1g4mumifk75j31jk0v8npd.jpg",
          text: "易烊千玺"
        },
        {
          id: "456",
          src: "//wx2.sinaimg.cn/mw690/006VJhk2ly1g4mumhcuduj31jk0v8x6p.jpg",
          text: "易烊千玺"
        },
        {
          id: "789",
          src: "//wx1.sinaimg.cn/mw690/006VJhk2ly1g4mumj3xunj31jk0v8kjl.jpg",
          text: "易烊千玺"
        },
        {
          id: "1w23",
          src: "//wx2.sinaimg.cn/mw690/006VJhk2ly1g4mumjyf4ij31jk0v8qv5.jpg",
          text: "易烊千玺"
        },
        {
          id: "1s23",
          src: "//wx1.sinaimg.cn/mw690/006VJhk2ly1g4mumhy9a4j31jk0v8npd.jpg",
          text: "易烊千玺"
        },
        {
          id: "12a3",
          src: "//wx3.sinaimg.cn/mw690/006VJhk2ly1g4mumgppjaj31jk0v8qv5.jpg",
          text: "易烊千玺"
        }
      ],
      data() {
        return {
          value: true
        };
      }
    };
  }
};
</script>

<style lang="scss">
@import "./assets/color.scss";
.app .title {
  // color: aqua;
  // &:hover {
  //   color: $pColor;
  // }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item img {
  width: 504px;
}
/* .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
</style>
