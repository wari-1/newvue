<template>
  <div>
    <p :class="{'describe':true,[type]:true}">{{text}}</p>
  </div>
</template>

<script>
export default {
  name: "describe",
  props: {
    text: {
      type: String,
      default: "2019年6月24日"
    },
    type: {
      validator: function(value) {
        return ["describe1", "describe2"].indexOf(value) !== -1;
      }
    }
  }
};
</script>

<style>
.describe {
  color: #000;
  font-size: 20px;
  line-height: 2;
}
.describe.describe1 {
  color: red;
}
.describe.describe2 {
  color: blue;
}
</style>
