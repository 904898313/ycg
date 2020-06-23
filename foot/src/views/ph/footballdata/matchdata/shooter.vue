<template>
  <div class="bigbox">
            <div class="tou">
          <span>射手榜</span>
      </div>
      <!-- 英超历届射手榜数据查询 -->
      <div class="content-bigbox">
        <header><span>英超历届积分榜数据查询</span></header>
        <!-- 遍历内容区 -->
        <div class="content">
            <div class="contents" v-for="(v,i) in chaxun" :key="i">
                <p>{{2019-i}}-{{2020-i}}积分榜</p>
            </div>
        </div>
      </div>
      <!-- bg -->
      <div class="bg"></div>
      <!-- 2019-2020英超射手榜 -->
      <div class="content-bigbox">
        <header><span>2019-2020英超射手榜</span></header>
        <!-- 2019-2020射手榜 -->
        <div class="head list">
            <p>排名</p>
            <p>球员</p>
            <p>球队名称</p>
            <p>总进球</p>
        </div>
        <div class="body list" v-for="i in shooter" :key="i">
            <p>{{i}}</p>
            <p>皮埃尔·奥巴杨梅</p>
            <p>
                <img src="" alt="">
                <span>比勒费尔</span>
            </p>
            <p>19</p>
        </div>
      </div>

  </div>
</template>


<script>
  export default {
    data() {
      return {
          chaxun:17,
          shooter:13
      };
    },
    created() {

    },
    methods: {
    }
  };
</script>

<style src="@/assets/css/ph/footballdata/matchdata/shooter.scss" lang="scss" scoped></style>
