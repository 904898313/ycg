<template>
  <div class="systempage">
    <div class="zhanghu">
      <div class="title">
        <i></i>
        <span>账户安全</span>
      </div>
      <div class="sevlist">
        <div class="one">
          <img src="@/assets/images/mine/iphone_i@2x.png" alt />
          <div class="mid">
            <div class="mid-top">
              <span class="bangding">绑定手机号</span>
              <i>|</i>
              <span class="bsstatus">未绑定</span>
            </div>
            <div class="mid-bot">手机相关的安全及提醒服务</div>
          </div>
          <div class="btns" @click="bindPhone">绑定手机</div>
        </div>
        <div class="one">
          <img src="@/assets/images/mine/password_i@2x.png" alt />
          <div class="mid">
            <div class="mid-top">
              <span class="bangding">已设置密码</span>
            </div>
            <div class="mid-bot">数字与字母结合，提高密码安全性</div>
          </div>
          <div class="btns">绑定手机</div>
        </div>
      </div>
    </div>
    <div class="zhanghu">
      <div class="title">
        <i></i>
        <span>第三方绑定</span>
      </div>
      <div class="sevlist">
        <div class="one">
          <img src="@/assets/images/mine/QQgray-icon@2x.png" alt />
          <div class="mid">
            <div class="mid-top">
              <span class="bangding">绑定QQ</span>
              <i>|</i>
              <span class="bsstatus">未绑定</span>
            </div>
            <div class="mid-bot">绑定QQ号，可便捷登录</div>
          </div>
          <div class="btns">绑定QQ</div>
        </div>
        <div class="one">
          <img src="@/assets/images/mine/weixingray-iconx@2x.png" alt />
          <div class="mid">
            <div class="mid-top">
              <span class="bangding">绑定微信</span>
              <span class="bsstatus"></span>
            </div>
            <div class="mid-bot">手机相关的安全及提醒服务</div>
          </div>
          <div class="btns">绑定微信</div>
        </div>
        <div class="one">
          <img src="@/assets/images/mine/weibo-icon@2x.png" alt />
          <div class="mid">
            <div class="mid-top">
              <span class="bangding">已绑定微博</span>
            </div>
            <div class="mid-bot">绑定微博号，可便捷登录</div>
          </div>
          <div class="btns active">解除绑定</div>
        </div>
      </div>
    </div>

    <div class="zhanghu">
      <div class="title">
        <i></i>
        <span>注销账户</span>
      </div>
      <div class="sevlist">
        <div class="one">
          <img src="@/assets/images/mine/QQgray-icon@2x.png" alt />
          <div class="mid">
            <div class="mid-top">
              <span class="bangding">注销账户</span>
            </div>
            <div class="mid-bot">注销后将无法恢复，请谨慎操作</div>
          </div>
          <div class="btns">立即注销</div>
        </div>
      </div>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  created() {},
  methods: {
    // 绑定手机
    bindPhone() {
      this.dialogVisible = true;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style src="../../../../assets/css/pc/mine/systempage.scss" lang="scss" scoped></style>