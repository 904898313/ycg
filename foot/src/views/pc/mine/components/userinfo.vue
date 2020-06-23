<template>
  <div class="container">
    <div class="title">
      <span v-if="userInfo.vipInfo!==undefined">
        <img src="@/assets/images/mine/remind_I@2x.png" alt />
        您的会员还有{{userInfo.vipInfo.lastDay}}天到期
      </span>
    </div>
    <div class="info">
      <div class="info-top">
        <el-image
          class="imgs"
          :src="userInfo.avatar"
          @mouseenter="head = true"
          @mouseleave="head = false"
        >
          <div
            slot="error"
            class="errorImgBig"
            @mouseenter="head = true"
            @mouseleave="head = false"
          >
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
        <div class="hoverimg" v-show="head" @mouseenter="head = true" @mouseleave="head = false">
          <el-upload
            class="avatar-uploader"
            :action="apiUrl()"
            :show-file-list="false"
            :on-success="handleSuccess"
            name="files"
            enctype="multipart/form-data"
            ref="upload"
          >
            <i class="el-icon-edit-outline"></i>
          </el-upload>
          <span>修改头像</span>
        </div>
        <div class="usermid">
          <div class="name">
            <span>{{userInfo.userName}}</span>
            <img src="@/assets/images/mine/VIP5@2x.png" alt />
            <img src="@/assets/images/mine/edit.png" alt class="editImg" @click="editName" />
            <div class="editname" v-if="editname">
              <input v-model="userName" type="text" class="nameipt" />
              <el-button type="info" round size="small" class="submit" @click="edituserInfo">确定</el-button>
            </div>
          </div>
          <div class="leva">
            <span>Lv {{userInfo.userLevel}}</span>
            <div class="progress">
              <el-progress
                :percentage="percentage"
                :color="customColor"
                :show-text="false"
                :stroke-width="6"
              ></el-progress>
            </div>
            <span>等级特权</span>
          </div>
          <div class="number">
            <img src="@/assets/images/mine/qiubi.png" alt />
            <span class="qiubi">球币：</span>
            <span class="num">{{userInfo.ballCoin}}</span>
            <el-button round size="mini" class="round" @click="recharge">充值</el-button>
          </div>
        </div>
        <div class="qiandao">
          <img src="@/assets\images\mine\qiandao_i@2x.png" alt />
          <span>签到领币</span>
        </div>
      </div>
    </div>
    <div class="bgimg">
      <img src="@/assets\images\mine\vip_bg@2x.png" alt />
    </div>
  </div>
</template>

<script>
import * as mine from "@/api/mine";
export default {
  name: "userinfo",
  data() {
    return {
      textarea: "",
      userName: "",
      percentage: 60,
      customColor: "#ffc002",
      index: 8,
      editname: false,
      head: false
    };
  },
  updated() {},
  created() {},
  computed: {
    // 获取个人信息
    userInfo() {
      return JSON.parse(this.$store.getters.userInfro);
    }
  },
  mounted() {},
  methods: {
    recharge() {
      this.$emit("fromchildIndex", this.index);
    },
    // 显示修改昵称输入
    editName() {
      this.editname = !this.editname;
    },
    // 提交修改昵称
    edituserInfo() {
      const data = {
        userName: this.userName
      };
      mine.edituserInfo(data).then(res => {
        this.editname = false;
        this.$store.dispatch("getglobalInfo");
      });
    },
    // 头像上传
    handleSuccess(file) {
      console.log(process.env.VUE_APP_BASE_URL + file.data[0].filePath);
      const data = {
        avatar: process.env.VUE_APP_BASE_URL + file.data[0].filePath
      };
      mine.edituserInfo(data).then(res => {
        this.editname = false;
        this.$store.dispatch("getglobalInfo");
      });
    },
    // 获取baseurl
    apiUrl() {
      var url = process.env.VUE_APP_BASE_API + "/file/uploadFiles";
      return url;
    }
  }
};
</script>

<style src="@/assets/css/pc/mine/userinfo.scss" lang="scss" scoped></style>

<style lang="scss">
.submit {
  background: #232323;
  margin-left: 10px;
}
</style>
