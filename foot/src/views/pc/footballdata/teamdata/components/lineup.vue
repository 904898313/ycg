<template>
  <div class="bigbox">
      <!-- 阵容介绍 -->
      <div class="introduce">
          <!-- 标题 -->
          <header>
              <p>曼城阵容介绍</p>
          </header>
          <!-- 阵容组成 -->
          <div class="contents">
            <!-- 主教练 -->
            <div class="tit">
                <div class="bg"></div>
                <div class="head list">
                    <p>主教练</p>
                    <p>出生日期</p>
                    <p>国籍</p>
                    <p>加盟日期</p>
                    <p>合同截止</p>
                    <p>身价</p>
                    <p>前执教球队</p>
                </div>
                <div class="body list">
                    <p><img src="" alt="">兰帕德</p>
                    <p>1978-06-20</p>
                    <p>英格兰</p>
                    <p>2019-06-30</p>
                    <p>2019-06-30</p>
                    <p>175万英镑</p>
                    <p><img src="" alt="">德比郡</p>
                </div>
            </div>
            <!-- 球员组成 -->
            <div class="player">
                <div class="bg"></div>
                <div class="head pulic">
                    <p>号码</p>
                    <p>球员</p>
                    <p>出生日期</p>
                    <p>身高</p>
                    <p>体重</p>
                    <p>位置</p>
                    <p>国籍</p>
                    <p>身价</p>
                    <p>合同截止</p>
                    <p>首发次数/进球</p>
                </div>
                <div 
                    class="body pulic"
                    v-for="(v,i) in playerlist"
                    :key="i"
                >
                    <p>10</p>
                    <p @click="playergo"><img src="" alt=""><span>兰帕德</span></p>
                    <p>1978-06-20</p>
                    <p>176</p>
                    <p>69</p>
                    <p>前锋</p>
                    <p>英格兰</p>
                    <p>175万英镑</p>
                    <p>1978-06-20</p>
                    <p>67/8</p>
                </div>
            </div>
            <!-- 队伍估价 -->
            <div class="assess">
                <p>球队阵容平均年龄：<span>21</span>岁</p>
                <p>球队阵容总价值：<span>1546</span>万英镑</p>
                <p>球队阵容数量：<span>16</span>人</p>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          playerlist:[1,2,3,4,5,6,7,8,9,10,11,12,13]
      };
    },
    created() {

    },
    methods: {
        //跳转
        playergo(){
            this.$router.push('pc-playerdata')
        }
    }
  };
</script>

<style src="@/assets/css/pc/footballdata/teamdata/lineup.scss" lang="scss" scoped></style>
