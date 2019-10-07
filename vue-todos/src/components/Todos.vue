<template>
  <div>
    <div class="todo-main">
      <ul class="ulList">
        <li v-for="todo in showTodo" :key="todo.id" @click="$emit('listClick',todo)">
          <span :class="{'todo-active':todo.isCompleted}">{{todo.text}}</span>
          <button @click="$emit('delTodo',todo.id)">x</button>
          <main></main>
        </li>
      </ul>
    </div>
    <div class="todo-foot">
      <span class="todo-count">{{`${activeNum} ${activeNum===1?'item':'items'} left`}}</span>
      <ul class="todo-filter">
        <li @click="type='all'">all</li>
        <li @click="type='active'">active</li>
        <li @click="type='completed'">completed</li>
        <!-- <li @click="filterChoose" :class="choose?'choosed':''">Active</li>
        <li @click="filterChoose" :class="choose?'choosed':''">Completed</li>-->
      </ul>
      <span class="clear" @click="$emit('clearTodo',todo.isCompleted)">clear completed</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "todos",
  props: ["todos"],
  data() {
    return {
      type: "all"
    };
  },
  computed: {
    activeNum() {
      return this.todos.filter(item => !item.isCompleted).length;
    },
    showTodo() {
      return this.todos.filter(todo =>
        this.type === "all"
          ? true
          : this.type === "active"
          ? !todo.isCompleted
          : todo.isCompleted
      );
    }
  }
};
</script>

<style>
.todo-main {
  display: flex;
  flex-grow: 1;
  width: 100%;
}
.ulList {
  list-style-position: inside;
  width: 100%;
  padding-left: 15px;
}
.ulList li {
  position: relative;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ededed;
  font-size: 24px;
}
.ulList li span {
  padding: 15px 15px 15px 0;
  /* position: absolute;
  top: 0%;
  left: 0; */
  width: 100%;
  display: block;
  line-height: 30px;
  user-select: none;
}
.clear {
  text-decoration: underline;
  margin-left: 10px;
  margin-top: 20px;
  user-select: none;
  cursor: pointer;
}
.todo-active {
  text-decoration: line-through;
  color: #ccc;
}
.todo-foot {
  width: 100%;
  padding-left: 15px;
  display: flex;
  justify-content: flex-start;
}
.todo-filter {
  display: flex;
  justify-content: space-around;
}
.todo-filter li {
  padding: 5px;
  margin-right: 3px;
}
.choosed {
  border: 1px solid #ccc;
}
.todo-foot {
  width: 100%;
  margin-top: 5px;
  /* position: relative; */
  background-color: #fff;
}
.todo-count {
  margin-top: 18px;
  /* position: absolute;
  top: 0;
  left: 0; */
}
.todo-filter {
  /* position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0; */
}
</style>
