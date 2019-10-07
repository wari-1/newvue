<template>
  <div>
    <a :class="{'link':true,[type]:true}" :href="[text]">{{text}}</a>
  </div>
</template>

<script>
export default {
  name: "lianjie",
  props: {
    text: {
      type: String,
      default: "www.baidu.com"
    },
    type: {
      validator: function(value) {
        return ["link1", "link2"].indexOf(value) !== -1;
      }
    }
  }
};
</script>

<style>
.link {
  display: block;
  color: #000;
  font-size: 16px;
  line-height: 1.6;
}
.link.link1 {
  color: red;
}
.link.link2 {
  color: blue;
}
</style>
