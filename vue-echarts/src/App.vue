<template>
  <div>
    <div id="main"></div>
    <!-- <button @click="addData">anniu</button> -->
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "app",
  data() {
    return {
      arr: [
        { id: "1", val: 3.9, dec: "4k~6k" },
        { id: "2", val: 18.8, dec: "6k~8k" },
        { id: "3", val: 18.8, dec: "8k~10k" },
        { id: "4", val: 41.1, dec: "10k~15k" },
        { id: "5", val: 10.9, dec: "15k~20k" },
        { id: "6", val: 6.5, dec: "20k~30k" }
      ]
    };
  },

  mounted() {
    this.myChart = echarts.init(document.getElementById("main"));
    this.initChart(this.arr);
  },
  methods: {
    addData() {
      this.arr.push({
        id: "8",
        val: this.arr.length,
        dec: "30k~40k"
      });
      this.initChart(this.arr);
    },
    initChart(data) {
      const option = {
        tooltip: {
          extraCssText: "text-align: center;font-size:14px;"
        },
        legend: {
          orient: "vertical",
          x: "right",
          y: "middle",
          data: data.map(item => item.dec)
        },
        color: [
          "rgb(234, 85, 65)",
          "rgb(68, 189, 207)",
          "rgb(47, 69, 84)",
          "rgb(97, 160, 168)",
          "rgb(145, 199, 174)",
          "rgb(116, 159, 131)",
          " #bda29a",
          "#d659ea"
        ],
        series: [
          {
            name: "薪资待遇",
            type: "pie",
            radius: ["30%", "70%"],
            center: ["50%", "60%"],
            data: data.map(item => {
              return {
                value: item.val,
                name: item.dec
              };
            })
          }
        ]
      };
      this.myChart.setOption(option);
    }
  }
};
</script>

<style>
#main {
  width: 7.5rem;
  height: 4rem;
}
</style>
