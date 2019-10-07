<template>
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
    <div class="top-bot">
      <div class="inner">
        <div class="left">
          <a href="#">
            <img src alt>
          </a>
        </div>
        <div class="right">
          <a href="#">
            <img src alt>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </a>
          <a href="#">
            <img src alt>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </a>
          <a href="#">
            <img src alt>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "head"
};
</script>

<style>
.header {
  background-image: url("./../assets/header-pattern.gif");
  padding-top: 0.7rem;
  padding-bottom: 0.46rem;
  border-bottom: 1px solid #2a2a2a;
}
.header .top-top .inner {
  display: flex;
  justify-content: space-between;
}
.header h1 {
  margin-left: 0.45rem;
  width: 1.9rem;
  position: relative;
  background-image: url("./../assets/logo1.png");
  background-size: 0.64rem 0.57rem;
  background-position: 0 0;
  background-repeat: no-repeat;
}
.header h1 a div {
  width: 1.68rem;
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
}
.header span {
  display: block;
  font-family: "Berlin Sans FB";
  font-size: 0.26rem;
  color: #fff;
}
.header span:last-child {
  color: #c3c3c3;
}
.header .right {
  display: flex;
  width: 6.3rem;
  justify-content: flex-end;
}
.header a {
  width: 0.8rem;
  font-size: 0.1rem;
  color: #fff;
  border-radius: 3px;
  text-align: center;
}
.header a:hover,
.header a:nth-child(3) {
  background-color: #717171;
}
</style>
