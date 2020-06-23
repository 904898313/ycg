<template>
  <div class="record">
    <div class="recordList">
      <div class="thead">
        <span>消费时间</span>
        <span>消费项目</span>
        <span>支付方式</span>
        <span>消费金额</span>
      </div>
      <div class="list" v-for="(item,index) in recordsList" :key="index">
        <span>{{item.createTime}}</span>
        <span>{{item.content}}</span>
        <span>{{item.type==1?'微信支付':'支付宝支付'}}</span>
        <i :class="item.consumeAmount>=0?'red':'green'">{{item.consumeAmount}}球币</i>
      </div>
    </div>
    <div class="pagination-news">
      <el-pagination
        :hide-on-single-page="true"
        prev-text="上一页"
        next-text="下一页"
        :page-size="pagesize"
        :background="true"
        layout="prev, pager, next"
        :total="this.total"
        @current-change="currentchange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import * as mine from "@/api/mine";
export default {
  props: ["data"],
  data() {
    return {
      total: null,
      pagesize: 10,
      current: 1,
      recordsList: [],
      menusId: 0
    };
  },
  created() {
    this.getrecordsList();
  },
  mounted() {},
  methods: {
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
    },
    // 获取分页当前页数
    currentchange(currentVal) {
      this.current = currentVal;
      this.getrecordsList();
    }
  }
};
</script>

<style src="../../../../assets/css/pc/mine/record.scss" lang="scss" scoped></style>

<style lang="scss">
.pagination-record {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0px;
}
.pagination-record .el-pagination.is-background .el-pager li:not(.disabled) {
  background-color: #ffffff;
  border: solid 1px #e1e1e1;
}
.pagination-record
  .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: #30303d;
}

.pagination-record .el-pagination.is-background .btn-next {
  width: 63px;
  height: 28px;
  background-color: #ffffff;
  border: solid 1px #e1e1e1;
}
.pagination-record .el-pagination.is-background .btn-prev {
  width: 63px;
  height: 28px;
  background-color: #ffffff;
  border: solid 1px #e1e1e1;
}
</style>
