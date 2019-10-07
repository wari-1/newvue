<template>
  <div>
    <ul>
      <li>
        <router-link
          to="/?sort=popular"
          :exact="true"
          active-class="active"
          @click.native="filterClick('popular')"
        >热门</router-link>
      </li>
      <li>
        <router-link
          to="/?sort=newest"
          :exact="true"
          active-class="active"
          @click.native="filterClick('newest')"
        >最新</router-link>
      </li>
      <li>
        <router-link
          to="/?sort=hottest"
          :exact="true"
          active-class="active"
          @click.native="filterClick('hottest')"
        >热榜</router-link>
      </li>
    </ul>
    <router-view></router-view>
    <Topics :topics="topics" />
  </div>
</template>

<script>
import axios from "axios";
import Topics from "./Topics";
export default {
  name: "home",
  components: {
    Topics
  },
  data() {
    return {
      topics: [],
      type: "popular"
    };
  },
  created() {
    this.getTopics("popular");
  },
  methods: {
    getTopics(type) {
      axios.get(`http://localhost:3010/topics?${type}=true`).then(res => {
        setTimeout(() => {
          this.topics = res.data;
        }, 1000);
      });
    },
    filterClick(type) {
      if (this.type === type) {
        console.log("点过了");
      } else {
        this.type = type;
        console.log("没点过");
        this.topics = [];
        this.getTopics(type);
      }
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  width: 600px;
  display: flex;
  justify-content: space-around;
  line-height: 80px;
  background-color: #ccc;
}
</style>
