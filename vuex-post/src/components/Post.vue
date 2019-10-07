<template>
  <div>
    <PostBody />
    <PostComment />
  </div>
</template>

<script>
import PostBody from "./PostBody";
import PostComment from "./PostComment";
export default {
  name: "post",
  components: {
    PostComment,
    PostBody
  }
};
</script>

<style>
</style>


