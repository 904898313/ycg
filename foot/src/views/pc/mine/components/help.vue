<template>
  <div class="help">
    <div class="helpcenter">
      <div class="title">
        <span>帮助中心</span>
      </div>
      <div class="helpList">
        <el-collapse>
          <el-collapse-item v-for="(item,index) in list" :key="index">
            <template slot="title">
              <span class="wen">问</span>
              <p>{{item.title}}</p>
            </template>
            <div>{{item.description}}</div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="pagination-help">
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
  </div>
</template>

<script>
import * as mine from "@/api/mine";
export default {
  data() {
    return {
      list: [],
      pagesize: 8,
      total: null,
      current: 1
    };
  },
  created() {},
  mounted() {
    this._initdata();
  },
  methods: {
    // 初始化数据
    _initdata() {
      let data = {
        userId: "1231774918815195138",
        current: this.current,
        size: this.pagesize
      };
      mine.inithelpList(data).then(res => {
        console.log(res)
        const data = res.data.data;
        this.list = data.records;
        this.total = data.total;
      });
    },
    // 获取分页当前页数
    currentchange(currentVal) {
      this.current = currentVal;
      this._initdata();
    }
  }
};
</script>

<style src="../../../../assets/css/pc/mine/help.scss" lang="scss" scoped></style>
<style lang="scss">
.pagination-help {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0px;
}
.pagination-help .el-pagination.is-background .el-pager li:not(.disabled) {
  background-color: #ffffff;
  border: solid 1px #e1e1e1;
}
.pagination-help
  .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: #30303d;
}

.pagination-help .el-pagination.is-background .btn-next {
  width: 63px;
  height: 28px;
  background-color: #ffffff;
  border: solid 1px #e1e1e1;
}
.pagination-help .el-pagination.is-background .btn-prev {
  width: 63px;
  height: 28px;
  background-color: #ffffff;
  border: solid 1px #e1e1e1;
}
</style>
