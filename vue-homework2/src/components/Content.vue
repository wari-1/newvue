<template>
  <div class="content">
    <div class="box1">
      <h2>About Buying</h2>
      <Describe
        text="LOREM IPSUM DOLOR SIT AMET CONSECTETUER ADIPISCING ELIT PRAESENT VESTIBULUM MOLES TIE LACUSENEANE NONUMMY HENDRERIT MAURIS PHASELLUS PORTUSCELOREM IPSUM DOLOR SIT AMET CONSECTETUER ADIPISCING ELIT PRAESENT VESTIBULUM MOLES TIE LACUSENEANE NONUMMY HENDRERIT MAURIS PHASELLUS PORTUSCE"
      />
      <Describe
        text="Nulla dsce feugiat malesuada odiobi nunc odio gravida at cursus nec luctusa loremaece nas trism dolor sit aconsecteetuer adipiscinges elitraesent"
        type="describe1"
      />

      <div class="ulList">
        <ul>
          <li>
            <a href>Natoque penatibus</a>
          </li>
          <li>
            <a href>Natoque penatibus</a>
          </li>
          <li>
            <a href>Natoque penatibus</a>
          </li>
          <li>
            <a href>Natoque penatibus</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href>Natoque penatibus</a>
          </li>
          <li>
            <a href>Natoque penatibus</a>
          </li>
          <li>
            <a href>Natoque penatibus</a>
          </li>
          <li>
            <a href>Natoque penatibus</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href>Natoque penatibus</a>
          </li>
          <li>
            <a href>Natoque penatibus</a>
          </li>
          <li>
            <a href>Natoque penatibus</a>
          </li>
          <li>
            <a href>Natoque penatibus</a>
          </li>
        </ul>
      </div>
      <Link/>
    </div>
    <div class="box2">
      <h2>Buying Guide</h2>
      <Describe type="describe2"/>
      <div class="wrap">
        <div class="pic">
          <img src="./../assets/3page-img1.jpg" alt>
        </div>
        <div class="pic">
          <img src="./../assets/3page-img2.jpg" alt>
        </div>
        <div class="pic">
          <img src="./../assets/3page-img3.jpg" alt>
        </div>
        <div class="pic">
          <img src="./../assets/3page-img4.jpg" alt>
        </div>
        <div class="pic">
          <img src="./../assets/3page-img5.jpg" alt>
        </div>
      </div>
      <Describe
        text="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus musulla duis. Fuscecer feugiat malesuada odio."
      />
      <Link/>
    </div>
  </div>
</template>

<script>
import Link from "./Link";
import Describe from "./Describe";
export default {
  name: "content",
  components: {
    Link,
    Describe
  }
};
</script>

<style>
.content {
  width: 604px;
}
h2 {
  font-size: 25px;
  margin-bottom: 29px;
  font-style: italic;
  color: #fff;
}
.ulList {
  margin-top: 16px;
  display: flex;
}
.ulList ul {
  margin-right: 44px;
}
.ulList li {
  list-style-image: "./../assets/arrow1.gif";
  list-style-position: inside;
}
.ulList a {
  text-decoration: underline;
  color: #fff;
  font-size: 9px;
  line-height: 24px;
}
.wrap {
  margin: 16px 0;
  display: flex;
}
.pic {
  padding: 4px;
  background-color: #fff;
  border-radius: 4px;
  margin-right: 9px;
}
.content .pic img {
  width: 100px;
}
.box1 {
  padding-bottom: 32px;
  margin-bottom: 38px;
  border-bottom: 1px dashed #323232;
}
</style>
