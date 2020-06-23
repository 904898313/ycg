<template>
  <div class="container">
    <header>
      <div class="left">
        <img src="@/assets/images/mine/backtrack-i@2x.png" @click="back()" class="back" />
      </div>
      <div class="mid">
        <span>凯利指数</span>
      </div>
      <div class="indemnity-menu"></div>
    </header>
    <div class="finish">
      <div class="score">
        <div class="left">
          <img src="@/assets/images/instantscore/lwp@2x.png" alt />
          <span>切尔西</span>
        </div>
        <div class="mid">
          <p class="txt1">已完场</p>
          <p class="txt2">
            <span>3</span> |
            <span>0</span>
          </p>
        </div>
        <div class="right">
          <img src="@/assets/images/instantscore/lwp@2x.png" alt />
          <span>伯克利</span>
        </div>
      </div>
      <div class="masking">
        <div class="top">
          <span>凯利[初]</span>
          <span>凯丽[即]</span>
        </div>
        <div class="mid">
          <div class="aa">
            <span>0.99</span>
            <span>0.99</span>
            <span>0.99</span>
          </div>
          <div class="aa">
            <span>0.99</span>
            <span>0.99</span>
            <span>0.99</span>
          </div>
        </div>
        <div class="bot">
          <div class="aa">
            <p>赔付率：92.4%</p>
          </div>
          <div class="aa">
            <p>赔付率：95.90%</p>
          </div>
        </div>
      </div>
    </div>
    <div class="sample">
      <div class="title">样本数据</div>
      <div class="chart">
        <div class="numerical">
          <div class="top">
            <span>
              升赔公司
              <img src="@/assets/images/instantscore/replace_i@2x.png" alt />
            </span>
            <span>
              降赔公司
              <img src="@/assets/images/instantscore/put-on_i@2x.png" alt />
            </span>
          </div>
          <div class="bar">
            <div class="left">
              <div class="item">
                <span class="num" :style="{color:'#f55e53'}">7</span>
                <i v-bind:style="styleObject"></i>
                <span class="record">胜</span>
              </div>
              <div class="item">
                <span class="num" :style="{color:'#a6b2be'}">5</span>
                <i v-bind:style="styleObject2"></i>
                <span class="record">平</span>
              </div>
              <div class="item">
                <span class="num" :style="{color:'#2fcc86'}">1</span>
                <i v-bind:style="styleObject3"></i>
                <span class="record">平</span>
              </div>
            </div>
            <div class="right">
              <div class="item">
                <span class="num" :style="{color:'#f55e53'}">2</span>
                <i v-bind:style="styleObject4"></i>
                <span class="record">胜</span>
              </div>
              <div class="item">
                <span class="num" :style="{color:'#a6b2be'}">3</span>
                <i v-bind:style="styleObject5"></i>
                <span class="record">平</span>
              </div>
              <div class="item">
                <span class="num" :style="{color:'#2fcc86'}">9</span>
                <i v-bind:style="styleObject6"></i>
                <span class="record">负</span>
              </div>
            </div>
          </div>
        </div>
        <div class="ou-tables">
          <div class="title">
            <div class="menu1">
              <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="option1" />
              </van-dropdown-menu>
            </div>
            <div class="menu2">
              <van-dropdown-menu>
                <van-dropdown-item v-model="value2" :options="option2" />
              </van-dropdown-menu>
            </div>
            <div class="rate">返还率</div>
          </div>
          <div class="list">
            <div class="info">
              <div class="left">
                <div class="name">
                  BET365
                  <i>主</i>
                </div>
                <div class="cut">
                  <span>初</span>
                  <span>即</span>
                </div>
              </div>
              <div class="right">
                <span v-for="(item,index) in oupeidata" :key="index">{{item.text}}</span>
              </div>
            </div>
            <div class="info">
              <div class="left">
                <div class="name">
                  BET365
                  <i>主</i>
                </div>
                <div class="cut">
                  <span>初</span>
                  <span>即</span>
                </div>
              </div>
              <div class="right">
                <span v-for="(item,index) in oupeidata" :key="index">{{item.text}}</span>
              </div>
            </div>
            <div class="info">
              <div class="left">
                <div class="name">
                  BET365
                  <i>主</i>
                </div>
                <div class="cut">
                  <span>初</span>
                  <span>即</span>
                </div>
              </div>
              <div class="right">
                <span v-for="(item,index) in oupeidata" :key="index">{{item.text}}</span>
              </div>
            </div>
            <div class="info">
              <div class="left">
                <div class="name">
                  BET365
                  <i>主</i>
                </div>
                <div class="cut">
                  <span>初</span>
                  <span>即</span>
                </div>
              </div>
              <div class="right">
                <span v-for="(item,index) in oupeidata" :key="index">{{item.text}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as scoreInfo from "@/api/instantscore";
export default {
  components: {},
  data() {
    return {
      currid: 0,
      value1: 0,
      value2: 0,
      oupeidata: [
        {
          text: "4.02"
        },
        {
          text: "5.25"
        },
        {
          text: "1.50"
        },
        {
          text: "89.6%"
        },
        {
          text: "4.46"
        },
        {
          text: "5.03"
        },
        {
          text: "1.03"
        },
        {
          text: "89.6%"
        }
      ],
      option1: [
        { text: "全部公司", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "赔率", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      styleObject: {
        width: ".36rem",
        height: ".52rem",
        backgroundColor: "#f55e53"
      },
      styleObject2: {
        width: ".36rem",
        height: ".15rem",
        backgroundColor: "#a6b2be"
      },
      styleObject3: {
        width: ".36rem",
        height: ".1rem",
        backgroundColor: "#2fcc86"
      },
      styleObject4: {
        width: ".36rem",
        height: ".1rem",
        backgroundColor: "#f55e53"
      },
      styleObject5: {
        width: ".36rem",
        height: ".2rem",
        backgroundColor: "#f55e53"
      },
      styleObject6: {
        width: ".36rem",
        height: ".05rem",
        backgroundColor: "#2fcc86"
      },
      value1: 0,
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ]
    };
  },
  created() {},
  mounted() {
    // this._initData();
  },
  methods: {
    // 初始化同赔列表数据
    _initData() {
      const data = {};
      scoreInfo.sameOddsList(data).then(res => {
        console.log(res);
      });
    },
    changecurr(index) {
      this.currid = index;
    },
    back() {
      this.$router.go(-1);
    }
  },
  computed: {},
  watch: {}
};
</script>
<style lang='scss' src="@/assets/css/ph/instantscore/kelly.scss" scoped>
</style>
<style lang="scss">
</style>