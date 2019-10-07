<template>
  <header>
    <div class="top-top">
      <div class="inner clearfix">
        <div class="logo">
          <img src="../assets/tm/tm_home.png" alt>
        </div>
        <nav>
          <ul>
            <li>
              <a href>Scaffolding</a>
            </li>
            <li>
              <a href>Base CSS</a>
            </li>
            <li>
              <a href>Components</a>
            </li>
            <li>
              <a href>Javascript</a>
            </li>
            <li>
              <a href>TM add-ons</a>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </li>
          </ul>
          <!-- <input type="checkbox" checked/>TM add-ons
                    <input type="checkbox" />1
          <input type="checkbox" />2-->
        </nav>
        <h2>Bootstrap</h2>
      </div>
    </div>
    <div class="top-bot clearfix">
      <div class="inner clearfix">
        <img src="../assets/logo.png" alt>
        <nav>
          <ul>
            <li>
              <a href>HOME</a>
            </li>
            <li>
              <a href>WORK</a>
            </li>
            <li>
              <a href>BLOG</a>
            </li>
            <li>
              <a href>PROCESS</a>
            </li>
            <li>
              <a href>CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="banner">
      <div class="inner clearfix">
        <img src="../assets/banner_05.jpg" alt>
        <h2>Namaskar!</h2>
        <div class="text">
          <p>This template is designed and developed over the Bootstrap frontend framework. Which is a free front-end framework for designers. Template is fully responsive and compatible with all the major browsers.</p>
          <a href>Download Bootstrap</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "head"
};
</script>

<style>
.top-top {
  background-color: #1a1a1a;
  width: 100%;
  border-bottom: 1px solid #252525;
}

.top-top > .inner > .logo > img {
  position: absolute;
  top: 14px;
  left: 10px;
}
.top-top > .inner > nav > ul {
  width: 520px;
  /*position:absolute;
    top:0px;
    left:56px;*/
  float: left;
  margin-left: 56px;
}
.top-top > .inner > nav > ul > li > a {
  padding-left: 30px;
  float: left;
  font-size: 10px;
  color: #a0a0a0;
  font-family: arial;
  line-height: 40px;
}
.top-top > .inner > nav > ul > li:nth-child(1) > a {
  border-left: 1px solid #111111;
  padding-left: 25px;
}
.top-top > .inner > nav > ul > li:nth-child(4) > a {
  border-right: 1px solid #111111;
  padding-right: 25px;
}
.top-top > .inner > nav > ul > li:nth-child(5) > a {
  padding-left: 25px;
}
.top-top > .inner > nav > ul > li:nth-child(5) > ul {
  display: none;
}
.top-top > .inner > nav > ul > li:nth-child(5):hover > ul {
  display: block;
}
.top-top > .inner > h2 {
  color: #000f16;
  font-size: 15px;
  font-family: arial;
  width: 93px;
  position: absolute;
  top: 12px;
  right: 0px;
}
.top-bot {
  background-color: #ed5a26;
}
.top-bot > .inner > img {
  position: absolute;
  top: 15px;
  left: 7px;
  /*font-size: 33px;
    color:#31291e;*/
}
.top-bot > .inner > nav {
  width: 517px;
  display: table;
  float: right;
}
.top-bot > .inner > nav > ul {
  width: 517px;
  display: table-row;
  background-image: url("../assets/indicator1.png");
  background-repeat: no-repeat;
  background-position: 355px 57px;
}

.top-bot > .inner > nav > ul > li {
  display: table-cell;
  text-align: center;
}
.top-bot > .inner > nav > ul > li > a {
  display: block;
  font-size: 10px;
  font-family: arial;
  color: #fff;
  line-height: 87px;
}
.top-bot > .inner > nav > ul > li:nth-child(1) {
  background-color: #221e1d;
}

.top-bot > .inner > nav > ul > li > a:hover {
  background-color: #221e1d;
  text-shadow: 1px 0px #9c4a1a;
}
.banner {
  background-color: #221e1d;
}
/*.banner>.inner{
    background-image: url('../images/banner_05.jpg');
    background-repeat: no-repeat;
    position:absolute;
    top:40px;
    left:0px;
 }
*/
.banner > .inner > img {
  margin-top: 40px;
}
.banner > .inner > h2 {
  line-height: 190px;
  font-size: 35px;
  font-family: arial;
  color: #f25c2a;
  float: left;
}
.banner > .inner > .text {
  width: 878px;
  float: right;
  border-left: 1px solid #454545;
  margin-top: 55px;
}
.banner > .inner > .text > p {
  line-height: 20px;
  font-size: 10px;
  font-family: arial;
  color: #454545;
  padding-left: 27px;
}
.banner > .inner > .text > a {
  display: block;
  line-height: 30px;
  width: 155px;
  text-align: center;
  float: right;
  margin-right: 349px;
  margin-bottom: 18px;
  margin-top: 20px;
  color: #fff;
  font-size: 10px;
  font-family: arial;
  /*text-shadow: 1px 0px  #f25d7b;*/
  background-color: #f25c27;
}
</style>