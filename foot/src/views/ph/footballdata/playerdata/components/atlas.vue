<template>
    <div class="bigbox">
        <div 
            class="big"
            v-for="(v,i) in 6"  
            :key="i"
        >
            <div class="small">
                <div class="imgbox">   
                    <img src="" alt="">
                </div>
                <p class="text">
                    <span>哈雷斯彻</span>
                    <span><img src="@/assets/images/footballdata/tu-icon@2x.png" alt="">12张</span>
                </p>
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

<style src="@/assets/css/ph/footballdata/playerdata/components/atlas.scss" lang="scss" scoped></style>
