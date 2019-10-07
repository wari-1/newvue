<template>
  <div class="aside">
    <div class="box3">
      <h2>Market Reserch</h2>
      <div class="wrap">
        <div class="pic">
          <img src="./../assets/3page-img6.jpg" alt>
        </div>
        <div class="pic">
          <img src="./../assets/3page-img7.jpg" alt>
        </div>
      </div>
      <Describe
        type="describe1"
        text="Nulla dsce feugiat malesuada odiobi nunc odio gravida at cursus nec luctusa loremaece nas trism dolor sit aconsecteetuer adipiscinges elitraesent"
      />
      <Describe
        text="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus musulla duis. Fuscecer feugiat malesuada odio. Fuscecer feugiat malesuada odio."
      />
      <Link/>
    </div>
    <div class="box4">
      <h2>Best Proposals</h2>
      <Describe
        type="describe4"
        text="Fuscecer feugiat malesuada odio. Fuscecer feugiat malesuada odio."
      />
      <Describe
        type="describe3"
        text="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus musulla duis. Fuscecer feugiat malesuada odio. Fuscecer feugiat malesuada odio.Fuscecer feugiat malesuada odio."
      />
      <Link/>
    </div>
  </div>
</template>

<script>
import Link from "./Link";
import Describe from "./Describe";
export default {
  name: "asid",
  components: {
    Link,
    Describe
  }
};
</script>

<style>
.aside {
  width: 300px;
}
.aside .pic {
  margin-right: 5px;
}
.aside .pic img {
  width: 136px;
}
.box4 {
  margin-top: 36px;
  padding: 27px 21px 30px 21px;
  background-color: #bdd042;
  border-radius: 4px;
}
.box4 h2 {
  border-bottom: 1px solid #9aac2a;
  color: #000;
  margin-bottom: 0;
  padding-bottom: 20px;
}
.aside .describe.describe1 {
  margin-bottom: 10px;
}
</style>
