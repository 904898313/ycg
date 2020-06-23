<template>
  <div class="bigbox">

    <div class="content" v-for="(v,i) in len" :key="i">
      <img src="" alt="">
      <p>踢死敌人就势这爽，单刀直入，最佳进球.踢死敌人就势这爽，单刀直入，最佳进球爽，单刀直入，最佳进球</p>
    </div>
     <div class="list" v-for="(item,i) in (row-len.length%row)" :key="'a'+i"></div>
     <div class="paging">
       <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
     </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        len:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
        row:3
      };
    },
    created() {

    },
    methods: {

    }
  };
</script>

<style src="@/assets/css/pc/footballdata/teamdata/videos.scss" lang="scss" scoped></style>
