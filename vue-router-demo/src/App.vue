<template>
  <div>
    <h1>Vue的路由</h1>
    <div class="logo" @click="clickLogo">LOGO</div>
    <div class="header">
      <ul class="nav">
        <li>
          <router-link
            to="/"
            :class="$route.path==='/'||$route.path.indexOf('welcome')!=-1?'nav-active': ''"
          >首页</router-link>
        </li>
        <li>
          <router-link to="/pins" active-class="nav-active">沸点</router-link>
        </li>
        <li>
          <router-link to="/topics" active-class="nav-active">话题</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    clickLogo() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
.logo {
  cursor: pointer;
}
ul.nav {
  list-style: none;
  display: flex;
  justify-content: space-around;
  background-color: #ccc;
  line-height: 80px;
}
.nav-active {
  color: aqua;
}
</style>
