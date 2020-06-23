<template>
  <div class="bigbox">
      <div class="video" v-for="(v,i) in list" :key="i">
          <img src="" alt="">
          <p>踢死敌人就是这么爽！踢死敌人就是这么爽！踢死敌人就是这么爽！踢死敌人就是这么爽！</p>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          list:[1,2,3,4,5,6,7,9]
      };
    },
    created() {

    },
    methods: {

    }
  };
</script>

<style src="@/assets/css/pc/footballdata/playerdata/video.scss" lang="scss" scoped></style>
