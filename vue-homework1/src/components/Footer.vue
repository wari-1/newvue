<template>
  <footer>
    <div class="inner clearfix">
      <div>
        <p>
          @ 2013 |
          <span>Dzyngiri : Online Design Magazine | Bootstrap</span> | Demo Illustrations by
          <span>Justin Mezzell</span>
        </p>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "foot"
};
</script>

<style>
footer {
  background-color: #fff;
}
footer > .inner > div:nth-child(1) {
  width: 585px;
  float: left;
}
footer > .inner > div:nth-child(1) > p {
  line-height: 84px;
  color: #1b191a;
  font-size: 10px;
  font-family: arial;
}
footer > .inner > div:nth-child(1) > p > span {
  color: #f25b26;
}
footer > .inner > div:nth-child(2) {
  float: right;
  width: 152px;
  margin-top: 23px;
}
footer > .inner > div:nth-child(2) > div {
  width: 30px;
  padding: 15px 0;
  float: left;
  margin-left: 8px;
}
footer > .inner > div:nth-child(2) > div:nth-child(1) {
  background-image: url("../assets/soc-icon-1.png");
  background-repeat: no-repeat;
}
footer > .inner > div:nth-child(2) > div:nth-child(2) {
  background-image: url("../assets/soc-icon-2.png");
  background-repeat: no-repeat;
}
footer > .inner > div:nth-child(2) > div:nth-child(3) {
  background-image: url("../assets/soc-icon-3.png");
  background-repeat: no-repeat;
}
footer > .inner > div:nth-child(2) > div:nth-child(4) {
  background-image: url("../assets/soc-icon-4.png");
  background-repeat: no-repeat;
}
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
