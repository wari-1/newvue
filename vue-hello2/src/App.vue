<template>
  <div class="xxx">
    <h1>hello world</h1>
    <Header/>
    <Section/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
export default {
  name: "app",
  components: {
    Header,
    Section,
    Footer
  }
};
</script>

<style>
</style>
