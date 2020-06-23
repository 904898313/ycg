<template>
  <div class="bigbox">
            <div class="tou">
          <span>视频录像</span>
      </div>
      <div class="nav">
        <div 
            class="big"
            v-for="(v,i) in list"  
            :key="i"
        >
            <div class="small">
                <div class="imgbox">   
                    <img src="" alt="">
                </div>
                <p class="text">12月17日英超第17轮 水晶宫vs布莱顿录像</p>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          list:7
      };
    },
    created() {

    },
    methods: {

    }
  };
</script>

<style src="@/assets/css/ph/footballdata/matchdata/video.scss" lang="scss" scoped></style>
