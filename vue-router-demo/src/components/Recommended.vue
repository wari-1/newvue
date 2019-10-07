<template>
  <div>
    <h2>推荐</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{post.title}}</router-link>
      </li>
    </ul>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "recommended",
  data() {
    return {
      posts: [
        {
          id: "123",
          title: "既健康拉升可乐可乐上的"
        },
        {
          id: "456",
          title: "afewgrtjrytui"
        },
        {
          id: "789",
          title: "因为健康的节目秘密，空间的"
        }
      ]
    };
  }
};
</script>

<style>
</style>
