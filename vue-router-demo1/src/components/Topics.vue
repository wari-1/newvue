<template>
  <div>
    <div>
      <h1>话题</h1>
      <button @click="show=!show">anniu</button>
      <img
        v-if="show"
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562068111304&di=a1cbe98e0da754e55184132f20013882&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01412b5a113d83a80121985c87590c.gif"
        alt
      />
      <ul v-else>
        <li v-for="topic in topics" :key="topic.id">
          <h2>{{topic.title}}</h2>
          <br />
          <span>{{`赞： ${topic.likeNum} `}}</span>
          <span>{{` 评论： ${topic.commentNum}`}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "topics",
  data() {
    return {
      topics: [],
      show: true
    };
  },
  beforeCreate() {
    console.log("组件创建虚拟dom");
  },
  created() {
    Axios.get("http://localhost:3008/topics").then(res => {
      this.topics = res.data;
      console.log(res.data);
    });
  }
  // beforeMount() {
  //   console.log("渲染之前");
  // },
  // mounted() {
  //   console.log("渲染完毕");
  // },
  // beforeUpdate() {
  //   console.log("组件更新之前");
  // },
  // updated() {
  //   console.log("组件更新完毕");
  // }
};
</script>

<style scoped>
img {
  width: 400px;
}
</style>
