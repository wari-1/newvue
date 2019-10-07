<template>
  <div class="card">
    <Img
      src="https://img14.360buyimg.com/mobilecms/s140x140_jfs/t1/63135/18/1756/190506/5d00d181E99934428/263472aa8fbe6561.jpg!q90.webp"
    />
    <Describe/>
    <Link/>
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
