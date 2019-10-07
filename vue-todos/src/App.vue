<template>
  <div>
    <h1>todos</h1>
    <div class="todo-wrap">
      <TodoForm @getTodo="getTodo" />
      <Todos
        :todos="todos"
        :todoNum="todoNum"
        @listClick="listClick"
        @delTodo="delTodo"
        @clearTodo="clearTodo"
      />
    </div>
  </div>
</template>

<script>
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";
export default {
  name: "app",
  components: {
    Todos,
    TodoForm
  },
  data() {
    return {
      todos: [],
      todoFilters: [
        {
          id: "585",
          text: "All"
        },
        {
          id: "456",
          text: "Active"
        },
        {
          id: "789",
          text: "Completed"
        }
      ],
      choose: false
    };
  },
  computed: {
    todoNum() {
      return this.todos.length;
    }
  },
  methods: {
    getTodo(todoText) {
      if (todoText.trim()) {
        let newTodo = {
          id: new Date().getTime(),
          text: todoText,
          isCompleted: false
        };
        this.todos.push(newTodo);
      }
    },
    listClick(todo) {
      todo.isCompleted = !todo.isCompleted;
    },
    delTodo(id) {
      this.todos = this.todos.filter(todo => todo.id != id);
    },
    clearTodo(isCompleted) {
      this.todos = this.todos.filter(todo => (todo.isCompleted = false));
    }
  }
};
</script>

<style>
.todo-wrap {
  margin: 130px 0 40px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 550px;
  margin: 0 auto;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
</style>
