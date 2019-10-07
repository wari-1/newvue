<template>
  <div>
    <img
      v-if="!topics.length"
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562068111304&di=a1cbe98e0da754e55184132f20013882&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01412b5a113d83a80121985c87590c.gif"
      alt
    />
    <ul v-else>
      <router-link
        v-for="topic in topics"
        :key="topic.id"
        tag="li"
        :to="{path:`/post/${topic.id}`,params:{topic}}"
      >
        <h2>{{topic.title}}</h2>
        <br />
        <span>{{`赞：${topic.likeNum}`}}</span>
        <span>{{`评论：${topic.commentNum}`}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "topics",
  props: ["topics"]
};
</script>

<style>
</style>
