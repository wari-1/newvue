<template>
  <img
    v-if="!topic"
    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562068111304&di=a1cbe98e0da754e55184132f20013882&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01412b5a113d83a80121985c87590c.gif"
    alt
  />
  <div v-else>
    <h2>{{topic.title}}</h2>
    <br />
    <div v-html="`${topic.content}`"></div>
    <span>{{`赞：${topic.likeNum}`}}</span>
    <span>{{`评论：${topic.commentNum}`}}</span>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "post",
  data() {
    return {
      topic: null
    };
  },
  created() {
    axios.get(`http://localhost:3010/topics/post/${topic.id}`).then(res => {
      setTimeout(() => {
        console.log(this.$route);

        // this.topics = res.data;
      }, 1000);
    });
    // console.log(this.$route);

    // this.topic = this.$route.query.topic;
  }
};
</script>

<style>
</style>
