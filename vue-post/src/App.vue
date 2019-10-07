<template>
  <div>
    <h1>Vue的应用</h1>
    <CommentForm @getComment="getComment"/>
    <Comment
      :comments="comments"
      @delComment="delComment"
      :number="commentNum"
      :current="currentComments"
    />
    <button @click="donghua">控制动画效果</button>
    <transition name="bounce" appear>
      <p
        v-if="show1"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
    </transition>
    <h1>vue的过渡效果</h1>
    <button @click="handleClick">按钮</button>
    <transition name="fad" appear>
      <div class="box" v-show="show"></div>
    </transition>
  </div>
</template>

<script>
import CommentForm from "./components/CommentForm";
import Comment from "./components/Comment";
import shortId from "shortid";
export default {
  name: "app",
  components: {
    Comment,
    CommentForm
  },
  data() {
    return {
      comments: [
        {
          id: "1322",
          text: "娃阿阿阿阿啊"
        },
        {
          id: "122",
          text: "是神圣的地方的"
        },
        {
          id: "132",
          text: "梵蒂冈和合同"
        }
      ],
      show: true,
      show1: true
    };
  },
  computed: {
    commentNum() {
      return this.comments.length;
    },
    currentComments() {
      return [...this.comments].reverse();
    }
  },
  methods: {
    donghua() {
      this.show1 = !this.show1;
    },
    handleClick() {
      this.show = !this.show;
    },
    getComment(commentText) {
      if (commentText.trim() != "") {
        let newComment = {
          id: shortId(),
          text: commentText
        };
        console.log(shortId());
        this.comments.push(newComment);
      }
    },
    delComment(id) {
      console.log(id);
      this.comments = this.comments.filter(function(item) {
        return item.id != id;
      });
    }
  }
};
</script>

<style>
.bounce-enter-active {
  animation: bounce-in 0.5s reverse;
}
.bounce-leave-active {
  animation: bounce-in 1.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.box {
  background-color: cyan;
  width: 200px;
  height: 200px;
  margin-left: 200px;
}
.fad-enter-active,
.fad-leave-active {
  transition: all 0.5s;
}
.fad-enter {
  transform: translateX(-200px);
}
.fad-leave-to {
  transform: translateX(-200px);
}
</style>
