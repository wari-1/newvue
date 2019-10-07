<template>
  <div class="all">
    <Home :goods="goods" :comments="comments" @add="add" />
    <!-- <Footer
      :goods="goods"
      :choices="choices"
      :isActive="isActive"
      @showChoices="showChoices"
      :choicesNum="choicesNum"
    />-->
  </div>
</template>

<script>
import Home from "./components/Home";

import axios from "axios";
export default {
  name: "app",
  components: {
    Home
  },
  data() {
    return {
      goods: [],
      comments: [
        {
          id: "wdfd",
          src:
            "https://img.meituan.net/avatar/2fa885794eb28eefa0895b8115ad713920084.jpg",
          name: "轩***4",
          time: "2019-05-09",
          describe: "包装完好，快速准时，赞(≧▽≦)/"
        },
        {
          id: "wdfd1",
          src:
            "https://img.meituan.net/avatar/2fa885794eb28eefa0895b8115ad713920084.jpg",
          name: "轩***4",
          time: "2019-05-09",
          describe: "包装完好，快速准时，赞(≧▽≦)/"
        },
        {
          id: "wdfd2",
          src:
            "https://img.meituan.net/avatar/2fa885794eb28eefa0895b8115ad713920084.jpg",
          name: "轩***4",
          time: "2019-05-09",
          describe: "包装完好，快速准时，赞(≧▽≦)/"
        },
        {
          id: "wdfd3",
          src:
            "https://img.meituan.net/avatar/2fa885794eb28eefa0895b8115ad713920084.jpg",
          name: "轩***4",
          time: "2019-05-09",
          describe: "包装完好，快速准时，赞(≧▽≦)/"
        },
        {
          id: "wdfd4",
          src:
            "https://img.meituan.net/avatar/2fa885794eb28eefa0895b8115ad713920084.jpg",
          name: "轩***4",
          time: "2019-05-09",
          describe: "包装完好，快速准时，赞(≧▽≦)/"
        }
      ],
      choices: [],
      isActive: false,
      id: "",
      choiceNum: "1"
    };
  },

  created() {
    axios.get("http://localhost:3008/goods").then(res => {
      this.goods = res.data;
    });
  },
  methods: {
    add(food) {
      const choice = {
        id: food.id,
        image: food.image,
        name: food.name,
        price: food.price,
        number: "1"
      };
      // this.choices.push(choice);
      if (this.choices.length === 0) {
        this.choices.push(choice);
      } else {
        for (let i = 0; i < this.choices.length; i++) {
          if (food.id === this.choices[i].id) {
            console.log(this.choices[i]);
            console.log(parseInt(choice.number) + 1);
            const number1 = parseInt(choice.number);
            choice.number = number1.toString();

            // this.id = food.id;
          } else {
            this.choices.push(choice);
            console.log("111");
          }
        }
      }
    },
    showChoices() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style>
.all {
  height: 100vh;
}
</style>
