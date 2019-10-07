<template>
  <div class="xxx">
    <!-- <h1 :class="false?'active':'aaa'">aaa:{{true?'active':'aaa'}}</h1> -->
    <!-- <h1 :class="{active:bool,aaa:true}">123</h1>
    <h2 :class="[boolxxxx?'active':'','aaa']">456</h2>
    <h3 :class="bool?'active':'aaa'">789</h3>
    <h4 :style="{
        color: 'red',
        fontSize: '20px'
      }">85555</h4>
    <h4 :style="[styles,newStyles]">ioqijwok</h4>-->
    <!-- <h1 :class="hasActive?'title active':'title'">好的，Demo</h1> -->
    <Header/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Header
  }

  // data() {
  //   return {
  //     boolxxxx: true,
  //     bool: false,
  //     styles: {
  //       color: "red",
  //       fontSize: "20px"
  //     },
  //     newStyles: {
  //       color: "blue",
  //       fontSize: "200px"
  //     }
  //   };
};
</script>

<style>
</style>
