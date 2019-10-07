<template>
  <section class="main">
    <div class="main1">
      <div class="inner clearfix">
        <h2>Our Work</h2>
        <div class="pic">
          <a class="clearfix" href>
            <img src="../assets/work/1.jpg" alt>
          </a>
          <a class="clearfix" href>
            <img src="../assets/work/2.jpg" alt>
          </a>
          <a class="clearfix" href>
            <img src="../assets/work/3.jpg" alt>
          </a>
          <a class="clearfix" href>
            <img src="../assets/work/4.jpg" alt>
          </a>
          <a class="clearfix" href>
            <img src="../assets/work/5.jpg" alt>
          </a>
          <a class="clearfix" href>
            <img src="../assets/work/6.jpg" alt>
          </a>
          <a class="clearfix" href>
            <img src="../assets/work/7.jpg" alt>
          </a>
          <a class="clearfix" href>
            <img src="../assets/work/8.jpg" alt>
          </a>
        </div>
      </div>
    </div>
    <div class="main2 clearfix">
      <div class="inner clearfix">
        <p>Completly Customizable and Responsive</p>
        <p>Easy to Use. Totally Free to Download. Made with love!</p>
        <p>The complete template is created using the Bootstrap framework, which is highly customizable with lots of options.</p>
        <a href>
          <i>Download</i>
        </a>
      </div>
    </div>
    <div class="main3">
      <div class="inner clearfix">
        <h2>From blog</h2>
        <div>
          <h4>Web Design</h4>
          <a href>
            <img src="../assets/blog-featured-01.jpg" alt>
          </a>
          <p>At vero eos et accusamus et iusto</p>
          <div class="clearfix">
            <div></div>

            <span>9.11.2012</span>
            <div></div>
            <span>Admin</span>
            <div></div>
            <span>7 comments</span>
          </div>
          <p>Vivamus sollicitudin libero auctor arcu pulvinar commodo.</p>
          <a href>Read More</a>
        </div>
        <div class="clearfix">
          <h4>Graphics</h4>
          <a href>
            <img src="../assets/blog-featured-02.jpg" alt>
          </a>
          <p>Deleniti atque corrupti quos</p>
          <div class="clearfix">
            <div></div>
            <span>9.11.2012</span>
            <div></div>
            <span>Admin</span>
            <div></div>
            <span>4 comments</span>
          </div>
          <p>Vestibulum volutpat urna sed sapien vehicula varius.</p>
          <a href>Read More</a>
        </div>
        <div>
          <h4>Social Media</h4>
          <a href>
            <img src="../assets/blog-featured-03.jpg" alt>
          </a>
          <p>Similique sunt in culpa qui officia</p>
          <div class="clearfix">
            <div></div>
            <span>9.11.2012</span>
            <div></div>
            <span>Admin</span>
            <div></div>
            <span>9 comments</span>
          </div>
          <p>Pellentesque mi justo, laoreet non bibendum non, auctor imperdiet eros.</p>
          <a href>Read More</a>
        </div>
        <div>
          <h4>Photography</h4>
          <a href>
            <img src="../assets/blog-featured-04.jpg" alt>
          </a>
          <p>Similique sunt in culpa qui officia</p>
          <div class="clearfix">
            <div></div>
            <span>9.11.2012</span>
            <div></div>
            <span>Admin</span>
            <div></div>
            <span>1 comment</span>
          </div>
          <p>Vestibulum volutpat urna sed sapien vehicula varius.</p>
          <a href>Read More</a>
        </div>
      </div>
    </div>

    <div class="main4">
      <div class="inner clearfix">
        <div class="left">
          <h4>Shortly about us</h4>
          <div class="clearfix">
            <img src="../assets/blog-featured-04.jpg" alt>
            <p>Mauris scelerisque odio quis leo viverra ac porttitor sem blandit. Sed tincidunt mattis varius. Nunc sodales ipsum nisl, eget lacinia nibh.</p>
            <p>Cras lacus tortor, tempus vitae porta nec, hendrerit id dolor. Nam volutpat gravida porta. Suspendisse turpis nibh, volutpat.</p>
          </div>
        </div>
        <div class="right">
          <h4>Some quick links</h4>
          <ul>
            <li>
              <a href>Campaigns</a>
            </li>
            <li>
              <a href>Portraits</a>
            </li>
            <li>
              <a href>Fashion</a>
            </li>
            <li>
              <a href>Fine Art</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href>Campaigns</a>
            </li>
            <li>
              <a href>Portraits</a>
            </li>
            <li>
              <a href>Fashion</a>
            </li>
            <li>
              <a href>Fine Art</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href>Campaigns</a>
            </li>
            <li>
              <a href>Portraits</a>
            </li>
            <li>
              <a href>Fashion</a>
            </li>
            <li>
              <a href>Fine Art</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href>Advertising</a>
            </li>
            <li>
              <a href>Lifestyle</a>
            </li>
            <li>
              <a href>Love story</a>
            </li>
            <li>
              <a href>Landscapes</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "sect"
};
</script>

