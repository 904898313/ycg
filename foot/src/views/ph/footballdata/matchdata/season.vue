<template>
  <div class="bigbox">
            <div class="tou">
          <span>赛季</span>
      </div>
      <!-- 最新赛果 -->
      <div class="content-bigbox">
        <header><span>2019-2020英超联赛赛程</span></header>
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
      <!-- 2019-2020英超联赛数据统计 -->
      <div class="content-bigbox">
        <header><span>2019-2020英超联赛数据统计</span></header>
        <!-- 遍历内容区 -->
        <div class="census" v-for="(v,i) in tongji" :key="i">
            <img src="@/assets/images/footballdata/tongji_i@2x.png" alt="">
            <p>{{v.text}}</p>
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
          ]
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

<style src="@/assets/css/ph/footballdata/matchdata/season.scss" lang="scss" scoped></style>
