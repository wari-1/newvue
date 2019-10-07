<template>
  <div>
    <img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt />
    <ul class="nav">
      <li>
        <router-link to="/" :exact="true" active-class="active">首页</router-link>
      </li>
      <li>
        <router-link to="/pins" :exact="true" active-class="active">沸点</router-link>
      </li>
      <li>
        <router-link to="/huati" :exact="true" active-class="active">话题</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
ul.nav {
  width: 600px;
  background-color: #ccc;
  line-height: 80px;
  display: flex;
  justify-content: space-around;
  list-style: none;
}
a {
  text-decoration: none;
}
.active {
  color: aqua;
}
</style>
