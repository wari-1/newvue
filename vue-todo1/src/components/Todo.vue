<template>
  <div>
    <div class="todo-main">
      <ul class="ulList">
        <li v-for="todo in showTodo" :key="todo.id">
          <span :class="todo.isChanged?'active':''" @click="$emit('changeTodo',todo)">{{todo.text}}</span>
          <button @click="$emit('delTodo',todo.id)">x</button>
        </li>
      </ul>
    </div>
    <div class="todo-foot">
      <span>{{`${todoNum} ${todoNum===1?'item':'items'} left`}}</span>
      <div class="todo-filter">
        <span @click="style='all'">All</span>
        <span @click="style='active'">Active</span>
        <span @click="style='completed'">Completed</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo",
  props: ["todos"],
  data() {
    return {
      style: "all"
    };
  },
  computed: {
    todoNum() {
      return this.todos.filter(todo => !todo.isChanged).length;
    },
    showTodo() {
      return this.todos.filter(todo =>
        this.style === "all"
          ? true
          : this.style === "active"
          ? !todo.isChanged
          : todo.isChanged
      ); //为了既不改变原数组
    }
  }
};
</script>

<style>
.active {
  text-decoration: line-through;
  color: #ccc;
  user-select: none;
}
</style>
