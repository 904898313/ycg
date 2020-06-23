<template>
  <div class="bigbox">
            <div class="tou">
          <span>球队名单</span>
      </div>
      <!-- 球队导航 -->
      <div class="nav">
        <div 
            class="big"
            v-for="(v,i) in list" 
            :key="i"
        >
            <div class="small">
                <div class="conts">
                    <img src="" alt="">
                </div>
                <p class="text">阿斯顿维拉</p>
            </div>
        </div>
      </div>
      <!-- bg -->
      <div class="bg"></div>
      <!-- 英超球队名单说明 -->
      <div class="content-bigbox">
        <header><span>英超球队名单说明</span></header>
        <!-- 遍历内容区 -->
        <div class="textbox">
            <p>1、2019-2020英超联赛共有20球队参加比赛。参赛
            球队名单分别是：阿森纳队、阿斯顿维拉队、切尔西
            队、利物浦队、曼彻斯特城队、曼彻斯特联队、纽卡
            斯尔联队、南安普顿队、埃弗顿队、托特纳姆热刺队
            等球队；</p>
                        <p>2、2019-2020英超足球俱乐部名单列表中最上方图
            片是英超球队徽，最下方英文是代表球队英超英文名
            称；</p>
                        <p>3、球队名单查询网址：
            http://m.unchina.com/yingchaoqiudui/</p>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          list:19
      };
    },
    created() {

    },
    methods: {

    }
  };
</script>

<style src="@/assets/css/ph/footballdata/matchdata/team.scss" lang="scss" scoped></style>
