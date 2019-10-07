import axios from "axios";
const todos = {
  state: {
    todos: []
  },
  mutations: {
    getTodos(state, todos) {
      state.todos = todos;
    },
    addTodo(state, newTodo) {
      state.todos.push(newTodo);
    },
    delTodo(state, id) {
      state.todos = state.todos.filter(item => item.id != id);
    },
    changeCompleted(state, id) {
      state.todos.find(item => item.id === id).isCompleted = !state.todos.find(
        item => item.id === id
      ).isCompleted;
    }
  },
  actions: {
    getTodos(context) {
      axios.get("http://localhost:3009/todoPage").then(res => {
        context.commit("getTodos", res.data);
        // console.log(context);
      });
    },
    addTodo(context, paylaod) {
      axios
        .post("http://localhost:3009/todoPage", paylaod.newTodo)
        .then(res => {
          context.commit("addTodo", res.data);
          paylaod.clear();
        });
    },
    delTodo(context, payload) {
      if (context.state.todos.length) {
        axios
          .delete(`http://localhost:3009/todoPage/${payload.id}`)
          .then(res => {
            context.commit("delTodo", payload.id);
          });
      }
    },
    changeCompleted(context, payload) {
      if (context.state.todos.length) {
        axios
          .patch(`http://localhost:3009/todoPage/${payload.id}`, {
            isCompleted: !payload.isCompleted
          })
          .then(res => {
            context.commit("changeCompleted", payload.id);
          });
      }
    },
    changeAll(context, isAll) {
      if (context.state.todos.length) {
        const newArr = context.state.todos.map(item =>
          axios.patch(`http://localhost:3009/todoPage/${item.id}`, {
            isCompleted: !isAll
          })
        );
        Promise.all(newArr).then(res => {
          // console.log(res);
          context.state.todos = res.map(item => item.data);
        });
      }
    }
  },
  getters: {
    activeNum(state) {
      if (state.todos.length) {
        return state.todos.filter(item => !item.isCompleted).length;
      } else {
        return 0;
      }
    }
  }
};
export default todos;
