<template>
  <div class="books">
    <div class="times">
      <div class="date">
        <i class="el-icon-caret-left" @click="prev()"></i>
        <span>{{toggleDate}}</span>
        <i class="el-icon-caret-right" @click="next()"></i>
      </div>
      <div class="zhichu">
        <span>
          月支出
          <i>￥{{Monthexpend.pay}}</i>
        </span>
        <span>
          月收入
          <i>￥{{Monthexpend.pay}}</i>
        </span>
      </div>
    </div>
    <div class="echarts">
      <div class="mychart" ref="mychart"></div>
    </div>
    <div class="tableList">
      <div class="title">
        <div class="tabs">
          <span :class="menusId==0?'active':''" @click="toggleBooks(0)">月支出</span>
          <span :class="menusId==1?'active':''" @click="toggleBooks(1)">月收入</span>
        </div>
        <div class="operation">
          <div class="deleteInfo" @click="deletesbook()">
            <i class="el-icon-delete"></i>
            <span>删除</span>
          </div>
          <div class="addInfo" @click="dialogVisible = true">
            <i class="el-icon-plus"></i>
            <span>记笔帐</span>
          </div>
        </div>
      </div>
      <div class="thead">
        <span>时间</span>
        <span>备注</span>
        <span>金额</span>
      </div>
      <div class="list">
        <div class="listItem" v-for="(item,index) in list" :key="index">
          <span class="checkbox-cover">
            <el-checkbox name="item.id" class="input-checkbox" @change="changeCurrent(item.id)"></el-checkbox>
            {{item.createTime}}
          </span>
          <p>{{item.content}}</p>
          <i>{{item.amount}}</i>
        </div>
      </div>
    </div>
    <div class="pagination-book">
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
    <el-dialog
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose"
      custom-class="dialogVisible"
    >
      <div class="dialogtabs">
        <span :class="dialogTypeId==0?'active':'tabItem'" @click="changeType(0)">月支出</span>
        <span :class="dialogTypeId==1?'active':'tabItem'" @click="changeType(1)">月收入</span>
      </div>
      <div class="from">
        <div class="ipts">
          <div class="label">
            <span class="major">金额</span>：
          </div>
          <el-input v-model="dialogData.price" placeholder="请输入金额"></el-input>
        </div>
        <div class="ipts">
          <div class="label">
            <span class="major">时间</span>：
          </div>
          <el-date-picker
            v-model="dialogData.time"
            :editable="false"
            type="datetime"
            format="yyyy-MM-dd HH:mm:ss"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="选择日期时间"
            prefix-icon="el-icon-date"
            @change="getInvoiceData"
          ></el-date-picker>
        </div>
        <div class="ipts">
          <div class="label">
            <span>备注</span>：
          </div>
          <el-input v-model="dialogData.remarks" placeholder="请输入备注详情..."></el-input>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addbooks()">保存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import * as mine from "@/api/mine";
