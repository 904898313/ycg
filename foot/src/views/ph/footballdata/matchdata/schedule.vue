<template>
  <div class="bigbox">
            <div class="tou">
          <span>赛程表</span>
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
      <div class="bg"></div>
      <!-- 本赛季英超联赛赛程 -->
      <div class="content-bigbox">
        <header><span>本赛季英超联赛赛程</span></header>
        <!-- 遍历内容区 -->
        <div class="ceng">
            <div 
                class="cengs" 
                v-for="(v,i) in list" 
                :key="i"
                @click="listfun(i)"
                :class="listnum===i?'select':''"
            >
                {{v}}
            </div>
        </div>
      </div>
      <div class="bg"></div>
      <!-- 英超赛程赛果 -->
      <div class="content-bigbox">
        <header><span>英超赛程赛果</span></header>
        <!-- 遍历内容区 -->
        <div class="conts" v-for="(v,i) in fors" :key="i">
            <p>03-26 23:00</p>
            <p>
                <span>纽卡斯尔联</span>
                <span class="two"> 1 : 0 </span>
                <span>阿斯顿维拉</span>
            </p>
            <p class="last">预测</p>
        </div>
      </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
          list:38,
          listnum:0,
          tongji:[
              {
                  text:"2019-2020 英超联赛"
              },
              {
                  text:"2019-2020 英超赛程表"
              },
              {
                  text:"2019-2020 英超积分榜"
              },
              {
                  text:"2019-2020 英超射手榜"
              },
              {
                  text:"2019-2020 英超常见比分"
              },
              {
                  text:"2019-2020 英超进球总数及单双统计"
              },
              {
                  text:"2019-2020 英超进球数较多统计"
              },
          ],
          num:17,
          fors:8
      };
    },
    created() {

    },
    methods: {
        listfun(i){
            this.listnum = i;
        }
    }
  };
</script>

<style src="@/assets/css/ph/footballdata/matchdata/schedule.scss" lang="scss" scoped></style>
