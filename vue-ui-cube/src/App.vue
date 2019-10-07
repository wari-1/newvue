<template>
  <div>
    <h1>Vue的UI Cube</h1>
    <cube-button inline>Button</cube-button>
    <cube-button @click="showPicker">Picker</cube-button>
    <p></p>
    <div class="scroll-list-wrap">
      <cube-scroll
        ref="scroll"
        :data="items"
        @pulling-down="onPullingDown"
        @pulling-up="onPullingUp"
        :options="{pullDownRefresh:{
          txt:'加载成功'
        },pullUpLoad:true}"
      >
        <div class="list" v-for="(item,index) in items" :key="index">{{item}}</div>

        <!-- <div v-show="!props.isPullingDown" class="text">
          <i class="cubeic-right"></i>
        </div>-->
      </cube-scroll>
    </div>
    <!-- <div class="scroll-list-wrap1">
      <cube-scroll
        ref="scroll"
        :data="itemms"
        @pulling-down="onPullingDown"
        @pulling-up="onPullingUp"
        direction:"horizontal"
      ></cube-scroll>
    </div>-->
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "app",
  computed: {
    options() {
      return {
        pullDownRefresh: this.pullDownRefreshObj,
        pullUpLoad: this.pullUpLoadObj,
        scrollbar: true
      };
    }
  },
  data() {
    return {
      column1: [
        { title: "锋芒初露少年志1", id: "锋芒初露少年志1" },
        { title: "傲骨铮铮少年气2", id: "傲骨铮铮少年气2" },
        { title: "识明智审稳大局3", id: "识明智审稳大局3" },
        { title: "斡旋谋略护长安4", id: "斡旋谋略护长安4" },
        { title: "少年名士意气风发5", id: "少年名士意气风发5" },
        { title: "司丞心中自有乾坤6", id: "司丞心中自有乾坤6" },
        { title: "天才之相始悟于心7", id: "天才之相始悟于心7" },
        { title: "少年之气浑然天成8", id: "少年之气浑然天成8" },
        { title: "行于竹影斑驳间9", id: "行于竹影斑驳间9" },
        { title: "隐于轻纱薄雾里10", id: "隐于轻纱薄雾里10" },
        { title: "肝肠煦若春风11", id: "肝肠煦若春风11" },
        { title: "气骨清如秋水12", id: "气骨清如秋水12" }
      ],
      items: [
        "😀 😁 😂 🤣 😃 😄 ",
        "🙂 🤗 🤩 🤔 🤨 😐 ",
        "👆🏻 scroll up/down 👇🏻 ",
        "😔 😕 🙃 🤑 😲 ☹️ ",
        "🐣 🐣 🐣 🐣 🐣 🐣 ",
        "👆🏻 scroll up/down 👇🏻 ",
        "🐥 🐥 🐥 🐥 🐥 🐥 ",
        "🤓 🤓 🤓 🤓 🤓 🤓 ",
        "👆🏻 scroll up/down 👇🏻 ",
        "🦔 🦔 🦔 🦔 🦔 🦔 ",
        "🙈 🙈 🙈 🙈 🙈 🙈 ",
        "👆🏻 scroll up/down 👇🏻 ",
        "🚖 🚖 🚖 🚖 🚖 🚖 ",
        "✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 "
      ],
      itemms: [
        {
          id: "123",
          content:
            '<div class="markdown-text"><p><a href="/user/liveinjs">@liveinjs</a>  不同意你的说法。对项目作者自己，是一个整理自身所学的过程，能够查漏补缺，增强理解。对于读者，一是step by  step的教程有助于减少入门的挫折感，二是作为例程可以在自己的项目里复用，三是学习思路和一些模块的用法。同时作为公开项目，可以众包建设、可以不断改进。这种模式可以说是一石多鸟，必将大行其道，取代现有的计算机类书籍。 <a href="/user/alsotang">@alsotang</a>  加油~</p>\n</div><div class="markdown-text"><p>嗯，刚才用iconv的时候，没注意第一个参数必须是个buffer，我之前用的是字符串，怪不得一直不成功，后来改成用buffer就好了</p>\n</div><div class="markdown-text"><p>GitHub repo 地址：<a href="https://github.com/alsotang/node-lessons">https://github.com/alsotang/node-lessons</a></p>\n<p>如果大家认为漏了哪些初学者应会的内容，可以在此留言，或者开个 issue 给我（!!推荐）。</p>\n<hr>\n<h1>《Node.js 包教不包会》 – by alsotang</h1>\n<h1>为何写作此课程</h1>\n<p>在 CNode(<a href="https://cnodejs.org/">https://cnodejs.org/</a>) 混了那么久，解答了不少 Node.js 初学者们的问题。回头想想，那些问题所需要的思路都不难，但大部分人由于练手机会少，所以在遇到问题的时候很无措。国内唯一一本排的上号的 Node.js 书是 @朴灵(<a href="https://github.com/JacksonTian">https://github.com/JacksonTian</a>) 的 《深入浅出Node.js》(<a href="http://book.douban.com/subject/25768396/">http://book.douban.com/subject/25768396/</a> )，但这本书离实战还是比较远的。</p>\n<p>这个课程是希望提供更多的 Node.js 实战机会，通过每一节精心安排的课程目标，让 Node.js 的初学者们可以循序渐进地，有目的有挑战地开展 Node.js 的学习。</p>\n<p>更多 Node.js 入门资料请前往：<a href="https://cnodejs.org/getstart">https://cnodejs.org/getstart</a></p>\n<h1>课程列表</h1>\n<ul>\n<li>Lesson 0: <a href="https://github.com/alsotang/node-lessons/tree/master/lesson0">《搭建 Node.js 开发环境》</a></li>\n<li>Lesson 1: <a href="https://github.com/alsotang/node-lessons/tree/master/lesson1">《一个最简单的 express 应用》</a></li>\n<li>Lesson 2: <a href="https://github.com/alsotang/node-lessons/tree/master/lesson2">《学习使用外部模块》</a></li>\n<li>Lesson 3: <a href="https://github.com/alsotang/node-lessons/tree/master/lesson3">《使用 superagent 与 cheerio 完成简单爬虫》</a></li>\n<li>Lesson 4: <a href="https://github.com/alsotang/node-lessons/tree/master/lesson4">《使用 eventproxy 控制并发》</a></li>\n<li>Lesson 5: <a href="https://github.com/alsotang/node-lessons/tree/master/lesson5">《使用 async 控制并发》</a></li>\n<li>Lesson 6: <a href="https://github.com/alsotang/node-lessons/tree/master/lesson6">《测试用例：mocha，should，istanbul》</a></li>\n<li>Lesson 7: 《测试用例：supertest》</li>\n<li>Lesson 8: 《Mongodb 与 Mongoose 的使用》</li>\n<li>Lesson 9: 《一个简单的 blog》</li>\n</ul>\n<h1>License</h1>\n<p>MIT</p>\n</div>'
        }
      ]
    };
  },
  methods: {
    showPicker() {
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: "Picker",
          data: [this.column1],
          alias: {
            value: "id",
            text: "title"
          },
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        });
      }

      this.picker.show();
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        type: "warn",

        content: `Selected Item: <br/> - value: ${selectedVal} <br/> - index: ${selectedIndex.join(
          " "
        )} <br/> - text: ${selectedText.join(" ")}`,
        icon: "cubeic-alert"
      }).show();
      document.querySelector("p").innerHTML = selectedText;
    },
    cancelHandle() {
      this.$createToast({
        type: "error",
        txt: "Picker canceled",
        time: 500
      }).show();
    },
    onPullingDown() {
      setTimeout(() => {
        this.items = [...this.items].reverse();
      }, 1000);

      // console.log("111");
      // this.$refs.scroll.forceUpdate();
      // console.log(this.$refs.scroll);
    },
    onPullingUp() {
      // 模拟更新数据
      setTimeout(() => {
        if (Math.random() > 0.5) {
          // 如果有新数据
          let newPage = _foods.slice(0, 5);
          this.items = this.items.concat(newPage);
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate();
        }
      }, 1000);
    },
    onPullingUp() {
      setTimeout(() => {
        this.items.push(
          "👆🏻 scroll up/down 👇🏻 ",
          "😔 😕 🙃 🤑 😲 ☹️ ",
          "🐣 🐣 🐣 🐣 🐣 🐣 ",
          "👆🏻 scroll up/down 👇🏻 ",
          "🐥 🐥 🐥 🐥 🐥 🐥 ",
          "🤓 🤓 🤓 🤓 🤓 🤓 ",
          "👆🏻 scroll up/down 👇🏻 "
        );
      }, 1000);
    },
    scrollTo() {
      this.$refs.scroll.scrollTo(
        0,
        this.scrollToY,
        this.scrollToTime,
        ease[this.scrollToEasing]
      );
    }
  }
};
</script>

<style>
.scroll-list-wrap {
  width: 100%;
  height: 500px;
}
ul {
  list-style: inside;
}
.list {
  padding: 20px 0;
}
</style>
