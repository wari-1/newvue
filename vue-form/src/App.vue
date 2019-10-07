<template>
  <div>
    <h1>Vue的表单</h1>
    <!-- <input type="text" :value="val" @input="changeValue"> -->
    <input type="text" v-model="val">
    <input type="submit" @click="submit">
    <div class="shuangxuan">
      <input type="checkbox" v-model="checkedInput" id="one" value="榴莲1">
      <label for="one">榴莲1</label>
      <br>
      <input type="checkbox" v-model="checkedInput" id="two" value="榴莲2">
      <label for="two">榴莲2</label>
      <br>
      <input type="checkbox" v-model="checkedInput" id="three" value="榴莲3">
      <label for="three">榴莲3</label>
      <br>
      <input type="checkbox" v-model="checkedInput" id="four" value="榴莲4">
      <label for="four">榴莲4</label>
      <br>
      <p>选中的结果：{{checkedInput}}</p>
    </div>
    <div class="danxuan">
      <input type="radio" v-model="pickedInput" id="one1" name="radio" value="榴莲">
      <label for="one1">榴莲</label>
      <br>
      <input type="radio" v-model="pickedInput" id="two1" name="radio" value="腐竹">
      <label for="two1">腐竹</label>

      <br>
      <p>选中的结果：{{pickedInput}}</p>
    </div>
    <div class="xuanze">
      <select v-model="selectedVal">
        <option value="请选择" disabled>请选择</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button @click="handleClick">按钮（获取数据）</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      val: "111",
      checkedInput: [],
      pickedInput: "",
      selectedVal: 0,
      number: 0
    };
  },
  methods: {
    // changeValue() {
    //   this.val = event.target.value;//实时更新数据，让val实时变化
    // },
    submit() {
      console.log(this.val);
    },
    handleClick() {
      console.log("this.number");
    }
  }
};
</script>

<style>
</style>
