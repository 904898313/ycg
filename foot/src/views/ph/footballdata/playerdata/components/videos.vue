<template>
    <div class="bigbox">
        <div 
            class="big"
            v-for="(v,i) in 3"  
            :key="i"
        >
            <div class="small">
                <div class="imgbox">
                    <img src="" alt="">
                    <div class="time">
                        <img src="@/assets/images/footballdata/play.png" alt="">
                        <span>0:30</span>
                    </div>
                </div>
                <p class="text">
                    <span>西甲深盘怎么买？西甲深盘收米技巧（一）</span>
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

<style src="@/assets/css/ph/footballdata/teamdata/videos.scss" lang="scss" scoped></style>
