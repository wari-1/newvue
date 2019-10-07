<template>
  <div>
    <h1>首页</h1>
    <!-- <!-- <div class="nav2">
      <ul>
        <li
          @click="trueIndex=index"
          v-for="(tab,index) in tabs"
          :key="tab.id"
          :class="{'active':trueIndex===index}"
        >{{tab.text}}</li>
      </ul>
    </div>
    <div class="box">
      <div v-for="(tab,index) in tabs" :key="tab.id" v-show="trueIndex===index">
        <h2>{{tab.text}}</h2>
    </div>-->
    <!-- </div> -->
    <ul class="ulList">
      <li>
        <router-link
          to="/welcome/recommended"
          active-class="list-active"
          :class="$route.path==='/'?'nav-active':''"
        >推荐</router-link>
      </li>
      <li>
        <router-link to="/welcome/frontend" active-class="list-active">前端</router-link>
      </li>
      <li>
        <router-link to="/welcome/backend" active-class="list-active">后端</router-link>
      </li>
    </ul>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import
export default {
  name: "home",
  // components: {
  //   Recommended,
  //   FrontEnd,
  //   BackEnd
  // },
  data() {
    return {
      // tabs: [
      //   {
      //     id: "ass",
      //     text: "热门"
      //   },
      //   {
      //     id: "456",
      //     text: "热板"
      //   },
      //   {
      //     id: "789",
      //     text: "热榜"
      //   }
      // ],
      // trueIndex: 0
    };
  },
  methods: {}
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0.5;
}
.ulList {
  display: flex;
  width: 400px;
  justify-content: space-around;
}
.list-active {
  color: aqua;
}
.nav2 ul {
  width: 400px;
  display: flex;
  justify-content: space-around;
}
.box {
  position: relative;
  width: 400px;
}

.nav2 li {
  cursor: pointer;
}
.nav2 li:hover {
  color: rgb(27, 107, 211);
}
</style>
