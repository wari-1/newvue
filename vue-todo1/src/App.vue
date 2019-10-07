<template>
  <div>
    <TodoForm @getTodo="getTodo" />
    <Todo @delTodo="delTodo" :todos="todos" @changeTodo="changeTodo" />
  </div>
</template>

<script>
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

export default {
  name: "app",
  components: {
    Todo,
    TodoForm
  },
  data() {
    return {
      todos: []
    };
  },

  methods: {
    getTodo(todoText) {
      if (todoText.trim()) {
        let newTodo = {
          id: new Date().getTime(),
          text: todoText,
          isChanged: false
        };
        this.todos.push(newTodo);
      }
    },
    delTodo(id) {
      this.todos.filter(todo => todo.id != id);
    },
    changeTodo(todo) {
      console.log("111");
      todo.isChanged = !todo.isChanged;
    }
  }
};
</script>

<style>
</style>
