<template>
  <div>
    <div class="header">
      <div class="top-top">
        <div class="inner">
          <div class="left">
            <h1>
              <a href="#">
                <div>
                  <span>Real</span>
                  <span>Estate</span>
                </div>
              </a>
            </h1>
          </div>
          <div class="right">
            <a href="#">Home</a>
            <a href="#">Selling</a>
            <a href="#">Buying</a>
            <a href="#">Renting</a>
            <a href="#">Moving</a>
            <a href="#">Finance</a>
            <a href="#">Contacts</a>
          </div>
        </div>
      </div>
      <TopBot/>
    </div>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import TopBot from "./components/TopBot";
import Footer from "./components/Footer";
import Main from "./components/Main";
export default {
  name: "app",
  components: {
    TopBot,
    Footer,
    Main
  }
};
</script>

<style>
/* * {
  box-sizing: border-box;
}
body {
  width: 100vw;
}
a {
  text-decoration: none;
  display: block;
}
ul {
  list-style: none;
}
.inner {
  width: 968px;
  margin: 0 auto;
} */
.header {
  background-image: url("./assets/header-pattern.gif");
  padding-top: 70px;
  padding-bottom: 46px;
  border-bottom: 1px solid #2a2a2a;
}
.header .top-top .inner {
  width: 968px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.header h1 {
  margin-left: 45px;
  width: 190px;
  position: relative;
}
.header h1 a {
  background-image: url("./assets/logo1.png");
  background-size: 64px 57px;
  background-position: 0 0;
  background-repeat: no-repeat;
}
.header h1 a div {
  width: 168px;
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
}
.header span {
  display: block;
  font-family: "Berlin Sans FB";
  font-size: 26px;
  color: #fff;
}
.header span:last-child {
  color: #c3c3c3;
}
.header .right {
  display: flex;
  width: 630px;
  justify-content: flex-end;
}
.top-top .right a {
  text-decoration: none;
  display: block;
  width: 80px;
  font-size: 10px;
  color: #fff;
  border-radius: 3px;
  text-align: center;
}
.top-top .right a:hover,
.top-top .right a:nth-child(3) {
  background-color: #717171;
}
</style>
