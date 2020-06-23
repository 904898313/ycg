<template>
  <div class="bigbox">
      <!-- 导航 -->
      <div class="tou">
          <span>英超联赛</span>
      </div>
      <div class="nav">
        <div 
            class="big"
            v-for="(v,i) in list"
            :key="i"
        >
            <div class="small" @click="go(i)">
                <div class="imgbox">
                    <img src="" alt="">
                </div>
                <p>{{v}}</p>
            </div>
        </div>
      </div>
      <!-- 最新赛果 -->
      <div class="content-bigbox">
        <header><span>最新英超赛程赛果</span><span>查看更多<img src="@/assets/images/college/next_i@2x.png" alt=""></span></header>
        <!-- 遍历内容区 -->
        <div class="content" v-for="(v,i) in contentlist" :key="i">
            <div class="one">
                <span>03-26 16:30</span>
                <span>预测</span>
            </div>
            <div class="two">
                <p><span>巴拉多利德</span> <img src="@/assets/images/college/next_i@2x.png" alt=""></p>
                <p>VS</p>
                <p><img src="@/assets/images/college/next_i@2x.png" alt=""><span>莱莱加内斯</span></p>
            </div>
        </div>
      </div>
      <!-- 直播录像 -->
      <div class="content-bigbox">
        <header><span>最新英超视频直播录像</span><span>查看更多<img src="@/assets/images/college/next_i@2x.png" alt=""></span></header>
        <!-- 遍历内容区 -->
        <div class="nav">
            <div 
                class="big"
                v-for="(v,i) in contentlist"
                :key="i"
            >
                <div class="small">
                    <div class="conts">   
                        <img src="" alt="">
                    </div>
                    <p class="text">12月17日英超第17轮 水晶宫vs布莱顿录像</p>
                </div>  
            </div>
        </div>
      </div>
      <!-- 英超各赛季赛程表 -->
      <div class="content-bigbox">
        <header><span>英超各赛季赛程表</span></header>
        <!-- 遍历内容区 -->
        <div class="navtime">
            <div 
                class="big"
                v-for="(v,i) in num"  
                :key="i"
            >
                <div class="small">
                    2007-2008
                </div>
            </div>
        </div>
      </div>
      <!-- 英格兰超级联赛规则、赛制说明 -->
      <div class="content-bigbox">
        <header><span>英格兰超级联赛规则、赛制说明</span></header>
        <!-- 文本区 -->
        <div class="textbox">
            <p>英格兰足球超级联赛共由20支球队组成，采取双
            循环赛制(每支球队分别以主、客场身份和其他球队交
            锋两次)。单场比赛积分计算方法是胜者得3分、负者
            得0分、平局则双方各得1分，赛季末按累计积分高低
            排名。积分相同的球队由净胜球和总进球数等来决定
            排名，如果争冠球队通过以上条件仍不分上下就需要
            进行附加赛。
            </p>
            <p>联赛前四名直接参加下赛季冠军联赛小组赛，第
            五名、英格兰足总杯冠军和联赛杯冠军参加下赛季欧
            罗巴联赛，若杯赛冠军已通过联赛排名获得欧战资格
            ，则其名额给到联赛中排名靠前的球队。另外，本赛
            季英超联赛规定升3降3，联赛排名榜尾的3支球队下
            赛季将降到英冠。
            </p>
            <p><span>*注：</span> 根据欧足联的相关规定，切尔西将作为欧冠
            联赛的卫冕冠军获得了参加下赛季欧冠联赛资格，而
            本赛季英超排名第4的热刺队不幸被剥夺了参加下赛
            季欧冠的名额，只能征战欧罗巴联赛杯。
            </p>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          list:['赛季','赛程表','积分榜','射手榜','球队名单','在线直播','视频录像',],
          contentlist:4,
          num:17
      };
    },
    created() {

    },
    methods: {
        go(i){
            if(i===0){
                this.$router.push('/ph-matchdata-season')
            }else if(i===1){
                this.$router.push('/ph-matchdata-schedule')
            }else if(i===2){
                this.$router.push('/ph-matchdata-integral')
            }else if(i===3){
                this.$router.push('/ph-matchdata-shooter')
            }else if(i===4){
                this.$router.push('/ph-matchdata-team')
            }else if(i===5){
                this.$router.push('/ph-matchdata-play')
            }else if(i===6){
                this.$router.push('/ph-matchdata-video')
            }

        }
    }
  };
</script>

<style src="@/assets/css/ph/footballdata/matchdata/region.scss" lang="scss" scoped></style>
