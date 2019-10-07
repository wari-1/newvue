<template>
  <div class="card">
    <Img
      src="https://img12.360buyimg.com/mobilecms/s140x140_jfs/t1/26809/3/12717/61505/5c9a3b9bE6bd98afc/a91cbfd8e1907aea.jpg!q90.webp"
    />
    <Describe text="name:_4xxxx4_" type="describe1"/>
    <Link text="www.tmall.com" type="link1"/>
  </div>
</template>

<script>
import Img from "./Img";
import Describe from "./Describe";
import Link from "./Link";
export default {
  name: "card",
  components: {
    Img,
    Describe,
    Link
  }
};
</script>

<style>
.card {
  width: 300px;
  padding: 10px;
  background-color: #ccc;
}
</style>
