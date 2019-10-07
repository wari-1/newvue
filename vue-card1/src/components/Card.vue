<template>
  <div class="card">
    <img :src="imgUrl" alt>
    <p>{{text}}</p>
    <a :href="linkHref">{{linkText}}</a>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    imgUrl: {
      type: String,
      default:
        "https://img11.360buyimg.com/mobilecms/s140x140_jfs/t1/53554/3/2189/142315/5d00d0b5E3e075a77/96e54adb2f5ed959.jpg!q90.webp"
    },
    text: {
      type: String,
      default: "今天星期二"
    },
    linkHref: {
      type: String,
      default: "https://www.baidu.com"
    },
    linkText: {
      type: String,
      default: "baidu"
    }
  }
};
</script>

<style>
</style>
