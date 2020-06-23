<template>
  <div class="Footer" :class="{'footerFixed':isFixed}">
    <!--底部 列表-->
    <div class="footTop">
      <ul class="footTop_wh">
        <li>
          <img src="../../../assets/images/footer/adv_01.png">
          <div class="ft_left">
            <b>全球足篮体育资料</b>
            <span>一站在手 资料全有</span>
          </div>
        </li>
        <li>
          <img src="../../../assets/images/footer/adv_02.png">
          <div class="ft_left">
            <b>每日百场足篮比赛直播</b>
            <span>闪电同步 随时掌握</span>
          </div>
        </li>
        <li>
          <img src="../../../assets/images/footer/adv_03.png">
          <div class="ft_left">
            <b>数据赔率即时波动</b>
            <span>精准变化 准时收米</span>
          </div>
        </li>
        <li>
          <img src="../../../assets/images/footer/adv_04.png">
          <div class="ft_left">
            <b>全网唯一滚球专栏</b>
            <span>滚球秘闻 越滚越神</span>
          </div>
        </li>
      </ul>
    </div>
    <!--底部 专栏-->
    <div class="footBox">
      <div class="fb_wh">
        <div class="fb_lt">
          <ul v-for="(item,idx) in footList">
            <li v-for="(items,index) in item"><a>{{items.name}}</a></li>
          </ul>
        </div>
        <div class="fb_rt">
          <div class="contactTitle">联系方式</div>
          <div class="contactIphone">联系电话 0335-8087274</div>
          <div class="contact_us">
            <div class="us_wx">
              <img src="../../../assets/images/footer/foot_wx.png">
              <div class="us_wx_text">
                <p>微信公众号</p>
                <p>BZ-SPORTS</p>
              </div>
              <div class="us_code"><img src="../../../assets/images/footer/ewm.png"></div>
            </div>
            <div class="us_wx">
              <img src="../../../assets/images/footer/foot_wb.png">
              <div class="us_wx_text">
                <p>官方微博</p>
                <p>@ 帮众体育</p>
              </div>
              <div class="us_code"><img src="../../../assets/images/footer/wb_ewm.png"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--底部 备案-->
    <div class="footIc">
      <div class="ft_ic">©冀ICP备18037400号-3 <a>关于众邦</a></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isFixed: false,
        footList:[
          [{
            name: '比分服务',
            url: 'path'
          },{
            name: '即时比分',
            url: 'path'
          },{
            name: '完场比分',
            url: 'path'
          },{
            name: '赛程安排',
            url: 'path'
          }],
          [{
            name: '彩经学院',
            url: 'path'
          },{
            name: '欧赔思维',
            url: 'path'
          },{
            name: '亚盘分析',
            url: 'path'
          },{
            name: '大小秘籍',
            url: 'path'
          },{
            name: '滚球技巧',
            url: 'path'
          },{
            name: '更多干货',
            url: 'path'
          }],
          [{
            name: '帮众推荐',
            url: 'path'
          },{
            name: '初盘推荐',
            url: 'path'
          },{
            name: '深度阅读',
            url: 'path'
          }],
          [{
            name: '档案库',
            url: 'path'
          },{
            name: '英超',
            url: 'path'
          },{
            name: '西甲',
            url: 'path'
          },{
            name: '法甲',
            url: 'path'
          },{
            name: '德甲',
            url: 'path'
          },{
            name: '意甲',
            url: 'path'
          },{
            name: '更多',
            url: 'path'
          }],
          [{
            name: '问答专栏',
            url: 'path'
          },{
            name: '足球小白',
            url: 'path'
          },{
            name: '欧亚窥秘',
            url: 'path'
          },{
            name: '大小博弈',
            url: 'path'
          },{
            name: '滚球妙招',
            url: 'path'
          },{
            name: '更多问答',
            url: 'path'
          }]
        ]
      };
    },
    mounted () {
      let that = this
      // 判断页面是否出现滚动条
      // setInterval(()=>{
      //   if (document.documentElement.clientHeight < document.documentElement.offsetHeight-4){
      //     debugger
      //     that.isFixed = false
      //   }else {
      //     that.isFixed = true
      //   }
      // },100);
    },
    methods: {

    }

  };
</script>

<style lang="scss" scoped>
  .Footer{
    width: 100%;
    min-width: 1100px;
    background-color: #ffffff;
    .footTop{
      width: 100%;
      height: 83px;
      border-top: 1px solid #eee;
      .footTop_wh{
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        >li{
          display: flex;
          align-items: center;
          >img{
            width: 42px;
            height: 42px;
          }
          .ft_left{
            display: flex;
            flex-direction: column;
            margin-left: 10px;
            >b{
              font-size: 18px;
              color: #333;
            }
            >span{
              font-size: 12px;
              color: #999;
            }
          }
        }
      }
    }
    .footBox{
      width: 100%;
      height: auto;
      background-color: $themeColor;
      .fb_wh{
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        padding: 25px 0 35px 0;
        display: flex;
        justify-content: space-between;
        .fb_lt{
          display: flex;
          >ul{
            margin-right: 110px;
            li:first-child{
              font-size: 16px;
              font-weight: bold;
              color: #fff;
              cursor: auto;
              a:hover{
                text-decoration: none;
              }
            }
            li{
              font-size: 14px;
              color: #b5b9c0;
              margin: 15px 0;
              cursor: pointer;
              a:hover{
                text-decoration: underline;
              }
            }
          }
        }
        .fb_rt{
          .contactTitle{
            font-size: 16px;
            font-weight: bold;
            color: #fff;
            margin: 15px 0;
          }
          .contactIphone{
            color: #b5b9c0;
            font-size: 14px;
          }
          .contactIphone:before{
            content: url("../../../assets/images/footer/phone_icon.png");
            margin-right: 5px;
          }
          .contact_us{
            display: flex;
            margin-top: 34px;
            .us_wx:last-child{
              margin-left: 38px;
            }
            .us_wx{
              display: flex;
              align-items: center;
              position: relative;
              >img{
                width: 36px;
                height: 36px;
              }
              .us_wx_text{
                color: #999;
                font-size: 12px;
                margin-left: 10px;
              }
              .us_code{
                width: 72px;
                height: 72px;
                position: absolute;
                top: -85px;
                left: -20px;
                display: none;
                >img{
                  width: 100%;
                  height: 100%;
                }
              }
              .us_code:after{
                content: '';
                width: 0;
                height: 0;
                border-right: 5px solid transparent;
                border-left: 5px solid transparent;
                border-top: 5px solid #ffffff;
                position: absolute;
                left: 45%;
                bottom: -5px;
              }
            }
            .us_wx:hover .us_code{
              display: block;
            }
          }
        }
      }
    }
    .footIc{
      width: 100%;
      height: 58px;
      background-color: $themeColor;
      border-top: 1px solid #2e2e3b;
      display: flex;
      justify-content: center;
      align-items: center;
      .ft_ic{
        font-size: 12px;
        color: #999;
        text-align: center;
        >a{
          color: #97a3be;
          margin-left: 10px;
          margin-right: 60px;
          cursor: pointer;
        }
      }
    }
  }
  .footerFixed{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
  }
</style>
