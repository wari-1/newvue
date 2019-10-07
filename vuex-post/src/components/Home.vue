<template>
  <div>
    <h2>主页</h2>
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">
          <h4>{{post.title}}</h4>
        </router-link>

        <!-- <span>{{`赞：${post.likeNum} 评论：${post.commentNum}`}}</span> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  }
};
</script>

<style>
</style>
