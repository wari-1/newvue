<template>
  <div>
    <h2>vue 轮播图</h2>
    <div v-if="!imgArr.length" class="start">稍等</div>
    <div v-else class="wrap">
      <img
        :class="index===activeNum?'active img':'img'"
        v-for="(img,index) in imgArr"
        :src="img.src"
        alt
        :key="img.id"
      >
      <div class="prev" @click="btnLeft"><</div>
      <div class="next" @click="btnRight">></div>
      <ul class="list">
        <li
          @click="change(index)"
          :class="index===activeNum?'li btnActive':'li'"
          v-for="(img,index) in imgArr"
          :key="img.id"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      imgArr: [
        {
          id: "a",
          src:
            "https://imgcps.jd.com/ling/43843198103/5Lit5Y-k5aWi5ZOB/5pyA6auYMjTmnJ_lhY3mga8/t-5bd915cfba82b80306af5452/dcb50196.jpg"
        },
        {
          id: "b",
          src:
            "https://img1.360buyimg.com/pop/s590x470_jfs/t1/43737/17/1839/131908/5cc7e350Efc306c7c/d82339c6d6b8d8d9.jpg!q90!cc_590x470.webp"
        },
        {
          id: "c",
          src:
            "https://imgcps.jd.com/ling/7758131/5qCh5Zut5a625bGF5ZiJ5bm05Y2O/5a2m55Sf5Lu35L2O6IezOS45/t-5bd91a8dbcf6c7034d251f52/7fd21b63.jpg"
        },
        {
          id: "d",
          src:
            "https://imgcps.jd.com/ling/100000177760/5aW954mp5b-D6YCJ5oyH5Y2X/5aSn54mM55u06ZmN55m-5YWD/t-5bd95ad88e34e21f3ff67dcd/f80c2eb9.jpg"
        }
      ],
      activeNum: 0
    };
  },
  methods: {
    btnLeft() {
      this.activeNum--; //this指的是这个组件的data
      if (this.activeNum < 0) {
        console.log(this.activeNum);
        this.activeNum = this.imgArr.length - 1;
      }
    },
    btnRight() {
      this.activeNum++; //this指的是这个组件的data
      if (this.activeNum >= this.imgArr.length) {
        this.activeNum = 0;
      }
    },
    change(ind) {
      this.activeNum = ind;
    }
  }
};
</script>

<style>
.start {
  width: 400px;
  height: 400px;
  background-color: #ccc;
}
.wrap {
  width: 400px;
  height: 400px;
  position: relative;

  overflow: hidden;
}
* {
  box-sizing: border-box;
}
img {
  opacity: 0;
  z-index: 0;
  width: 400px;
  position: absolute;
  left: 0;
  top: 0;
}
.active {
  z-index: 1;
  opacity: 1;
}
ul {
  position: absolute;
  bottom: 50px;
  left: 70px;
  display: flex;
  z-index: 2;
}
li {
  list-style: none;
  width: 30px;
  height: 30px;
  background-color: #ccc;
  border-radius: 50%;
  margin-left: 10px;
}
.btnActive {
  background-color: teal;
}
.prev,
.next {
  background-color: brown;
  color: #fff;
  width: 50px;
  position: absolute;
  top: 25%;
  line-height: 50px;
  text-align: center;
  z-index: 2;
}
.prev {
  left: 0;
}
.next {
  right: 0;
}
</style>

