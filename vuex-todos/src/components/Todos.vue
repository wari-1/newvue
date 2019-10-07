<template>
  <div>
    <section class="main" v-if="showTodos.length">
      <ul class="todo-list">
        <li :class="todo.isCompleted?'completed':'active'" v-for="todo in showTodos" :key="todo.id">
          <div class="view">
            <input type="checkbox" id="label" class="toggle" />
            <label
              for="label"
              @click="$store.dispatch('changeCompleted',{isCompleted:todo.isCompleted,id:todo.id})"
            >
              {{todo.text}}
              <i class="fa fa-check" v-show="todo.isCompleted"></i>
            </label>
            <button class="destroy" @click="$store.dispatch('delTodo',{id:todo.id})">x</button>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "todos",
  computed: {
    ...mapGetters(['showTodos'])
  },
  created() {
    this.$store.dispatch("getTodos");
  }

  // created () {
  //   return this.$store.commit('getTodos')
  // },
};
</script>

<style lang="scss">
.todo-list li {
  border-bottom: 1px solid #f0f0f0;
  .view {
    display: flex;
    position: relative;
  }
}
.todo-list li label {
  word-break: break-all;
  padding: 15px;
  padding-left: 60px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
  position: relative;
  user-select: none;
  i {
    font-size: 25px;
    color: aqua;
    position: absolute;
    left: 13px;
    top: 13px;
  }
}
.todo-list li button.destroy {
  display: none;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
  border: 0;
  background-color: #fff;
}
.todo-list li:hover .destroy {
  display: block;
}
.todo-list li .toggle {
  text-align: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10px;
  outline: none;
  margin: auto 0;
  border: 1px solid #f0f0f0;
  -webkit-appearance: none;
  appearance: none;
}
.todo-list li.completed label {
  text-decoration: line-through;
  color: #ccc;
}
button:focus {
  outline: none;
}
</style>
