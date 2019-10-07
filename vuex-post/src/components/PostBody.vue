<template>
  <div v-if="post">
    <h4>{{post.title}}</h4>
    <span>评论数：{{ commentNum}}</span>
    <!-- <span>{{`赞：${post.likeNum} 评论：${post.commentNum}`}}</span> -->
    <p v-html="post.content"></p>
  </div>
</template>

<script>
export default {
  name: "postbody",
  computed: {
    post() {
      const { id } = this.$route.params;
      console.log(this.$store.state.posts);
      return this.$store.state.posts.find(item => item.id === id);
    },
    commentNum() {
      return this.$store.state.comments.length;
    }
  }
  // computed: {
  //   comments() {
  //     return this.$store.state.comments;
  //   }
  // }
};
</script>

<style>
</style>
