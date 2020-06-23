<template>
  <div class="bigbox">
      <div class="video" v-for="(v,i) in list" :key="i">
          <img src="" alt="">
          <div>
              <span>哈雷撕扯</span>
              <span>12张</span>
          </div>
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

<style src="@/assets/css/pc/footballdata/playerdata/atlas.scss" lang="scss" scoped></style>
