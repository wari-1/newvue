<template>
  <div class="footer">
    <span class="todo-count">{{`${activeNum} ${activeNum===1?'item':'items'} left`}}</span>
    <ul class="filters">
      <li @click="$store.dispatch('changeTag',{type:'all'})" :class="type==='all'?'isActive':''">all</li>
      <li
        @click="$store.dispatch('changeTag',{type:'active'})"
        :class="type==='active'?'isActive':''"
      >active</li>
      <li
        @click="$store.dispatch('changeTag',{type:'completed'})"
        :class="type==='completed'?'isActive':''"
      >completed</li>
      <!-- <button @click="clickx"></button> -->
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "foot",
  computed: {
    ...mapGetters(["activeNum"]),
    ...mapState({
      type: state => state.type.type
    })
  },
  created() {
    this.$store.dispatch("getType");
  }
  // methods: {
  //   clickx() {
  //     console.log(this.$store.getters.showTodos);
  //   }
  // }
};
</script>

<style lang="scss">
.footer {
  color: #777;
  padding: 10px 15px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
  display: flex;
  font-size: 16px;
  justify-content: space-around;
}
.filters {
  display: flex;
  li {
    margin-right: 15px;
    cursor: pointer;
  }
  li.isActive {
    color: chocolate;
  }
}
</style>
