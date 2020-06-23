<template>
    <div class="bigbox">
        <!-- 装入球队 -->
        <div class="content">
            <header>转入球队</header>
            <div class="head public">
                <p>时间</p>
                <p>球员</p>
                <p>位置</p>
                <p>来自</p>
                <p>类型</p>
            </div>
            <div class="body public" v-for="(index) in 2" :key="index">
                <p><span>2020</span><span>10/08</span></p>
                <p><img src="" alt=""><span>塞巴洛斯</span></p>
                <p>前锋</p>
                <p><img src="" alt=""><span>利物浦</span></p>
                <p>借组结束</p>
            </div>
        </div>
        <!-- bg -->
        <div class="bg"></div>
        <!-- 装出球队 -->
        <div class="content">
            <header>转出球队</header>
            <div class="head public">
                <p>时间</p>
                <p>球员</p>
                <p>位置</p>
                <p>来自</p>
                <p>类型</p>
            </div>
            <div class="body public" v-for="(index) in 2" :key="index">
                <p><span>2020</span><span>10/08</span></p>
                <p><img src="" alt=""><span>塞巴洛斯</span></p>
                <p>前锋</p>
                <p><img src="" alt=""><span>利物浦</span></p>
                <p>借组结束</p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    created() {

    },
    mounted(){

    },
    methods: {

    }
  };
</script>

<style src="@/assets/css/ph/footballdata/teamdata/transfer.scss" lang="scss" scoped></style>
