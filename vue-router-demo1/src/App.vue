<template>
  <div>
    <h1>Vue的转换</h1>
    <div class="head">
      <ul class="nav">
        <li>
          <router-link to="/" active-class="nav-active" :exact="true">首页</router-link>
        </li>
        <li>
          <router-link to="/pins" active-class="nav-active">沸点</router-link>
        </li>
        <li>
          <router-link to="/topics" active-class="nav-active">话题</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
a {
  text-decoration: none;
}
.nav {
  list-style: none;
  display: flex;
  background-color: #ccc;
  line-height: 80px;
  justify-content: space-around;
}
.nav-active {
  color: aqua;
}
</style>
