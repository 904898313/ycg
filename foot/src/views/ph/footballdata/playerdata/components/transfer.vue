<template>
  <div class="bigbox">
      <!-- 转会记录 -->
      <div class="record" v-for="index in 3" :key="index">
          <div class="left">
              <p>4200万欧元</p>
              <p><span>09/10 </span> <span> 出租</span></p>
          </div>
          <div class="right">
              <div>
                  <img src="" alt="">
                  <p>谢菲尔德联</p>
              </div>
              <div>
                    <p>转会费900万欧元</p>
                    <p>2019.07.01</p>
                    <img src="" alt="">
              </div>
              <div>
                  <img src="" alt="">
                  <p>利物浦</p>
              </div>
          </div>
      </div>
      <!-- bg -->
      <div class="bg"></div>
      <!-- echarts -->
      <div class="echarts">

      </div>
      <!-- bg -->
      <div class="bg"></div>
      <!-- 荣誉记录 -->
      <div class="public">
          <header><span>德布劳内荣誉记录</span></header>
          <div class="content">
              <div class="contents" v-for="(v,i) in list" :key="i">
                  <div class="head">
                      欧洲冠军联赛<span>{{v.length}}</span>个
                  </div>
                  <div class="body">
                      <div class="bodys" v-for="(item,index) in v" :key="index">
                          <img src="" alt="">
                          <p>利物浦</p>
                          <p>2018/2019</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          datalist:[1,2,3,4,5,6,7,8],
          datanum:6,
          list:[
              [1,2],
              [1,2],
          ]
      };
    },
    created() {

    },
    methods: {
        datafun(){
            this.datanum =this.datalist.length;
            this.$refs.all.style.display = 'none';
        }
    }
  };
</script>

<style src="@/assets/css/ph/footballdata/playerdata/components/transfer.scss" lang="scss" scoped></style>
