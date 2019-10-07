<template>
  <div class="top-bot">
    <div class="inner">
      <div class="left">
        <a href="#">
          <img src="./../assets/big-img1.jpg" alt>
          <img src="./../assets/extra-banner.png" alt>
        </a>
      </div>
      <div class="right">
        <a href="#">
          <img src="./../assets/big-img1.jpg" alt>
          <ul>
            <li>Villa</li>
            <li>2007 year</li>
            <li>5000 sq.ft</li>
          </ul>
          <ul>
            <li>Brick, glass</li>
            <li>3 beds</li>
            <li>2 baths</li>
          </ul>
        </a>
        <a href="#">
          <img src="./../assets/big-img2.jpg" alt>
          <ul>
            <li>Villa</li>
            <li>2009 year</li>
            <li>3500 sq.ft</li>
          </ul>
          <ul>
            <li>Brick, glass</li>
            <li>5 beds</li>
            <li>3 baths</li>
          </ul>
        </a>
        <a href="#">
          <img src="./../assets/big-img3.jpg" alt>
          <ul>
            <li>Villa</li>
            <li>2010 year</li>
            <li>4200 sq.ft</li>
          </ul>
          <ul>
            <li>Brick, glass</li>
            <li>4 beds</li>
            <li>3 baths</li>
          </ul>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "topBot"
};
</script>

<style>
.top-bot {
  margin-top: 35px;
}
.top-bot .inner {
  display: flex;
}
.top-bot .left {
  width: 591px;
  background-image: url("./../assets/img-wrapper-bg.jpg");
  position: relative;
  padding: 9px;
  border-radius: 4px;
  border: 1px solid #e46b00;
}
.top-bot .left img:first-child {
  width: 573px;
}
.top-bot .left img:last-child {
  position: absolute;
  bottom: 0;
  right: 0;
}
.top-bot .right {
  width: 377px;
  background-color: #2f2f2f;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
}
.top-bot .right a {
  padding: 15px 24px;

  display: flex;
}
.top-bot .right a + a {
  border-top: 1px dashed #4b4b4b;
}
.top-bot .right a:hover {
  background-color: #1d1d1d;
}
.top-bot .right img {
  width: 93px;
  height: 84px;
  margin-right: 28px;
}
.top-bot .right ul {
  margin-right: 40px;
}
.top-bot .right li {
  font-size: 10px;
  line-height: 28px;
  color: #fff;
}
</style>
