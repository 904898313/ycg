<template>
  <div>
    <div class="info" v-for="(item,index) in data" :key="index">
      <span>
        <img src="@/assets/images/matchlive/play_i5@3x.png" alt />
        {{item.text}}
      </span>
      <span class="times">{{item.times}}</span>
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
  methods: {},
  computed: {},
  watch: {}
};
</script>
<style lang='scss' scoped>
.info {
  color: #555555;
  font-size: 14px;
  border-bottom: 1px dashed #eeeeee;
  height: 43px;
  display: flex;
  align-items: center;
  padding: 0px 19px;
  justify-content: space-between;
  span {
    display: flex;
    align-items: center;
    img {
      width: 14px;
      height: 14px;
      margin-right:5px;
    }
  }
  .times {
    color: #999999;
    font-size: 14px;
  }
}
</style>