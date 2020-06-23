<template>
  <div class="bigbox">
      <div class="tou">
          <span>积分榜</span>
      </div>
      <!-- 场地导航 -->
      <div class="nav">
        <div 
            class="contents" 
            v-for="(v,i) in navlist" 
            :key="i"
            @click="navfun(i)"
        >
            <span class="def" :class="navnum===i?'navtit':''"></span>
            <span :class="navnum===i?'navtext':''">{{v.text}}</span>
        </div>
      </div>
      <!-- 列表头部 -->
      <div class="head list">
          <p>排名</p>
          <p>球队</p>
          <p>赛</p>
          <p>胜/平/负</p>
          <p>得/失</p>
          <p>净</p>
          <p>积分</p>
      </div>

      <!-- 列表详情 -->
      <!-- 颜色变化用样式做的 / 下5行 -->
      <div 
        class="bigbody" 
        v-for="(v,i) in qingk" 
        :key="i"
        :class="'body'+i"
      >
        <div 
            class="body list" 
            v-for="(v,i) in list" 
            :key="i"
        >
            <p>1</p>
            <p>
                <img src="" alt="">
                <span>广东恒大淘宝</span>
            </p>
            <p>22</p>
            <p>11/13/21</p>
            <p>57/12</p>
            <p>45</p>
            <p>53</p>
        </div>
        <div class="title">欧罗巴联赛杯资格</div>
      </div>

      <!-- 隔层 -->
      <div class="bg"></div>
      <!-- 英超历届积分榜数据查询 -->
      <div class="content-bigbox">
        <header><span>英超历届积分榜数据查询</span></header>
        <!-- 遍历内容区 -->
        <div class="content">
            <div class="contents" v-for="(v,i) in chaxun" :key="i">
                <p>{{2019-i}}-{{2020-i}}积分榜</p>
            </div>
        </div>
      </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
          navlist:[
              {
                  text:'全部'
              },
              {
                  text:'主场'
              },
              {
                  text:'客场'
              },
              {
                  text:'半场'
              },
              {
                  text:'半场主场'
              },
              {
                  text:'半场客场'
              },
          ],
          navnum:0,
          list:3,
          qingk:5,
          chaxun:17
      };
    },
    created() {

    },
    methods: {
      gomine() {
        this.$router.push({ path: '/mine' })
      },
      navfun(i){
          this.navnum = i;
      }
    }
  };
</script>

<style src="@/assets/css/ph/footballdata/matchdata/integral.scss" lang="scss" scoped></style>
