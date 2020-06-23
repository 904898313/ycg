<template>
  <div class="collegeBox">
    <div class="college_lf">
      <div class="game_lf_top">
        <p>彩经学院</p>
        <span>查看更多>>></span>
      </div>
      <div class="college_lf_bom">
        <div class="college_item" v-for="(item,index) in collegeList">
          <div class="college_item_top">
            <el-image class="coll_top_img" :src="item.contentPic?item.contentPic:imgUrl"><div slot="error" class="errorImgBig"><i class="el-icon-picture-outline"></i></div></el-image>
            <div class="coll_top_btn fp">复盘解析</div>
            <div class="coll_top_btn xs">新手小白</div>
          </div>
          <div class="college_item_title singleLineText">{{item.articleTitle}}</div>
          <div class="college_item_text multilineText2">{{item.content}}</div>
          <div class="college_item_bom">
            <span>{{item.createTime}}</span>
            <div class="college_bom_rt">
              <div class="coll_bft_info">
                <img src="../../../../assets/images/home/comment.png"><span>{{item.comment}}</span>
              </div>
              <div class="coll_bft_info">
                <img src="../../../../assets/images/home/check.png"><span>{{item.comment}}</span>
              </div>
              <div class="coll_bft_info">
                <img src="../../../../assets/images/home/praise.png"><span>{{item.good}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="college_rt">
      <div class="game_lf_top">
        <p>足球问答</p>
        <span>查看更多>>></span>
      </div>
      <ul class="college_questions">
        <li v-for="(item,index) in answersList">
          <p class="multilineText2">{{item.details}}</p>
          <div class="college_ques_bom">
            <span>{{item.createTime}}</span>
            <p>{{item.answers}}人回答 · {{item.answers}}人浏览</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import * as home from '../../../../api/home';
  export default {
    data() {
      return {
        imgUrl:'',
        collegeList:[],
        answersList:[0,0,0,0,0,0]
      };
    },
    created() {
      let that = this;
      setTimeout(()=>{
        that.imgUrl = 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1870047295,3520151295&fm=26&gp=0.jpg'
      },2000)
      this.getCollege()
      this.getHotQuestion()
    },
    methods: {
      // 彩经学院
      getCollege(){
        home.getCollegeList({ current: 1, size: 6 }).then(res => {
          if(res.data.code === 1){
            this.collegeList = res.data.data.records;
          }
        })
      },
      // 足球问答
      getHotQuestion(){
        home.getHotQuestionList().then(res => {
          if(res.data.code === 1){
            res.data.data.length <= 5 ? res.data.data : res.data.data.splice(6);
            this.answersList = res.data.data
          }
        })
      }
    }

  };
</script>

<style src="../../../../assets/css/pc/home/college.scss" lang="scss" scoped></style>
