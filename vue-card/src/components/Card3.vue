<template>
  <div class="card">
    <Img
      src="https://img12.360buyimg.com/mobilecms/s140x140_jfs/t1/72540/40/2330/153857/5d09f1d6E7938ad31/3511189e332d152c.jpg!q90.webp"
    />
    <Describe text="Better Day" type="describe2"/>
    <Link text="https://maoyan.com/" type="link2"/>
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
