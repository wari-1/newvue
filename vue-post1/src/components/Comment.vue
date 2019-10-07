<template>
  <div>
    <ul>
      <li v-for="comment in commentOrder" :key="comment.id">
        {{comment.text}}
        <button @click="$emit('delComment',comment.id)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "comment",
  props: ["comments", "commentOrder"]
};
</script>

<style>
</style>
