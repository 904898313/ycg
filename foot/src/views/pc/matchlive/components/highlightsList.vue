<template>
  <div class="highlightsinfo">
    <div class="title">
      <div class="more">
        <span>{{data.title}}</span>
        <i>更多></i>
      </div>
      <div class="lines">
        <span></span>
        <i></i>
      </div>
    </div>
    <div class="taglist">
      <span v-for="(item,index) in data.tagslist" :key="index">{{item.text}}</span>
    </div>
    <div class="textlist">
      <div class="text" v-for="(item,index) in data.textList" :key="index">
        <p>{{item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
  },
  methods: {},
  computed: {},
  watch: {}
};
</script>
<style lang='scss' scoped>
.highlightsinfo {
  width: 590px;
  background: #fff;
  margin-top:16px;
  .title {
    width: 100%;
    .more {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 15px;

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
        width: 119px;
        height: 3px;
        background-color: #ffc201;
      }

      i {
        width: 468px;
        height: 3px;
        background-color: #e8e8e8;
      }
    }
  }
  .taglist {
    display: flex;
    flex-wrap: wrap;
    margin-top: 13px;
    margin-left:22px;
    span {
      border-radius: 2px;
      border: solid 1px #4280c9;
      color: #4280c9;
      line-height: 22px;
      padding: 0px 11px;
      font-size: 12px;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
  .textlist {
    width: 100%;
    margin-top:10px;
    .text {
      width: 550px;
      margin: 0 auto;
      height: 40px;
      border-top: solid 1px #eeeeee;
      line-height: 40px;
      color: #555555;
      font-size: 14px;
    }
  }
}
</style>