<template>
  <div>
    <!-- <textarea cols="30" rows="10"></textarea>
    <br>
    <button>提交评论</button>-->

    <textarea cols="30" rows="10" v-model="commentText"></textarea>
    <br>
    <button @click="add">提交评论</button>
  </div>
</template>

<script>
export default {
  name: "commentform",
  data() {
    return {
      commentText: ""
    };
  },
  methods: {
    add() {
      this.$emit("getComment", this.commentText);
      this.commentText = "";
    }
  }

  // methods: {
  //   getComment() {
  //     console.log(commentText);

  //     if (this.commentText.trim() != "") {
  //       let newComment = {
  //         id: new Date().getTime(),
  //         text: this.commentText
  //       };
  //       this.comments.push(newComment);
  //       this.commentText = "";
  //     }
  //   }
  // }
};
</script>

<style>
textarea {
  resize: none;
  width: 250px;
  height: 250px;
}
</style>
