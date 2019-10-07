<template>
  <div class="todo-head">
    <input type="text" placeholder="what do you choose to do?" v-model="todoText" />
    <button @click="okTodo">提交</button>
  </div>
</template>

<script>
export default {
  name: "todoform",
  data() {
    return {
      todoText: ""
    };
  },
  methods: {
    okTodo() {
      this.$emit("getTodo", this.todoText);
      this.todoText = "";
    }
  }
};
</script>

<style>
</style>
