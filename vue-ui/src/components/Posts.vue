<template>
  <div>
    <h1>文章列表</h1>
    <img
      v-if="!posts.length"
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562068111304&di=a1cbe98e0da754e55184132f20013882&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01412b5a113d83a80121985c87590c.gif"
      alt
    />
    <ul class="ulList" v-else>
      <li v-for="post in posts" :key="post.id" tag="li">
        <h2>{{post.title}}</h2>
      </li>
    </ul>
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="filterClick"
      :page-size="2"
      :current-page.sync="page"
      :page-count="10"
    ></el-pagination>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "posts",
  data() {
    return {
      posts: [],
      currentPage: 1,
      page: 1
    };
  },
  // watch: {
  //   currentPage: {
  //     immediate: true,
  //     handler() {
  //       this.posts = [];
  //       const page = this.currentPage;
  //       this.filterClick(page);
  //     }
  //   }
  // },
  created() {
    this.posts = [];
    this.getClick("1");
  },
  methods: {
    filterClick(currentPage) {
      this.posts = [];
      console.log(this.$route);
      console.log(this.$router);
      this.$router.push(`/?_Page=${currentPage}`);
      this.getClick(currentPage);
    },
    getClick(currentPage) {
      axios
        .get(`http://localhost:3008/posts?_page=${currentPage}&_limit=2`)
        .then(res => {
          setTimeout(() => {
            this.posts = res.data;
          }, 1000);
        });
    }
  }
};
</script>

<style scoped>
img {
  width: 150px;
}
</style>
