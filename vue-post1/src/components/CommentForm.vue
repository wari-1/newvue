<template>
  <div>
    <textarea cols="30" rows="10" v-model="commentText" style="resize:none;"></textarea>
    <br>
    <button @click="okComment">评论</button>
  </div>
</template>

<script>
export default {
  name: "commentform",
  data() {
    return {
      commentText: ""
    };
  },
  methods: {
    okComment() {
      this.$emit("getComment", this.commentText);
      console.log(this.commentText);

      this.commentText = "";
    }
  }
};
</script>

<style>
</style>
