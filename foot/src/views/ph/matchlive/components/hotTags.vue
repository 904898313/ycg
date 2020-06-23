<template>
  <div class="tags">
    <span v-for="(item,index) in data" :key="index">{{item.text}}</span>
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
.tags {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 0.24rem;

  span {
    width: 1.19rem;
    height: 0.54rem;
    background-color: #f3f3f8;
    border-radius: 0.04rem;
    color: #202021;
    font-size: 0.24rem;
    line-height: 0.54rem;
    text-align: center;
    margin-top: 0.24rem;
    margin-left: 0.25rem;
  }
}
</style>