<style>
.main1 {
  background-color: #fff;
}
.main1 > .inner > h2 {
  margin-top: 44px;
  color: #f25c2a;
  font-size: 32px;
}
.main1 > .inner > .pic {
  margin-top: 29px;
}

.pic > a {
  margin-left: 30px;
  float: left;
}

.main1 > .inner > .pic > a {
  margin-bottom: 30px;
}
.main1 > .inner > .pic > a:nth-child(1),
.main1 > .inner > .pic > a:nth-child(5) {
  margin-left: 0px;
}
.main2 {
  background-color: #eeeeee;
  -webkit-background-clip: border-box;
  -moz-background-clip: border-box;
  background-clip: border-box;
  border-top: 2px dashed #cccccc;
  border-bottom: 2px dashed #cccccc;
}
.main2 > .inner {
  text-align: center;
  padding-bottom: 14px;
}
.main2 > .inner > p {
  color: #f25c27;
  line-height: 44px;
  font-size: 22px;
  font-family: arial;
}
.main2 > .inner > p:nth-child(3) {
  font-size: 10px;
  color: #707070;
}
.main2 > .inner > a {
  display: block;
  width: 90px;
  line-height: 30px;
  background-color: #f25c27;
  font-family: arial;
  text-align: center;
  font-size: 10px;
  color: #fff;
  margin-top: 18px;
  /* margin-bottom: 14px;*/
  margin-left: 540px;
}
.main3 {
  background-color: #fff;
  padding-bottom: 54px;
}
.main3 > .inner > h2 {
  font-size: 35px;
  font-family: arial;
  color: #f25c27;
  margin-top: 42px;
}
.main3 > .inner > div {
  width: 270px;
  margin-left: 30px;
  float: left;
}
.main3 > .inner > div:nth-child(2) {
  margin-left: 0px;
}
.main3 > .inner > div > h4 {
  color: #f25c27;
  font-size: 21px;
  font-family: arial;
  margin-top: 59px;
}
.main3 > .inner > div > a > img {
  margin-top: 31px;
}
.main3 > .inner > div > p {
  margin-top: 16px;
  font-size: 12px;
  color: #f25c27;
  font-family: arial;
}
.main3 > .inner > div > div {
  margin-top: 20px;
}
.main3 > .inner > div > div > div {
  background-image: url("../assets/glyphicons-halflings.png");
  background-repeat: no-repeat;

  width: 12px;
  padding: 6.5px 0;
  float: left;
}
.main3 > .inner > div > div > div:nth-child(1) {
  background-position: -193px -121px;
}
.main3 > .inner > div > div > div:nth-child(3) {
  background-position: -170px 0px;
  margin-left: 18px;
}
.main3 > .inner > div > div > div:nth-child(5) {
  background-position: -241px -122px;
  margin-left: 46px;
}
.main3>.inner>div>div>span/*:nth-child(2)*/ {
  font-family: arial;
  float: left;
  font-size: 9px;
  margin-left: 4px;
  /*color:#71726d;*/
  color: #f87a26;
}
.main3 > .inner > div > div > span:nth-child(4) {
  width: 35px;
}
.main3 > .inner > div > div > span:nth-child(2) {
  width: 54px;
  color: #71726d;
}
.main3 > .inner > div > div > span:nth-child(6) {
  width: 67px;
}
.main3 > .inner > div > p:nth-child(5) {
  margin-top: 12px;
  line-height: 20px;
  color: #71726d;
}
.main3 > .inner > div > a:nth-child(6) {
  margin-top: 25px;
  font-family: arial;
  display: block;
  width: 90px;
  line-height: 30px;
  background-color: #f25c27;
  text-align: center;
  font-size: 10px;
  color: #fff;
}
.main4 {
  background-color: #231e1b;
  padding-bottom: 40px;
}
.left {
  width: 540px;
  float: left;
}
.main4 > .inner > div > h4 {
  font-size: 22px;
  margin-top: 31px;
  color: #f87a26;
  font-family: arial;
}
.main4 > .inner > div > div {
  margin-top: 31px;
}
.main4 > .inner > div > div > img {
  float: left;
  margin-right: 30px;
}
.main4 > .inner > div > div > p {
  font-size: 10px;
  line-height: 22px;
  color: #fff;
  font-family: arial;
}
.main4 > .inner > div > div > p:nth-child(3) {
  margin-top: 10px;
  color: #706f53;
}
.right {
  width: 570px;
  float: right;
}
.main4 > .inner > div > ul {
  width: 80px;
  float: left;
  margin-left: 53px;
  margin-top: 50px;
}
.main4 > .inner > div > ul:nth-child(2) {
  margin-left: 0px;
}

.main4 > .inner > div > ul > li {
  list-style-image: url("../assets/marker-1.png");
  list-style-position: none;
}
.main4 > .inner > div > ul > li > a {
  font-size: 10px;
  color: #f34520;
  font-family: arial;
  margin-bottom: 20px;
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