<template>
  <div class="todo">
    <div class="todo-head">
      <input type="text" place-holder="what needs to be done?" v-model="todoText" />
      <button @click="okTodo">提交</button>
    </div>
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

<style scoped>
.todo-head {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
input {
  background-color: #fff;
  width: 500px;
  padding: 5px;
  line-height: 25px;
  /*  */
}
button {
  background-color: #fff;
  border: 1px solid #ccc;
  width: 50px;
  /* position: absolute;
  top: 0; */
  /* riposition: absolute;
  top: 0;
  left: 0;ght: 0; */
  line-height: 35px;
}
</style>
