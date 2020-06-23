<template>
  <div class="bigbox">
    <pcNavBar  navActivate='彩经学院'></pcNavBar>
    <!-- 头部导航 -->
    <div class="header">
      <div><span>帮众体育</span> > 彩经学院<span> > {{content.videoTitle}}</span></div>
    </div>
    <!-- 视频播放 -->
    <div class="video-box">
      <div class="container">
        <video controls="controls">
          <source src="movie.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <!-- 内容描述 -->
    <div class="describe">
      <div class="content">
        <div class="left">
          <p class="title">《{{content.videoTitle}}》</p>
          <div class="artsub">
            <div class="artsubtips">
              <span><img src="" alt="">视频教程-</span>
              <span>欧赔思维-</span>
              <span>{{content.difficult===0?'新手小白':content.difficult===1?'初窥门径':'高手进阶'}}</span>
            </div>
            <div class="artgivelike">
                <span><img src="@/assets/images/college/browse_i@2x.png" alt="">10</span>
                <span><img src="@/assets/images/college/comment_i@2x.png" alt="">10</span>
                <span><img src="@/assets/images/college/tags_i@2x.png" alt="">10</span>
            </div>
          </div>
          <div class="videotab">
            <div @click="selectionfun(1)" :class="[selectionnum===1?'select':'']">视频概述</div>
            <div @click="selectionfun(2)" :class="[selectionnum===2?'select':'']">评论<span class="num">({{yiji.length}})</span></div>
          </div>
          <div class="videobody">
            <div v-show="selectionnum===1" class="summary">
              暂无视频概述!
            </div>
            
            <!-- 评论 -->
            <div class="comment" v-show="selectionnum===2">
                <!-- 回答列表 -->
                <div class="body-left">
                    <!-- 用户回答 -->
                    <div class="comment-box">
                        <textarea maxlength="350" id="" cols="30" rows="10" placeholder="我来告诉你答案..." style="resize:none;" v-model="answerContent">
                        </textarea>
                        <div class="release">
                            <div class="comment-btn" @click="commentVideo()">发布回答</div>
                            <p>请自觉遵守互联网相关政策法规，回答内容只代表网友观点，与本站立场无关！</p>
                        </div>
                    </div>
                      <!-- 回答详情 -->
                    <div class="answer" v-for="(k,l) in yiji" :key="l" v-show="l<nums">
                        <!-- 遍历内容 -->
                        <div class="answers">
                            <div class="answers-title">
                                <img :src="k.avatar" alt="">
                                <span>{{k.userName}}</span>
                                <span class="answers-time">{{k.createTime}}</span>
                            </div>
                            <p class="answers-texts">{{k.content}}</p>
                            <!-- <p class="answers-texts"></p> -->
                            <!-- 评论 浏览 点赞 -->
                            <div class="answers-fun">
                                <span>
                                    <!-- applaud_i@2x.png -->
                                    <span @click="erjigoodBadRecord(k.id,1)"><img src="" alt=""><img src="@/assets/images/college/applaud_i2@2x.png" alt=""> 赞 {{k.good}}</span>
                                    <span class="c" @click="erjigoodBadRecord(k.id,2)"><img src="@/assets/images/college/against_i2@2x.png" alt=""> 踩 {{k.bad}}</span>
                                    <span @click="commentbtn(l)">
                                      <img :src="isHidden===l?require('@/assets/images/questions/comment_i2@2x.png'):require('@/assets/images/questions/comment_i@2x.png')" alt="">
                                      {{k.replyList.length}}人评论
                                    </span>
                                </span>
                            </div>
                            <!-- 二级评论 -->
                            <div class="two" v-show="l===isHidden">
                                <!-- 输入评论 -->
                                <div class="two-title">
                                    <img src="" alt="" class="two-title-img">
                                    <!-- 评论框 -->
                                    <div class="comment-box">
                                        <!-- 二级评论输入框 -->
                                        <textarea ref="text" v-model="erjicomment" id="twotext" cols="30" rows="10" placeholder="在这写下你想说的话..."></textarea>
                                        <!-- 提交二级评论按钮 -->
                                        <div class="comment-btn" @click="replyCommentVideo(k.id)">
                                            评论
                                        </div>
                                    </div>
                                </div>
                                <!-- 评论列表 -->
                                <div class="comment-list" v-for="(v,i) in k.replyList" :key="i">
                                    <img :src="v.avatar" alt="" class="imgs">
                                    <div class="comment-content">
                                        <p class="username" v-text="v.userName"></p>
                                        <p class="usertime" v-text="v.createTime"></p>
                                        <div class="com">
                                            <p class="com-text" v-text="v.content"></p>
                                            <p class="fabulous" @click="erjigoodBadRecord(v.id,1)" :key="v.goods">
                                                <img src="@/assets/images/college/applaud_i2@2x.png" alt="">
                                                {{v.good}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="null" v-show="yiji.length===0">
                        暂无回答
                    </div>
                    <div class="more" v-show="nums<yiji.length && yiji.length!=0" >
                        <div class="solidbox"></div>
                        <div>下拉加载跟多</div>
                        <div class="solidbox"></div>
                    </div>
                    <div class="more" v-show="nums>=yiji.length && yiji.length!=0">
                        <div class="solidbox"></div>
                        <div>暂无更多</div>
                        <div class="solidbox"></div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div class="right">
          <!-- 推荐干货 -->
            <!-- 相关文章 -->
              <div class="course">
                <header>
                  <span>相关视频</span>
                  <span>更多 > </span>
                </header>
                <div class="contents" v-for="(v,i) in videolist" :key="i">
                  <div class="imgbox">
                    <img :src="v.articlePic" alt="">
                  </div>
                  <div class="textbox">
                    <p v-text="v.videoTitle"></p>
                    <p>发布于{{v.createTime}}</p>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
    <pcFooter></pcFooter>
  </div>
</template>

<script>
import * as college from '@/api/college'
import { is } from '@babel/types';
  export default {
    data() {
      return {
        selectionnum:1,
        selectnum:1,
        content:[],//视频详情
        yiji:[],//评论数据,
        nums:10,//先展示前十条数据
        isHidden:null,//控制二级评论的显示隐藏
        answerContent:"",//一级评论框内容
        erjicomment:"",//二级评论框内容
        videolist:[],//相关视频
        //路由传参
        id:null,//id
      };  
    },
    created() {
      this.id = this.$route.query.id;
      this.getdetails(this.id);//获取视频详情
      this.GetVideoComment(this.id);//获取文章评论
      this.relevantcollegeVideo(this.content.articleLabel);//相关视频
    },
    methods: {
        selectionfun(i){
          this.selectionnum = i;
        },
        selectfun(i){
          this.selectnum =i;
        },
        commentbtn(i){//控制二级评论的显示隐藏
          if(i === this.isHidden){
            this.isHidden = null;
          }else {
            this.isHidden = i;
          }
        },
        //接口
        getdetails(id){//获取视频详情
          let params = {
            size:10,
            current:1
          }
          let data = {
            id:id
          }
          college.collegeVideoall(params,data).then((res)=>{
            this.content = res.data.data.records[0];
            console.log(this.content)
          })
        },
        GetVideoComment(id){//获取文章评论
          let data = {
            attribute1:id,
          }
          college.GetVideoComment(data).then((res)=>{
            this.yiji = res.data.data;
            console.log(this.yiji);
          })
        },
        relevantcollegeVideo(id){//获取相关视频
          let params = {
            labelIds:'28,29'
          }
          college.relevantcollegeVideo(params).then((res)=>{
            this.videolist = res.data.data;
            console.log(this.videolist);
          })
        },
        commentVideo(){//彩经学院视频评论
          let data = {
            attribute1:this.id,
            content:this.answerContent
          }
          if(this.answerContent.trim()===""){
            this.$message.error("评论内容不能为空");
          }else{
            college.commentVideo(data).then((res)=>{
              this.GetVideoComment(this.id);
              this.$message({message: '成功',type: 'success'});
              this.answerContent = '';
            })
          }
        },
        replyCommentVideo(ids){//回复视频评论
          // debugger
          let userdata = sessionStorage.getItem("UserInfro");
          if(userdata){//判断是否已登陆
            if(this.erjicomment.trim()===''){//判断输入框内容是否为空
              this.$message.error("内容不能为空");
            }else{
              let a = JSON.parse(userdata); //可以将json字符串转换成json对象 
              let data = {
                "id": ids,
                "content": this.erjicomment,
                "replyId": a.id
              }
              college.replyCommentVideo(data).then((res)=>{
                if(res.data.code === 1){
                  this.$message({message: '回复成功',type: 'success'});
                  this.erjicomment = '';
                  this.GetVideoComment(this.id);
                }else {
                    this.$message.error("回复失败,请稍后重试");
                }
              })
            }
          }else{
            this.$message.error("用户未登录");
          }
        },
        erjigoodBadRecord(id,num){//彩经学院视频评论点赞点踩
          let data = {
            "standby2":id,//文章评论id
            "type":num//1赞2踩
          }
          college.erjigoodBadRecord(data).then((res)=>{
            console.log(res)
            if (res.data.msg === "您已赞过此条评论"){
                this.$message.error('您已赞过此条评论');
            }else if (res.data.msg === "您已踩过此条评论"){
                this.$message.error("您已踩过此条评论");
            }
            if(res.data.code === 1){
              this.GetVideoComment(this.id);
              this.$message({message: '成功',type: 'success'});
            }
            if(res.data.msg === "用户未登录"){
                this.$message.error("用户未登录");
            }
          })
        },
    }
  };
</script>

<style src="@/assets/css/pc/college/video.scss" lang="scss" scoped></style>
