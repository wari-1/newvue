<template>
  <div>
    <div class="header">
      <div class="title">
        <i class="fa fa-angle-down" @click="changeAll(isAll)"></i>
        <input type="text" :value="val" class="new-todo" @input="updateMessage" />
        <button @click="add" class="submit">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "tou",
  data() {
    return {
      isAll: false
    };
  },
  computed: {
    ...mapState({
      val: state => state.val
    })
  },
  methods: {
    ...mapActions(["addTodo"]),
    add() {
      if (this.val.trim()) {
        this.addTodo({
          newTodo: { isCompleted: false, text: this.val },
          clear: this.clear
        });
      } else {
        alert("aaa");
      }
    },
    updateMessage(e) {
      this.$store.commit("changeVal", e.target.value);
    },
    clear() {
      this.$store.commit("clearInput");
    },
    changeAll(isAll) {
      this.$store.dispatch("changeAll", isAll);
      this.isAll = !this.isAll;
    }
  }
};
</script>

<style lang="scss">
.title {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  i {
    font-size: 20px;
    margin-left: 16px;
  }
}
.new-todo,
.edit {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.new-todo {
  padding: 16px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}
.new-todo:focus {
  outline: 0;
}
button.submit {
  background-color: #fff;
  flex-shrink: 0;
  border: 0;
  margin-right: 15px;
}
</style>
