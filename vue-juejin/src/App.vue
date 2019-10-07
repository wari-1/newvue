<template>
  <div>
    <div>
      <img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt />
    </div>
    <ul class="nav">
      <li>
        <router-link
          to="/"
          :class="$route.path==='/'?'active':''"
          @click.native="hC"
        >首页</router-link>
      </li>
      <li>
        <router-link to="/pins" active-class="active">沸点</router-link>
      </li>
      <li>
        <router-link to="/huati" active-class="active">话题</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    hC() {
      console.log(this.$route);
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
}
ul.nav {
  list-style: none;
  background-color: #ccc;
  line-height: 80px;
  display: flex;
  width: 600px;
  justify-content: space-around;
}
.active {
  color: aqua;
}
</style>
