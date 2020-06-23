<template>
  <div class="loginBox">
    <el-dialog
      :visible.sync="isLogin"
      :before-close="handleClose"
      :close-on-click-modal="false"
      :close-on-press-escape="false">
      <template slot="title">
        <div class="loginTop" v-if="tabIndex !== 2">
          <div class="top_tab" :class="{'top_tabActive':tabIndex === 0}" @click="tabBtn(0)">登录</div>
          <div class="top_tab" :class="{'top_tabActive':tabIndex === 1}" @click="tabBtn(1)">注册</div>
        </div>
        <div class="loginPwd" v-else>
          <i class="el-icon-arrow-left" @click="tabBtn(0)"></i>
          <span>密码找回</span>
        </div>
      </template>
      <div class="loginBody">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <!--登录-->
          <template v-if="tabIndex === 0">
            <el-form-item prop="userName">
              <div class="userInput">
                <img src="../../assets/images/login/user_icon.png">
                <el-input v-model="ruleForm.userName" placeholder="手机号" maxlength="11"></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="passWord">
              <div class="userInput">
                <img src="../../assets/images/login/password_icon.png">
                <el-input v-model="ruleForm.passWord" placeholder="请输入密码" type="password" maxlength="26"></el-input>
              </div>
            </el-form-item>
            <div class="forgot">
              <span @click="tabBtn(2)">忘记密码？</span>
            </div>
            <el-button class="loginBtn" :loading="loadingStatus" @click="submitForm()">登录</el-button>
            <el-divider><span class="divider">您也可以用以下方式登录</span></el-divider>
            <ul class="third_party">
              <li @click="tencentHandleClick('tencent')"><a><img src="../../assets/images/login/QQ.png"></a></li>
              <li @click="wechatHandleClick('wechat')"><a><img src="../../assets/images/login/weibo.png"></a></li>
              <li @click="wechatHandleClick('wechat')"><a><img src="../../assets/images/login/weixin.png"></a></li>
            </ul>
          </template>
          <!--注册-->
          <template v-if="tabIndex === 1">
            <el-form-item prop="userIphone">
              <div class="userInput">
                <img src="../../assets/images/login/user_icon.png">
                <el-input v-model="ruleForm.userIphone" placeholder="请输入手机号" maxlength="11"></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="passWord">
              <div class="userInput">
                <img src="../../assets/images/login/password_icon.png">
                <el-input v-model="ruleForm.passWord" placeholder="请输入密码" type="password" maxlength="26"></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="checkPass">
              <div class="userInput">
                <img src="../../assets/images/login/user_icon.png">
                <el-input v-model="ruleForm.checkPass" placeholder="确认密码" type="password" maxlength="26"></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="userCode">
              <div class="userInput">
                <img src="../../assets/images/login/user_icon.png">
                <el-input v-model="ruleForm.userCode" placeholder="验证码" maxlength="6"></el-input>
                <div class="get_code" v-if="!codeStatus" @click="getCode">获取验证码</div>
                <div class="get_code" v-else><van-count-down format="sss 重新发送" :time="60000" @finish="finish"/></div>
              </div>
            </el-form-item>
            <div class="agreement">
              <el-checkbox v-model="checked"></el-checkbox>
              <p>我已阅读并接受<a>《帮众体育服务协议》</a></p>
            </div>
            <el-button class="loginBtn" :loading="loadingStatus" @click="submitForm()">点击注册</el-button>
          </template>
          <!--找回密码-->
          <template v-if="tabIndex === 2">
            <el-form-item prop="userIphone">
              <div class="userInput">
                <img src="../../assets/images/login/user_icon.png">
                <el-input v-model="ruleForm.userIphone" placeholder="请输入手机号" maxlength="11"></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="userCode">
              <div class="userInput">
                <img src="../../assets/images/login/user_icon.png">
                <el-input v-model="ruleForm.userCode" placeholder="验证码" maxlength="6"></el-input>
                <div class="get_code" v-if="!codeStatus" @click="getCode">获取验证码</div>
                <div class="get_code" v-else><van-count-down format="sss 重新发送" :time="60000" @finish="finish"/></div>
              </div>
            </el-form-item>
            <el-form-item prop="passWord">
              <div class="userInput">
                <img src="../../assets/images/login/password_icon.png">
                <el-input v-model="ruleForm.passWord" placeholder="请设置新密码" type="password" maxlength="26"></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="checkPass">
              <div class="userInput">
                <img src="../../assets/images/login/user_icon.png">
                <el-input v-model="ruleForm.checkPass" placeholder="请重复输入新密码" type="password" maxlength="26"></el-input>
              </div>
            </el-form-item>
            <span class="no_code">*如果超过一分钟未收到验证码，请选择重新发送。</span>
            <el-button class="loginBtn" :loading="loadingStatus" @click="submitForm()">确定</el-button>
          </template>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import * as  login from '../../api/login';
  import {validatePhone} from '../../utils/validate';
  export default {
    data() {
      const validatorIphone = (rule, value, callback) => {
        if (!validatePhone(value)) {
          callback(new Error('请输入正确手机号'));
        } else {
          callback();
        }
      };
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.passWord) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        tabIndex: 0,  // 0-登录   1-注册  2-忘记密码
        codeStatus: false, //获取验证码
        checked: false, // 协议
        loadingStatus: false, // 加载中
        ruleForm:{
          userName: '',
          passWord: '',
          checkPass: '',
          userIphone: '',
          userCode: ''
        },
        rules: {
          userName: [{ validator: validatorIphone, trigger: 'blur' }],
          userIphone: [{ validator: validatorIphone, trigger: 'blur' }],
          passWord: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 26, message: '长度在 6 到 26 个字符', trigger: 'blur' }
          ],
          checkPass: [{ validator: validatePass, trigger: 'blur' }],
          userCode: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
        }
      };
    },
    computed:{
      isLogin(){
        return this.$store.getters.loginStatus
      }
    },
    created() {

    },
    methods: {
      // 提交
      submitForm() {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            if(this.tabIndex === 0){
              this.loginFun()
            }else if(this.tabIndex === 1){
              if(!this.checked) return this.$toast.fail('请阅读勾选用户协议');
              this.register()
            }else {
              this.getPwd()
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      // 登录
      loginFun(){
        let params = {
          username: this.ruleForm.userName,
          password: this.ruleForm.passWord
        }
        this.loadingStatus = true
        this.$store.dispatch('getLogin', params).then(() => {
          this.loadingStatus = false
          this.$refs.ruleForm.resetFields(); // 重置表单
          this.$store.commit('SET_LOGIN',false)
          this.$toast.success('登录成功')
        }).catch(res => {
          this.loadingStatus = false
        })
      },
      // 注册
      register(){
        let params = {
          userIphone: this.ruleForm.userIphone,
          passWord: this.ruleForm.passWord,
          userCode: this.ruleForm.userCode
        }
        this.loadingStatus = true
        login.getRegister(params).then(res => {
          this.loadingStatus = false
          if(res.data.code === 1){
            this.$toast.success('注册成功')
            this.$refs.ruleForm.resetFields(); // 重置表单
            this.tabIndex = 0
          }else {
            this.$toast.fail(res.data.msg)
          }
        }).catch(res => {
          this.loadingStatus = false
          console.log(res)
        })
      },
      // 找回密码
      getPwd(){

      },
      // qq登录
      tencentHandleClick(thirdpart) {
        const client_id = '1110255802'
        const redirect_uri = encodeURIComponent('xxx/redirect?redirect=' + window.location.origin + '/auth-redirect')
        const url = 'https://graph.qq.com/oauth2.0/authorize?display=mobile&response_type=code&client_id=' + client_id + '&redirect_uri=' + redirect_uri
        window.open(url, thirdpart)
      },
      // 微信登录
      wechatHandleClick(thirdpart) {
        const appid = '1110255802'
        const redirect_uri = encodeURIComponent('xxx/redirect?redirect=' + window.location.origin + '/auth-redirect')
        const url = 'https://open.weixin.qq.com/connect/qrconnect?appid=' + appid + '&redirect_uri=' + redirect_uri + '&response_type=code&scope=snsapi_login#wechat_redirect'
        window.open(url, thirdpart)
      },
      // tab切换
      tabBtn(idx){
        this.$refs.ruleForm.resetFields(); // 重置表单
        this.tabIndex = idx
        this.codeStatus = false
      },
      // 获取验证码
      getCode(){
        this.$refs.ruleForm.validateField("userIphone", errMsg => {
          if (!errMsg) {
            this.codeStatus = true
            login.sendSmsCode(this.ruleForm.userIphone).then(res => {
              if(res.data.code === 1){
                this.$toast.success('验证码已发送')
              }else {
                this.$toast.fail('验证码发送失败，请重新发送')
              }
            })
          }
        });
      },
      // 倒计时结束
      finish(){
        this.codeStatus = false
      },
      // 关闭弹窗
      handleClose() {
        this.$store.commit('SET_LOGIN',false)
      }
    }

  };
</script>

<style lang="scss">
  .loginBox {
    .el-dialog {
      @media only screen and (min-width: 750px) {
        width: 480px;
      }
      @media only screen and (max-width: 750px) {
        width: 6.5rem;
      }
      .el-dialog__header {
        padding: 0;
        .el-dialog__headerbtn {
          top: -40px;
          right: -3px;
          > i {
            color: #ffffff;
            font-size: 32px;
          }
        }
      }
      .el-dialog__body {
        padding: 0;
      }
      .el-input__inner:focus-within {
        border-color: $themeColor;
      }
      .el-checkbox__input.is-checked .el-checkbox__inner {
        background-color: $themeColor;
        border-color: $themeColor;
      }
      .userInput .el-input > input {
        padding: 0 40px;
        border-radius: 0;
      }
      .el-divider--horizontal {
        margin: 35px 0;
      }
      .loginBtn > span {
        letter-spacing: 10px;
      }
      .el-form-item {
        margin-bottom: 0;
      }
    }
  }
</style>
<style lang="scss" scoped>
  .loginBox{
    .logoMask{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      -webkit-filter: blur(5px); /* Chrome, Opera */
      -moz-filter: blur(5px);
      -ms-filter: blur(5px);
      filter: blur(5px);
    }
    .loginTop{
      width: 100%;
      height: 55px;
      display: flex;
      .top_tab{
        flex: 1;
        text-align: center;
        line-height: 55px;
        color: #999999;
        cursor: pointer;
        @media only screen and (min-width:750px) {
          font-size: 20px;
        }
        @media only screen and (max-width:750px) {
          font-size: 0.3rem;
        }
      }
      .top_tab:last-child:before{
        content: "|";
        float: left;
        color: #e5e5e5;
      }
      .top_tabActive{
        color: $themeColor;
        font-weight: bold;
        border-bottom: 3px solid $themeColor;
      }
    }
    .loginPwd{
      width: 100%;
      height: 55px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      border-bottom: 3px solid $themeColor;
      >i{
        position: absolute;
        left: 10px;
        font-size: 24px;
        color: $themeColor;
        cursor: pointer;
      }
      >span{
        text-align: center;
        color: $themeColor;
        font-weight: bold;
        @media only screen and (min-width:750px) {
          font-size: 20px;
        }
        @media only screen and (max-width:750px) {
          font-size: 0.3rem;
        }
      }
    }
    .loginBody{
      @media only screen and (min-width:750px) {
        padding: 5px 60px 30px 60px;
      }
      @media only screen and (max-width:750px) {
        padding: 0.05rem 0.6rem 0.3rem 0.6rem;
      }
      .forgot{
        display: flex;
        justify-content: flex-end;
        >span{
          color: #333;
          outline: none;
          font-size: 12px;
          margin: 20px 0;
          cursor: pointer;
        }
      }
      .agreement{
        font-size: 12px;
        color: #999999;
        display: flex;
        align-items: center;
        margin: 20px 0;
        p{
          margin-left: 5px;
          >a{cursor: pointer}
          @media only screen and (min-width:750px) {
            >a:hover{
              color: $themeColor;
              text-decoration: underline;
            }
          }
          @media only screen and (max-width:750px) {
            >a:active{
              color: $themeColor;
            }
          }
        }
      }
      .divider{
        font-size: 12px;
        color: #999;
      }
      .third_party{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 20px 0;
        li{
          flex: 1;
          display: flex;
          justify-content: center;
        }
      }
      .loginBtn{
        width: 100%;
        color: #fff;
        background-color: $themeColor;
        cursor: pointer;
        margin-top: 10px;
        border: 0;
        border-radius: 0;
      }
      .no_code{
        padding: 25px 0;
        font-size: 12px;
        color: #999999;
        display: inline-block;
      }
      .userInput{
        display: flex;
        align-items: center;
        position: relative;
        margin-top: 25px;
        >img{
          position: absolute;
          left: 15px;
          top: 12px;
          z-index: 9;
        }
        .get_code{
          width: 140px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          border: 1px solid #DCDFE6;
          background: #f7f9fa;
          border-left: 0;
          transition: all 0.3s;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
</style>
