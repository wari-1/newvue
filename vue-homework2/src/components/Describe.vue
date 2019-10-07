<template>
  <div class="description">
    <p :class="{'describe':true,[type]:true}">{{text}}</p>
  </div>
</template>

<script>
export default {
  name: "describe",
  props: {
    text: {
      type: String,
      default:
        "Aenean nonummy hendrerit maurihasellus portsce suscipit varium sociis natoque penatibus et magnis dis parturienetontes nascetur ridiculus musulla dutusce feugiat malesuada odorbi nunc odio gravida at cursus nec luctus alorem. Maecenas tristique orci ac sem. Duis ultricies pharetra magna. Donec accum san malesuada orci."
    },
    type: {
      validator: function(value) {
        return (
          ["describe1", "describe2", "describe3", "describe4"].indexOf(
            value
          ) !== -1
        );
      }
    }
  }
};
</script>

<style>
.describe {
  font-size: 9px;
  line-height: 16px;
  color: #bfbfbf;
}
.describe.describe1 {
  color: #616161;
  margin-top: 10px;
}
.describe.describe2 {
  font-style: italic;
}
.describe.describe3 {
  color: #fff;
}
.describe.describe4 {
  color: #000;
  text-decoration: underline;
  padding-top: 20px;
  padding-bottom: 8px;
  border-top: 1px solid #d2e651;
}
</style>
