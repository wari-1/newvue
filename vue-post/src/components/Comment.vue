<template>
  <div>
    <h2>评论的主要内容</h2>
    <!-- <textarea cols="30" rows="10" v-model="commentText"></textarea>
    <br>
    <button @click="getComment">提交评论</button>-->
    <span>评论数：{{number}}</span>
    <!-- <span>评论时间：{{time}}</span> -->

    <transition-group name="list" tag="ul">
      <li v-for="comment in current" v-bind:key="comment.id" class="list-item">
        <span>{{comment.text}}</span>
        <button @click="$emit('delComment',comment.id)">删除</button>
      </li>
    </transition-group>

    <!-- <li v-for="comment in current" :key="comment.id">
        <span>{{comment.text}}</span>
        <button @click="$emit('delComment',comment.id)">删除</button>
    </li>-->
  </div>
</template>

<script>
export default {
  name: "comment",
  props: ["comments", "number", "current"]
  // data() {
  //   return {
  //     comments: []
  //     // currentIndex:this.activeIndex //currentIndex接收父组件传来的activeIndex值；
  //   };
  // },

  // data() {
  //   return {
  //     comments: [
  //       {
  //         id: "1322",
  //         text: "娃阿阿阿阿啊"
  //       },
  //       {
  //         id: "122",
  //         text: "是神圣的地方的"
  //       },
  //       {
  //         id: "132",
  //         text: "梵蒂冈和合同"
  //       }
  //     ],
  //     commentText: ""
  //   };
  // },
  // methods: {
  //   // getComment() {
  //   //   if (this.commentText.trim() != "") {
  //   //     let cat = {
  //   //       id: new Date().getTime(),
  //   //       text: this.commentText
  //   //     };
  //   //     this.comments.push(cat);
  //   //     this.commentText = "";
  //   //   }
  //   // },
  //   delComment(id) {
  //     console.log(id);
  //     this.comments = this.comments.filter(function(item) {
  //       return item.id != id;
  //     });
  //   }
  // }
};
</script>

<style>
.list-item {
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0.2;
  /* transform: translateY(30px); */
}
/* .list-item {
  display: flex;
  flex-direction: column;
} */
</style>
