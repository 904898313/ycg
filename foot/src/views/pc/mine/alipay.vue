<template>
  <div class="container" v-html="payGateWay">{{payGateWay}}</div>
</template>

<script>
export default {
  name: "alipay",
  components: {},
  data() {
    return {
      data: {
        payGateWay: ""
      }
    };
  },
  created() {
    let form = this.$route.query.data;
    this.payGateWay = form;
    this.$nextTick(() => {
      document.forms[0].submit();
    });
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
};
</script>
<style lang='scss' scoped>
.container {
  width: 910px;
  display: flex;
  flex-direction: column;
  height: 1200px;
  form {
    width: 500px;
    height: 500px;
    display: block !important;
  }
}
</style>