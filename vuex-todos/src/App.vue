<template>
  <div class="todoapp">
    <Header />
    <Todos />
    <Footer />
    <input type="text" v-model="text" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
export default {
  name: "app",
  components: {
    Header,
    Todos,
    Footer
  },
  computed: {
    text: {
      get() {
        return this.$store.state.text;
      },
      set(newText) {
        this.$store.commit("changeText", newText);
      }
    }
  }
};
</script>

<style>
.todoapp {
  background: #fff;
  margin: 130px 100px 40px 100px;
  width: 50%;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
</style>
