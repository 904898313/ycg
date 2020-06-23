<template>
  <div class="bigbox">
    <!-- 转入球员 -->
    <div class="enter">
      <header>转入球员</header>
      <div class="head public">
        <p>时间</p>
        <p>球员</p>
        <p>位置</p>
        <p>来自</p>
        <p>类型</p>
      </div>
      <div 
        class="body public"
        v-for="(v,i) in list"
        :key="i"
      >
        <p>2020-07-14</p>
        <p><img src="" alt=""><span>加布里埃尔马丁内利</span></p>
        <p>前锋</p>
        <p><img src="" alt=""><span>皇家马德里</span></p>
        <p>租借</p>
      </div>
    </div>
    <!-- 转出球员 -->
    <div class="enter">
      <header>转出球员</header>
      <div class="head public">
        <p>时间</p>
        <p>球员</p>
        <p>位置</p>
        <p>来自</p>
        <p>类型</p>
      </div>
      <div 
        class="body public"
        v-for="(v,i) in list"
        :key="i"
      >
        <p>2020-07-14</p>
        <p><img src="" alt=""><span>加布里埃尔马丁内利</span></p>
        <p>前锋</p>
        <p><img src="" alt=""><span>皇家马德里</span></p>
        <p>租借</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list:[1,2,3,4,5,6,7,8,9.10]
      };
    },
    created() {

    },
    methods: {

    }
  };
</script>

<style src="@/assets/css/pc/footballdata/teamdata/transfer.scss" lang="scss" scoped></style>
