<template>
  <div class="hotBox">
    <div class="hotTop">
      <ul>
        <li :class="{'hotliActive': navIndex === 0}" @click="navIndex = 0">热门球队</li>
        <li :class="{'hotliActive': navIndex === 1}" @click="navIndex = 1">当红球员</li>
      </ul>
      <p><span>查看更多联赛</span><van-icon class="hotTop_icon" name="arrow" color="#999999" size="12"/></p>
    </div>
    <van-grid :border="false" icon-size="32px">
      <template v-for="(item,index) in gridList">
        <van-grid-item text="莱斯特城">
          <template slot="icon">
            <van-image class="grid_icon" :src="imgUrl"></van-image>
          </template>
        </van-grid-item>
      </template>
    </van-grid>
    <div class="checkMore">查看更多{{navIndex === 0?'球队':'球员'}} ></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navIndex: 0, //导航切换
        imgUrl:'',
        gridList:[0,0,0,0,0,0,0]
      };
    },
    created() {
      let that = this;
      setTimeout(()=>{
        that.imgUrl = 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1870047295,3520151295&fm=26&gp=0.jpg'
      },2000)
    },
    methods: {}

  };
</script>

<style src="../../../../assets/css/ph/home/hot.scss" lang="scss" scoped></style>
