<template>
  <div class="container">
    <nav>
      <img src="@/assets\images\mine\backtrack-iblack@2x.png" @click="back()" alt />
      <span>消费记录</span>
    </nav>
    <div class="lists">
      <div class="list" v-for="(item,index) in recordsList" :key="index">
        <div class="list-left">
          <span>{{item.content}}</span>
          <span>{{item.createTime}}</span>
        </div>
        <div class="list-right">
          <span :class="item.consumeAmount>=0?'red':'green'">{{item.consumeAmount}}{{item.unit}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as mine from "@/api/mine";
export default {
  data() {
    return {
      recordsList: []
    };
  },
  created() {
    this.getrecordsList();
  },
  methods: {
    // 返回
    back() {
      this.$router.go(-1);
    },
    // 获取消费记录列表数据
    getrecordsList() {
      let params = {
        current: this.current,
        size: this.pagesize
      };
      let data = {
        userId: "1252907950448594946"
      };
      mine.getrecordsList(data, params).then(res => {
        this.recordsList = res.data.data.records;
        this.total = res.data.data.total;
      });
    }
  }
};
</script>

<style src="../../../../assets/css/ph/mine/records.scss" lang="scss" scoped></style>