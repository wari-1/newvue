<template>
  <div v-if="comments.length">
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        {{comment.text}}
        <button @click="$store.dispatch('clearComment', {id:comment.id})">删除</button>
      </li>
    </ul>
    <input type="text" v-model="val" />
    <button @click="addReply">回复</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "postcomment",
  data() {
    return {
      val: ""
    };
  },
  computed: {
    comments() {
      console.log(this.$store);
      return this.$store.getters.currentComments;
    }
  },
  created() {
    const { id } = this.$route.params;
    this.$store.dispatch("getComments", id);
  },
  methods: {
    addReply() {
      const { id } = this.$route.params;
      this.$store.dispatch("addReply", {
        id: id,
        val: this.val,
        clearInput: this.clearInput
      });
    },
    clearInput() {
      this.val = "";
    }
  }
};
</script>

<style>
</style>
