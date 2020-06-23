<template>
  <div class="video">
    <div class="title">
      <div class="more">
        <span>英超录像</span>
        <i>更多></i>
      </div>

      <div class="lines">
        <span></span>
        <i></i>
      </div>
    </div>
    <div class="videoList">
      <div class="info" v-for="(item,index) in data" :key="index">
        <i
          :class="{'color1':item.index==1,'color2':item.index==2,'color3':item.index==3}"
        >{{item.index}}</i>
        <span>{{item.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['data'],
  data() {
    return {
    
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.video {
  width: 100%;
  background-color: #fff;
  .title {
    .more {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right:15px;
      i {
        font-size: 12px;
        color: #999999;
        line-height: 12px;
      }
      span {
        line-height: 50px;
        color: #333333;
        font-size: 16px;
        font-weight: bold;
        padding-left: 15px;
      }
    }
    .lines {
      display: flex;
      justify-content: space-between;
      span {
        width: 92px;
        height: 3px;
        background-color: #ffc201;
      }
      i {
        width: 235px;
        height: 3px;
        background-color: #e8e8e8;
      }
    }
  }
  .videoList {
    width: 100%;
    display: flex;
    flex-direction: column;
    .info {
      display: flex;
      height: 40px;
      width: 100%;
      align-items: center;
      border-bottom: 1px dashed #eeeeee;
      .color1 {
        background-color: #ffc201;
      }
      .color2 {
        background-color: #f3d061;
      }
      .color3 {
        background-color: #eed892;
      }
      i {
        color: #fff;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        width: 14px;
        height: 14px;
        background-color: #bdbdbd;
        border-radius: 2px;
        margin-left: 17px;
        margin-right: 5px;
      }
      span {
        font-size: 14px;
        color: #555555;
      }
    }
  }
}
</style>