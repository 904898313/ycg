<template>
  <div class="navList">
    <span class="cen">个人中心</span>
    <div
      :class="navIndex==index?'active':''"
      class="navItem"
      v-for="(item,index) in list"
      :key="index"
      @click="navList(index)"
    >
      <i :class="navIndex==index?'active-border':''"></i>
      <img :src="item.imageUrl" alt :class="navIndex==index?'active-img':''" />
      <span :class="navIndex==index?'active':''">{{item.txt}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "navlist",
  data() {
    return {
      list: [
        {
          imageUrl: require("@/assets/images/mine/profile_i@2x.png"),
          txt: "我的资料"
        },

        {
          imageUrl: require("@/assets/images/mine/system_i@2x.png"),
          txt: "系统消息"
        },
        {
          imageUrl: require("@/assets/images/mine/VIP_i2@2x.png"),
          txt: "VIP专区"
        },
        {
          imageUrl: require("@/assets/images/mine/tally_i@2x.png"),
          txt: "记账本"
        },
        {
          imageUrl: require("@/assets/images/mine/consumption_i@2x.png"),
          txt: "消费记录"
        },
        {
          imageUrl: require("@/assets/images/mine/help_i@2x.png"),
          txt: "帮助中心"
        },
        {
          imageUrl: require("@/assets/images/mine/feedback_i@2x.png"),
          txt: "意见反馈"
        },
        {
          imageUrl: require("@/assets/images/mine/install_i@2x.png"),
          txt: "系统设置"
        }
      ],
      navIndex: 0
    };
  },
  created() {},
  methods: {
    // 导航菜单
    navList(index) {
      this.navIndex = index;
      this.$emit("fromchild", index);
    }
  }
};
</script>

<style src="@/assets/css/pc/mine/navlist.scss" lang="scss" scoped></style>
