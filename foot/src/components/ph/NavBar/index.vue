<template>
  <div>
    <!--导航-->
    <div class="navbar">
      <van-icon
        v-if="navbarShow"
        class="wap_nav"
        name="cross"
        size="26"
        color="#ffffff"
        @click="navbarShow = false"
      />
      <van-icon
        v-else
        class="wap_nav"
        name="wap-nav"
        size="26"
        color="#ffffff"
        @click="navbarShow = true"
      />
      <span>{{navActivate}}</span>
      <div class="navLeft">
        <van-icon name="search" size="26" color="#ffffff" />
        <img
          :src="userInfo?userInfo.avatar:require('../../../assets/images/navbar/photo.png')"
          @click="login"
        />
      </div>
    </div>
    <!--弹出层-->
    <div class="popupBox">
      <van-popup v-model="navbarShow" position="top" class="popup">
        <div class="navBox">
          <p>全部栏目</p>
          <ul class="navbarList">
            <li
              v-for="(item,index) in navBar"
              :class="{'navActive':navActivate === item.name }"
              :key="index"
              @click="redirectFunc(item.path,index) "
            >{{item.name}}</li>
          </ul>
          <ul class="navbarItem" v-if="navBar[navIdx].list">
            <li
              v-for="(item,index) in navBar[navIdx].list"
              :key="index"
              @click="redirectFunc(item.path,index) "
            >{{item.name}}</li>
          </ul>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    navActivate: {
      type: String,
      default: "首页"
    },
    navDown: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      navbarShow: false, // 弹窗显示
      navBar: [
        { name: "首页", list: "", path: "ph-home" },
        { name: "即时比分", list: "", path: "ph-instantscore-home" },
        { name: "滚球专栏", list: "", path: "ph-rollingball" },
        { name: "彩经学院", list: "", path: "ph-college1" },
        { name: "赛事推荐", list: "", path: "ph-match" },
        { name: "问答专栏", list: "", path: "ph-questions" },
        {
          name: "直播回放",
          list: [
            { name: "视频直播", path: "ph-matchlive" },
            { name: "录像回放", path: "ph-matchreplay" },
            { name: "足球集锦", path: "ph-matchcollection" }
          ]
        },
        { name: "热门资讯", path: "ph-hotnews" },
        {
          name: "足球资料",
          list: [
            { name: "赛事一览", path: "ph-matchdata" },
            { name: "球队一览", path: "ph-teamdata" },
            { name: "球员一览", path: "ph-playerdata" },
            { name: "足球图集", path: "ph-atlas" }
          ]
        }
      ],
      navIdx: 0
    };
  },
  computed: {
    // 获取个人信息
    userInfo() {
      return JSON.parse(this.$store.getters.userInfro);
    }
  },
  created() {},
  methods: {
    login() {
      this.$store.commit("SET_LOGIN", true);
    },
    redirectFunc(param, index) {
      this.navIdx = index;
      this.$router.push({
        name: param
      });
    }
  }
};
</script>
<style lang="scss">
.popupBox {
  .van-overlay,
  .popup {
    z-index: 995 !important;
  }
}
</style>
<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 0.88rem;
  padding: 0 0.24rem;
  background-color: $themeColor;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .wap_nav {
    flex: 1;
  }
  > span {
    flex: 2;
    font-size: 0.34rem;
    color: #ffffff;
    text-align: center;
  }
  .navLeft {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    img {
      width: 0.5rem;
      height: 0.5rem;
      margin-left: 0.2rem;
      border-radius: 50%;
    }
  }
}
/*遮罩层*/
.popup {
  top: 0.88rem;
  width: 100%;
  height: 4.85rem;
  .navBox {
    padding: 0.24rem;
    > p {
      font-size: 0.3rem;
      color: #222222;
    }
    .navbarList {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 2.18rem;
        height: 0.66rem;
        line-height: 0.66rem;
        background-color: #f7f7fb;
        text-align: center;
        color: #666666;
        font-size: 0.24rem;
        margin-left: 0.24rem;
        margin-top: 0.24rem;
        border-radius: 0.04rem;
      }
      li:nth-child(3n + 1) {
        margin-left: 0;
      }
      .navActive {
        background-color: $ffc002;
        color: #ffffff;
      }
    }
    .navbarItem {
      display: flex;
      justify-content: space-between;
      li {
        width: 2.18rem;
        height: 0.66rem;
        line-height: 0.66rem;
        text-align: center;
        color: #666666;
        font-size: 0.24rem;
        margin-top: 0.34rem;
        border-radius: 0.04rem;
        border: solid 1px #eeeeee;
      }
    }
  }
}
</style>