export default {
  data() {
    return {
      checkedNames: [],
      dialogTypeId: 0,
      menusId: 0,
      dialogVisible: false,
      pagesize: 9,
      current: 1,
      total: null,
      list: [
        // {
        //   id: "0",
        //   createTime: "2019-03-05 17:33",
        //   content:
        //     "在懂球帝上观看了利物浦和切尔西的现场直播，并购买了方案,观看了利物浦和切...",
        //   amount: "-369"
        // },
        // {
        //   id: "1",
        //   createTime: "2019-03-05 17:33",
        //   content:
        //     "在懂球帝上观看了利物浦和切尔西的现场直播，并购买了方案,观看了利物浦和切...",
        //   amount: "-369"
        // },
        // {
        //   id: "2",
        //   createTime: "2019-03-05 17:33",
        //   content:
        //     "在懂球帝上观看了利物浦和切尔西的现场直播，并购买了方案,观看了利物浦和切...",
        //   amount: "-369"
        // },
        // {
        //   id: "3",
        //   createTime: "2019-03-05 17:33",
        //   content:
        //     "在懂球帝上观看了利物浦和切尔西的现场直播，并购买了方案,观看了利物浦和切...",
        //   amount: "-369"
        // },
        // {
        //   id: "4",
        //   createTime: "2019-03-05 17:33",
        //   content:
        //     "在懂球帝上观看了利物浦和切尔西的现场直播，并购买了方案,观看了利物浦和切...",
        //   amount: "-369"
        // }
      ],
      dialogData: {
        price: "",
        time: "",
        remarks: ""
      },
      Monthexpend: {
        income: "",
        pay: ""
      },
      dateTime: {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1
      },
      deleteList: []
    };
  },
  created() {},
  mounted() {
    this.drawLine();
    this.initbooksList();
    // this.getMonthexpend();
  },
  methods: {
    // 添加一条记账本记录
    addbooks() {
      let data = {
        amount: this.dialogData.price,
        type: this.dialogTypeId,
        addTime: this.dialogData.time,
        content: this.dialogData.remarks
      };
      mine.addbooks(data).then(res => {
        if (res.data.code == 1) {
          this.dialogVisible = false;
          this.initbooksList(this.menusId);
          this.$message({
            message: res.data.msg,
            type: "success"
          });
        }
      });
    },
    // 初始化记账本数据
    initbooksList(_TYPE) {
      let type = 0;
      if (_TYPE) {
        type = _TYPE;
      }
      let params = {
        type: type,
        current: this.current,
        size: this.pagesize
      };
      mine.initbooksList(params).then(res => {
        const data = res.data.data;
        this.total = data.total;
        this.list = data.records;
      });
    },
    // 时间改变时触发
    getInvoiceData(date) {
      this.dialogData.time = date;
    },
    // 切换支出收入数据
    toggleBooks(index) {
      this.menusId = index;
      this.current = 1;
      this.initbooksList(index);
    },
    // 初始化图表
    drawLine() {
      let mychart = this.$echarts.init(this.$refs.mychart);
      let colors = ["#f3746e", "#30ca8e"];
      mychart.setOption({
        color: colors,
        tooltip: {
          trigger: "none",
          axisPointer: {
            type: "cross"
          }
        },
        title: {
          text: "本月近七天趋势对比图",
          fontSize: "16"
        },
        legend: {
          data: ["月支出", "月收入"],
          x: "right"
        },
        grid: {
          top: 70,
          bottom: 50,
          borderColor: "#2ac987",
          borderWidth: 1
        },
        xAxis: [
          {
            boundaryGap: false,
            type: "category",
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[1]
              }
            },
            data: [
              "01-24",
              "01-25",
              "01-26",
              "01-27",
              "01-28",
              "01-29",
              "01-30"
            ]
          },
          {
            type: "category",
            boundaryGap: false,
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[0]
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            max: "1000",
            min: "0"
          }
        ],
        series: [
          {
            name: "月支出",
            type: "line",
            xAxisIndex: 1,
            smooth: true,
            data: [50, 580, 450, 460, 600, 620, 580]
          },
          {
            name: "月收入",
            type: "line",
            xAxisIndex: 1,
            smooth: true,
            data: [0, 0, 400, 0, 0, 0, 0]
          }
        ]
      });
    },
    // 获取月支出（收入）数据
    getMonthexpend() {
      let params = {
        year: this.dateTime.year,
        month: this.dateTime.month
      };
      mine.getMonthexpend(params).then(res => {
        if (res.data.code === 1) {
          const data = res.data.data;
          this.Monthexpend = data;
        }
      });
    },
    // 批量选择记事本数据
    check() {},
    // 关闭弹窗
    handleClose() {
      this.dialogVisible = false;
    },
    // 获取批量删除记账本数据ids
    changeCurrent(id) {
      let num = this.deleteList.indexOf(id);
      if (num >= 0) {
        this.deleteList.splice(num, 1);
      } else {
        this.deleteList.push(id);
      }
    },

    // 提交批量删除ids
    deletesbook() {
      const params = {
        ids: this.deleteList.join(",")
      };
      mine.deletesbook(params).then(res => {
        this.initbooksList(this.menusId);
      });
    },
    // 获取分页当前页数
    currentchange(currentVal) {
      this.current = currentVal;
      this.initbooksList(this.menusId);
    },
    // dialog 改变收入支出
    changeType(index) {
      console.log(index)
      this.dialogTypeId = index;
    },
    // 切换时间
    prev() {
      if (this.dateTime.month <= 1) {
        this.dateTime.year--;
        this.dateTime.month = 12;
      } else {
        this.dateTime.month -= 1;
      }
      this.getMonthexpend();
    },
    next() {
      if (this.dateTime.month >= 12) {
        this.dateTime.year++;
        this.dateTime.month = 1;
      } else {
        this.dateTime.month += 1;
      }
      this.getMonthexpend();
    }
  },
  computed: {
    // 月份切换
    toggleDate(parme) {
      var newDate = new Date();
      const starDate = 1;
      var endmonth = new Date(
        this.dateTime.year,
        this.dateTime.month,
        0
      ).getDate();
      return (
        this.dateTime.year +
        "年" +
        this.dateTime.month +
        "月" +
        starDate +
        "日" +
        "——" +
        this.dateTime.year +
        "年" +
        this.dateTime.month +
        "月" +
        endmonth +
        "日"
      );
    }
  }
};
</script>

<style src="../../../../assets/css/pc/mine/books.scss" lang="scss" scoped></style>

<style lang="scss">
.pagination-book {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0px;
}
.pagination-book .el-pagination.is-background .el-pager li:not(.disabled) {
  background-color: #ffffff;
  border: solid 1px #e1e1e1;
}
.pagination-book
  .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: #30303d;
}

.pagination-book .el-pagination.is-background .btn-next {
  width: 63px;
  height: 28px;
  background-color: #ffffff;
  border: solid 1px #e1e1e1;
}
.pagination-book .el-pagination.is-background .btn-prev {
  width: 63px;
  height: 28px;
  background-color: #ffffff;
  border: solid 1px #e1e1e1;
}
.checkbox-cover .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #f7c414;
  border: #f7c414;
}
.checkbox-cover .el-checkbox__inner::after {
  left: 5px;
  top: 2px;
}
.dialogVisible .el-dialog__header {
  padding: 0px;
}
.dialogVisible .el-dialog__body {
  padding: 0px;
}
.dialogVisible .el-input__inner {
  width: 260px;
  background-color: #f7f7fb;
  border: none;
}
.dialogVisible .el-button--primary {
  background-color: #ffc002;
  border-color: #ffc002;
  width: 90px;
  height: 30px;
  padding: 0px;
  font-size: 14px;
}
</style>
