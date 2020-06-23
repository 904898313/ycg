<template>
  <div>
    <div class="menus">
      <span
        v-for="(item,index) in menusList"
        :key="index"
        :class="menusId==index?'active':''"
        @click="menusId=index"
      >{{item.text}}</span>
    </div>
    <div class="tags">
      <span v-for="(item,index) in menustags" :key="index">{{item.text}}</span>
    </div>
    <div class="list">
      <div class="info" v-for="(item,index) in menusInfoList" :key="index">
        <p>{{item.text}}</p>
      </div>
      <div class="more">
        <span>查看更多</span>
        <van-icon name="arrow" color="#999999" size=".24rem" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["menusList", "menustags", "menusInfoList"],
  components: {},
  data() {
    return {
      menusId: 0
    };
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
};
</script>
<style lang='scss' scoped>
.menus {
  display: flex;
  padding: 0rem 0.25rem;
  justify-content: space-between;
  height: 0.8rem;
  align-items: center;
  border-bottom: 0.01rem #eeeeee solid;

  span {
    color: #999999;
    font-size: 0.32rem;
    line-height: 0.8rem;
  }

  .active {
    color: #202021;
    font-weight: bold;
    border-bottom: 0.03rem #ffc002 solid;
  }
}

.tags {
  display: flex;
  flex-wrap: wrap;
  padding: 0.2rem 0.16rem;

  span {
    color: #4280c9;
    font-size: 0.24rem;
    line-height: 0.45rem;
    border: solid 0.01rem #4280c9;
    border-radius: 0.04rem;
    padding: 0rem 0.13rem;
    margin: 0.1rem 0.08rem;
  }
}

.list {
  .info {
    height: 0.88rem;
    border-top: 0.01rem #eeeeee solid;
    margin-left: 0.24rem;
    display: flex;
    align-items: center;

    p {
      color: #202021;
      font-size: 0.28rem;
    }
  }

  .more {
    @extend .info;
    justify-content: center;

    span {
      color: #999999;
      font-size: 0.24rem;
      line-height: 0.24rem;
    }
  }
}
</style>