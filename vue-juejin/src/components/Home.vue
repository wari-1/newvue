<template>
  <div>
    <ul class="nav1">
      <li>
        <router-link
          to="/?sort=popular"
          :class="$route.query.sort==='popular'||$route.fullPath==='/'?'active':''"
        >热门</router-link>
      </li>
      <li>
        <router-link to="/?sort=newest" active-class="active" :exact="true">最新</router-link>
      </li>
      <li>
        <router-link to="/?sort=hottest" active-class="active" :exact="true">热榜</router-link>
      </li>
    </ul>
    <img
      v-if="!topics"
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562068111304&di=a1cbe98e0da754e55184132f20013882&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01412b5a113d83a80121985c87590c.gif"
      alt
    />
    <Topics :topics="topics" v-else />
  </div>
</template>

<script>
import Topics from "./Topics";
import Axios from "axios";
export default {
  name: "home",
  components: {
    Topics
  },
  data() {
    return {
      topics: []
      // type: "popular"
      // show:true
    };
  },
  beforeCreate() {
    console.log("组件创建虚拟dom");
  },
  // created() {
  //   // Axios.get(`http://localhost:3008/topics?popular=true`).then(res => {
  //   //   this.topics = res.data;
  //   //   // console.log(res.data);
  //   // });
  //   this.getTopics("popular");
  // },
  // watch: {
  //   "$route.fullPath": function() {
  //     this.topics = [];
  //     this.getTopics(this.$route.query.sort);
  //   }
  // },
  watch: {
    "$route.fullPath": {
      immediate: true,
      // deep: true,
      handler() {
        this.topics = [];
        const sort = this.$route.query.sort || "popular";
        this.getTopics(sort);
      }
    }
  },

  // updated() {
  //   Axios.get(`http://localhost:3008/topics?${this.type}=true`).then(res => {
  //     this.topics = res.data;
  //   });
  // },
  methods: {
    // filterClick(type) {
    //   console.log("没点过");
    //   this.topics = [];
    //   this.getTopics(type);
    // },
    getTopics(type) {
      Axios.get(`http://localhost:3009/topics?${type}=true`).then(res => {
        setTimeout(() => {
          this.topics = res.data;
        }, 1000);
        // console.log(res.data);
      });
    }
  }
  // computed: {
  //   showTopics() {
  //     return this.topics.filter(topic =>
  //       this.type === "popular"
  //         ? topic.popular
  //         : this.type === "newest"
  //         ? topic.newest
  //         : topic.hottest
  //     );
  //   }
  // }
};
</script>

<style scoped>
ul.nav1 {
  list-style: none;
  line-height: 60px;
  display: flex;
  justify-content: space-around;
}
</style>
