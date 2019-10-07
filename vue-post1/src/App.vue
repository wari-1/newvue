<template>
  <div>
    <h1>vue的comment</h1>
    <CommentForm @getComment="getComment"/>
    <span>评论数：{{commentNum}}</span>
    <Comment :comments="comments" @delComment="delComment" :commentOrder="commentOrder"/>
  </div>
</template>

<script>
import Comment from "./components/Comment";
import CommentForm from "./components/CommentForm";
export default {
  name: "app",
  components: {
    Comment,
    CommentForm
  },
  computed: {
    commentNum() {
      return this.comments.length;
    },
    commentOrder() {
      return [...this.comments].reverse();
    }
  },
  data() {
    return {
      comments: [
        {
          id: "123",
          text: "期间可大家快叫姐姐"
        },
        {
          id: "5566",
          text: "还是计划经济"
        },
        {
          id: "487",
          text: "看看了LLA"
        }
      ]
    };
  },
  methods: {
    getComment(commentText) {
      if (commentText.trim()) {
        let newComment = {
          id: new Date().getTime(),
          text: commentText
        };
        this.comments.push(newComment);
      }
    },
    delComment(id) {
      this.comments = this.comments.filter(item => item.id != id);
    }
  }
};
</script>

<style>
</style>
