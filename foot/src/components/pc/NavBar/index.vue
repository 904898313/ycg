<template>
  <div class="Nav">
    <!--顶部-->
    <div class="navTop">
      <div class="navTop_wh">
        <div class="navTop_left">众邦体育 - 让数据预测赛果,用技术改变生活</div>
        <div class="navTop_btn">
          <template v-if="userInfo">
            <el-dropdown @command="handleCommand">
              <div class="avatar">
                <el-avatar :size="25" :src="userInfo.avatar?userInfo.avatar:circleUrl"></el-avatar>
                <span>{{userInfo.userName}}</span>
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">个人中心</el-dropdown-item>
                <el-dropdown-item command="b" divided>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
          <template v-else>
            <el-link :underline="false" class="loginBtn" @click="login">登录</el-link>
            <el-link :underline="false" class="loginBtn" @click="login">注册</el-link>
          </template>
        </div>
      </div>
    </div>
    <!--搜索-->
    <div class="navSearch">
      <div class="navSearch_wh">
        <img class="navLogo" src="../../../assets/images/logo.png" />
        <div class="searchBox">
          <el-input class="searchInput" v-model="searchText" placeholder="请输入内容"></el-input>
          <div class="searchBtn">搜索</div>
        </div>
      </div>
    </div>
    <!--导航栏-->
    <div id="navBar" class="navBar" :class="{'navBarFixed':isFixed}">
      <ul class="navBar_wh">
        <li
          v-for="(item,index) in navBar"
          :class="{'navActive': navActivate === item.name}"
          :key="index"
          @click="redirectFunc(item.path)"
        >
          <span>{{item.name}}</span>
          <ul class="nav_down" v-if="item.list">
            <li
              v-for="(items,idx) in item.list"
              :class="{'navDown': navDown === items.name}"
              :key="idx"
              @click="redirectFunc(items.path)"
            >{{items.name}}</li>
          </ul>
        </li>
      </ul>
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
      searchText: "", // 搜索
      navBar: [
        { name: "首页", list: "", path: "pc-home" },
        { name: "即时比分", list: "", path: "pc-instantscore" },
        { name: "滚球专栏", list: "", path: "pc-rollingball" },
        { name: "彩经学院", list: "", path: "pc-college1" },
        { name: "赛事推荐", list: "", path: "pc-match" },
        { name: "问答专栏", list: "", path: "pc-questions" },
        {
          name: "直播回放",
          list: [
            { name: "视频直播", path: "pc-matchlive" },
            { name: "录像回放", path: "pc-matchreplay" },
            { name: "足球集锦", path: "pc-matchhighlights" }
          ]
        },
        { name: "热门资讯", path: "pc-hotnews" },
        {
          name: "足球资料",
          list: [
            { name: "赛事一览", path: "pc-matchdata" },
            { name: "球队一览", path: "pc-teamhome" },
            { name: "球员一览", path: "pc-playerdata" },
            { name: "足球图集", path: "pc-atlas" }
          ]
        }
      ],
      isFixed: false
    };
  },
  computed: {
    // 获取个人信息
    userInfo() {
      return JSON.parse(this.$store.getters.userInfro);
    }
  },
  created() {},
  mounted() {
    // 监听滚动导航吸附
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 130) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },
    login() {
      this.$store.commit("SET_LOGIN", true);
    },
    handleCommand(command) {
      if (command === "a") {
        this.redirectFunc("pc-mine");
      } else {
        this.$dialog
          .confirm({
            title: "退出登录",
            message: "是否确认退出？"
          })
          .then(() => {
            // on confirm
          })
          .catch(() => {
            console.log("取消");
          });
      }
    },
    // 跳转
    redirectFunc(param) {
      this.$router.push({
        name: param
      });
    }
  }
};
</script>
<style lang="scss">
.Nav {
  .el-input__inner {
    width: 330px;
    height: 34px;
    border-radius: 0;
    background-color: #f7f7fb;
  }
  .el-input__inner:focus-within {
    border-color: $themeColor;
  }
}
</style>
<style lang="scss" scoped>
.Nav {
  width: 100%;
  height: auto;
  min-width: 1100px;
  .navTop {
    width: 100%;
    height: 35px;
    background-color: #f7f7fb;
    border-bottom: 1px solid #dcdcdc;
    display: flex;
    justify-content: center;
    .navTop_wh {
      width: 1200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .navTop_left {
        font-size: 13px;
        color: $themeColor;
      }
      .navTop_btn {
        .avatar {
          display: flex;
          align-items: center;
          cursor: pointer;
          > span {
            font-size: 14px;
            margin-left: 10px;
            color: #666;
          }
        }
        .loginBtn {
          margin-left: 20px;
          font-size: 13px;
          color: $themeColor;
        }
      }
    }
  }
  .navSearch {
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    background-color: #ffffff;
    .navSearch_wh {
      width: 1200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .navLogo {
        width: 191px;
        height: 64px;
      }
      .searchBox {
        width: 412px;
        display: flex;
        .searchInput {
          width: 330px;
          height: 34px;
        }
        .searchBtn {
          width: 80px;
          height: 34px;
          line-height: 34px;
          background-color: $themeColor;
          font-size: 14px;
          color: #ffffff;
          text-align: center;
          cursor: pointer;
        }
      }
    }
  }
  .navBar {
    width: 100%;
    height: 44px;
    background-color: $themeColor;
    display: flex;
    justify-content: center;
    .navBar_wh {
      width: 1200px;
      display: flex;
      li {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: relative;
        span {
          font-size: 14px;
          color: #ffffff;
          position: relative;
        }
        .nav_down {
          width: 100%;
          height: auto;
          padding: 10px 0;
          background-color: #ffffff;
          position: absolute;
          top: 44px;
          z-index: 99;
          display: none;
          li {
            line-height: 38px;
            text-align: center;
            font-size: 14px;
            color: #333333;
          }
          > li:hover {
            background-color: #3b3b46;
            color: #ffffff;
            transition: 0.3s;
          }
          .navDown {
            background-color: #3b3b46;
            color: #ffffff;
          }
        }
      }
      > li:hover {
        background-color: #3b3b46;
        transition: 0.3s;
      }
      > li:nth-child(7) span:after {
        content: "";
        background-image: url("../../../assets/images/navbar/nav_down.png");
        background-size: 12px 12px;
        position: absolute;
        width: 12px;
        height: 12px;
        z-index: 100;
        right: -18px;
        top: 4px;
      }
      > li:nth-child(9) span:after {
        content: "";
        background-image: url("../../../assets/images/navbar/nav_down.png");
        background-size: 12px 12px;
        position: absolute;
        width: 12px;
        height: 12px;
        z-index: 100;
        right: -18px;
        top: 4px;
      }
      > li:nth-child(7):hover .nav_down {
        display: block;
      }
      > li:nth-child(9):hover .nav_down {
        display: block;
      }
      .navActive {
        background-color: #3b3b46;
      }
    }
  }
  .navBarFixed {
    position: fixed;
    top: 0;
    z-index: 999;
  }
}
</style>
