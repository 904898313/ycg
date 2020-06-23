<template>
  <div>
    <div class="list">
      <div class="info" v-for="(item,index) in data" :key="index" @click="redirectFunc()">
        <span
          :class="{'color1':item.number==1,'color2':item.number==2,'color3':item.number==3}"
        >{{item.number}}</span>
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
  mounted() {},
  methods: {
    redirectFunc() {
      this.$router.push({ name: "ph-livedetails" });
    }
  },
  computed: {},
  watch: {}
};
</script>
<style lang='scss' scoped>
.list {
  display: flex;
  flex-direction: column;

  .info {
    display: flex;
    width: 100%;
    height: 0.88rem;
    background-color: #ffffff;
    border-top: 0.01rem solid #eeeeee;
    align-items: center;

    .color1 {
      background-color: $ffc002;
    }

    .color2 {
      background-color: $ffc002;
    }

    .color3 {
      background-color: $ffc002;
    }

    span {
      width: 0.26rem;
      height: 0.26rem;
      background-color: #bdbdbd;
      border-radius: 0.02rem;
      color: #fff;
      font-size: 0.12rem;
      line-height: 0.26rem;
      text-align: center;
      margin: 0rem 0.12rem 0rem 0.24rem;
    }

    p {
      font-size: 0.28rem;
      color: #202021;
    }
  }
}
</style>
