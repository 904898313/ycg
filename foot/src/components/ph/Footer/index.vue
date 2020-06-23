<template>
  <div class="Footer" :class="{'footerFixed':isFixed}">
    <div class="footer_top">
      <div class="ft_top_left">
        <div class="contact_us">
          <a>联系我们</a>
          <span>周一到周五 9：00~18：00</span>
        </div>
        <div class="adverti">
          <p><a>广告投放</a><span>131-6167-3124</span></p>
          <p><a>官网电话</a><span>0335-4545444</span></p>
        </div>
      </div>
      <div class="ft_top_rt">众邦体育</div>
    </div>
    <ul class="footer_nav">
      <li v-for="(item,index) in footerList">{{item}}</li>
    </ul>
    <div class="footer_bom">
      <p>©2018.Company 秦皇岛顺瓜网络科技有限公司</p>
      <span>冀ICP备18037400号-8</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isFixed: false,
        footerList:['关于我们','XML地图','TXT地图','电脑端','标签合集']
      };
    },
    mounted () {
      let that = this
      // 判断页面是否出现滚动条
      setInterval(()=>{
        if (document.documentElement.clientHeight < document.documentElement.offsetHeight-4){
          that.isFixed = false
        }else {
          that.isFixed = true
        }
      },100);
    },
    methods: {}

  };
</script>

<style lang="scss" scoped>
  .Footer{
    width: 100%;
    height: 3.6rem;
    background-color: $themeColor;
    padding-top: 0.35rem;
    .footer_top{
      padding: 0 0.3rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .ft_top_left{
        .contact_us{
          display: flex;
          align-items: center;
          >a{
            font-size: 0.24rem;
            color: #ffffff;
            margin-right: 0.25rem;
          }
          >span{
            font-size: 0.2rem;
            color: #62656d;
          }
        }
        .adverti{
          margin-top: 0.25rem;
          >p{
            display: flex;
            align-items: center;
            >a{
              margin-right: 0.25rem;
              color: #62656d;
              font-size: 0.2rem;
            }
            >span{
              font-size: 0.2rem;
              color: #8990a2;
            }
          }
        }
      }
      .ft_top_rt{
        font-size: 0.48rem;
        color: #ffffff;
        opacity: 0.24;
      }
    }
    .footer_nav{
      width: 100%;
      height: 0.84rem;
      border-top: 1px solid rgba(255,255,255,0.1);
      border-bottom: 1px solid rgba(255,255,255,0.1);
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 0.4rem;
      li{
        flex: 1;
        font-size: 0.24rem;
        color: #ffffff;
        text-align: center;
        position: relative;
      }
      li:first-child:before {
        content: '';
        width: 0;
        height: 0;
      }
      li:before{
        content: '';
        width: 0.01rem;
        height: 0.18rem;
        background-color: rgba(255,255,255,0.5);
        position: absolute;
        top: 20%;
        left: 0;
      }
    }
    .footer_bom{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 0.2rem;
      padding: 0 0.3rem;
      >p,span {
        color: #62656d;
        font-size: 0.2rem;
      }
    }
  }
  .footerFixed{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2000;
  }
</style>
