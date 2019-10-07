<template>
  <div>
    <div class="header">
      <div class="inner">
        <div class="box">
          <img :src="head.ImgSrc" alt />
          <div class="right">
            <span>{{head.time}}</span>
            <span>{{head.description1}}</span>
            <span>{{head.description2}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hea",
  data() {
    return {
      head: {
        id: "123",
        ImgSrc:
          "http://p1.meituan.net/business/e13a40b04bf05bd73a479fb96463d9fa109114.jpg",
        time: "36分钟",
        description1: "公告：可以送到宿舍楼下！",
        description2: "满68元赠送鸡排伴侣"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #2e2f3b;
  flex-shrink: 0;
  .inner {
    width: 96%;
    margin: 0 auto;
    padding-top: 130px;
    position: relative;
    .box {
      position: absolute;
      bottom: -10px;
      left: 0;
      display: flex;

      img {
        width: 85px;
        margin-right: 10px;
      }
      .right {
        display: flex;
        flex-direction: column;
        span {
          display: block;
          color: #fff;
          font-size: 12px;
          line-height: 18px;
          &:last-child {
            background-color: #43434e;
          }
        }
      }
    }
  }
}
</style>
