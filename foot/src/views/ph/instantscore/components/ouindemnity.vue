<template>
  <div>
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
          <div class="info" v-for="(item,index) in 10" :key="index">
            <div class="left">
              <div class="name">
                BET365
                <span><i>主</i></span>
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
    <div class="addheight"></div>
    <div class="footer">
      <span @click="todemnity">同赔</span>
      <span @click="tokelly">凯利</span>
    </div>
  </div>
</template>

<script>
import * as scoreInfo from "@/api/instantscore";
export default {
  components: {},
  data() {
    return {
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
        width: ".5rem",
        height: ".92rem",
        backgroundColor: "#f55e53"
      },
      styleObject2: {
        width: ".5rem",
        height: ".78rem",
        backgroundColor: "#a6b2be"
      },
      styleObject3: {
        width: ".5rem",
        height: ".04rem",
        backgroundColor: "#2fcc86"
      },
      styleObject4: {
        width: ".5rem",
        height: ".14rem",
        backgroundColor: "#f55e53"
      },
      styleObject5: {
        width: ".5rem",
        height: ".24rem",
        backgroundColor: "#f55e53"
      },
      styleObject6: {
        width: ".5rem",
        height: "1rem",
        backgroundColor: "#2fcc86"
      }
    };
  },
  created() {
    // this.getCompanyList();
    // this.ouindemnityList();
  },
  mounted() {},
  methods: {
    // 初始化公司列表
    getCompanyList() {
      const data = {};
      scoreInfo.ouindemnityCompany(data).then(res => {
        console.log(res);
      });
    },
    // 初始化欧赔数据
    ouindemnityList() {
      const data = {
        // europeanIndex:1
      };
      scoreInfo.ouindemnityList(data).then(res => {
        console.log(data);
      });
    },
    todemnity() {
      this.$router.push({
        path: "/ph-indemnity"
      });
    },
    tokelly() {
      this.$router.push({
        path: "/ph-kelly"
      });
    }
  },
  computed: {},
  watch: {}
};
</script>
<style lang='scss' src="@/assets/css/ph/instantscore/ouindmnity.scss" scoped>
</style>
<style lang="scss">
.ou-tables .title .van-dropdown-menu__bar {
  background: #edeef3;
  height: 0.56rem;
}
.ou-tables .title .van-dropdown-menu__title {
  color: #999999;
  font-size: 0.24rem;
}
.van-dropdown-menu__title::after {
  border-color: transparent transparent currentColor currentColor;
}
</style>