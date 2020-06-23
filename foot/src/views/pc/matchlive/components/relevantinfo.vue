<template>
  <div class="info">
    <div class="infoleft">
      <img :src="data.imgUrl" />
    </div>
    <div class="inforight">
      <p>{{data.title}}</p>
      <p>
        {{data.text}}
        <i>[全文]</i>
      </p>
      <div class="browse">
        <span>发布于 {{data.times}}</span>
        <span class="flow">
          <img src="@/assets/images/matchlive/browse_i@2x.png" alt />
          {{data.flow}}
        </span>
        <span class="flow">
          <img src="@/assets/images/matchlive/comment_i@2x.png" alt />
          {{data.comment}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  name: "relevantinfo",
  data() {
    return {};
  },
  mounted() {},
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.info {
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
  padding: 0px 20px;
  .infoleft {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    img {
      width: 180px;
      height: 120px;
    }
  }
  .inforight {
    width: 612px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    > :nth-child(1) {
      font-size: 16px;
      color: #333333;
      font-weight: bold;
    }
    :nth-child(2) {
      font-size: 13px;
      color: #333333;
      line-height: 30px;
      i {
        color: #0066c0;
        font-size: 12px;
      }
    }
    .browse {
      display: flex;
      align-items: center;
      span {
        color: #999999;
        font-size: 12px;
        display: flex;
        align-items: center;
      }
      img {
        width: 14px;
        height: 14px;
      }
      .flow {
        margin-left: 20px;
        img {
          margin: 0px 3px;
        }
      }
    }
  }
}
</style>