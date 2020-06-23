<template>
  <div class="bigbox">
        <div class="tou">
            <img src="@/assets/images/footballdata/back_i2@2x.png" alt="" @click="go">
            <span>问答详情</span>
            <img src="@/assets/images/footballdata/share_i@2x.png" alt="">
        </div>
      <div class="questions-details">
          <header>
              <div class="header-box">
                  <div class="topbox">
                      <div class="leftbox">
                          <p class="title" v-text="title"></p>
                          <p class="p2" v-text="details"></p>
                          <!-- pc↓ -->
                          <p class="p3"><span class="span1"><img src="@/assets/images/questions/_i2@2x.png" alt="">赛事交流 ·  2019-12-31 16:38:23</span> <span class="span2">我要回答</span><span class="span3">我要举报</span></p>
                          <!-- app↓ -->
                          <p class="p4"><span :class="'a'+classifyId" v-text="'#'+classifyName"></span><span class="time" v-text="createTime"></span><span>有<span class="num" v-text="answers"></span>个回答</span></p>
                      </div>
                  </div>
              </div>
          </header>
          <div class="content-box">
              <div class="left-box">
                  <div class="header" v-text="answers+'个回答'">
                      
                  </div>
                  <div class="questions">
                      <!-- 一级回复 -->
                      <div class="list" v-for="(k,i) in list" :key="'a'+i">
                          <div class="img-box">
                              <img :src="k.avatar" alt="">
                          </div>
                          <section>
                              <p class="username"><span v-text="k.userName"></span><span class="jb" @click="informanswer(k.answerId)">举报</span></p>
                              <!-- h5时间项 -->
                              <p class="text" ref="text" v-text="k.answerContent"></p>
                              <div class="More"><p @click="Morefun(i)"  ref="More">查看完整回答11111111</p></div>
                              <!-- pc时间项 -->
                              <div class="time">
                                  <span>{{(k.answerCreateTime).slice(5,16)+' · '}}</span>
                                  <span class="reply">{{k.answerList.length===0?'回复':k.answerList.length+'个回复'}}</span>
                                  <div @click="goodBadRecord(k.answerId,1)">
                                    <img src="@/assets/images/questions/applaud_i2@2x.png" alt="">
                                    <span class="nums">{{k.goods}}</span>
                                  </div>
                                  <div @click="goodBadRecord(k.answerId,2)">
                                    <img src="@/assets/images/questions/against_i2@2x.png" alt="">
                                    <span>{{k.bads}}</span>
                                  </div>
                              </div>
                                <!-- 二级回复 -->
                                <div class="erji" v-show="k.answerList!=0">
                                    <div v-for="(a,b) in k.answerList" :key="'b'+b" class="erjilist" v-show="b<(k.isHidden?k.answerList.length:3)">
                                        <span>
                                            <span v-text="a.userName"></span>: 
                                            {{a.answerContent}}
                                        </span>
                                    </div>
                                    <div :class="k.isHidden?'all hinddenall':'all'" v-show="(k.answerList).length>3" @click="erjiall(i)" >
                                        查看全部{{k.answerList.length}}条回复 >
                                    </div>
                                    <div :class="k.isHidden?'all':'all hinddenall'" @click="erjiallhidden(i)">
                                        收起全部
                                    </div>
                                </div>
                          </section>
                      </div>

                  </div>
              </div>
            <div class="right-box-3">
                <div class="title">
                    热门问答<img src="@/assets/images/questions/hot_i@2x.png" alt="">
                </div>
                <div class="list1" v-for=" (k,i) in problem" :key="'d'+i">
                    <div class="img-box">
                        <img src="@/assets/images/questions/ask_i@2x.png" alt="">
                    </div>
                    <div class="text-box">
                        <p class="text-p">我在百度里看到了你们的回答，我想知道这张图里面的3 10是什么意思？</p>
                        <p class="time-p">8个回答 · 2019-12-31</p>
                    </div>
                </div>
            </div>
          </div>
      </div>
        <div class="viewpoint">
            <div class="imgbox">
                <input type="text" placeholder="写下您的观点..." class="viewpoint-content" v-model="answerContent">
                <img src="@/assets/images/questions/edit_i@2x.png" alt="" class="icon">
            </div>
            
            <div class="send" @click="answer()">
                发送
            </div>
        </div>
  </div>
</template>

<script>
  import * as questions from "@/api/questions.js"
  import Vue from 'vue';
  import { Toast } from 'vant';
  Vue.use(Toast);
  export default {
    data() {
      return {
          list:[],
          listnum:4,
          problem:[1,2,1,1,1,1],
          shuju:[],
          title:null,
          details:null,
          classifyName:null,
          classifyId:null,
          answers:null,
          createTime:null,
          id:null,
          answerContent:''
      };
    },
    created() {
        this.title = this.$route.query.title;
        this.details = this.$route.query.details;
        this.classifyName = this.$route.query.classifyName;
        this.classifyId = this.$route.query.classifyId;
        this.answers = this.$route.query.answers;
        this.createTime = this.$route.query.createTime;
        this.id = this.$route.query.id;
        //掉 问答详情接口
        this.getdata(this.id);
    },
    computed: {

    },
    mounted(){
    },
    methods: {

        erjiall(i){
            this.list[i].isHidden++;
        },
        erjiallhidden(i){
            this.list[i].isHidden--;
        },
        //获取问答详情数据
        getdata(id){
            let params = {
                questionId:id
            }
            questions.questionsdetails(params).then((res)=>{
                this.list = res.data.data;
            })
        },

        //赞踩功能
        goodBadRecord(id,num){
            let datas = {
                answerId: id,
                type: num
            }
            questions.goodBadRecord(datas).then((res)=>{
                if(res.data.msg === "您已赞过此条评论"){
                    Toast('您已赞过此条评论');
                }else if(res.data.msg === "您已踩过此条评论"){
                    Toast('您已踩过此条评论');
                }if(res.data.msg === "成功"){
                    Toast('成功');
                    this.getdata(this.id);
                }
            })
        },

        //举报回答
        informanswer(id){
            let datas = {
                answerId:id,
                reason:'消极回答'
            }
            questions.inform(datas).then((res)=>{
                if(res.data.msg === "成功"){
                    Toast('举报成功'); 
                }else if(res.data.msg === "您已举报过此回答"){
                    Toast('您已举报过此回答');
                }
                 
            }).catch(()=>{
                // Toast('失败');
            })
        },

        //回答问题
        answer(){
            let datas = {
                questionId:this.id,
                answerContent:this.answerContent
            }
            if(datas.answerContent.match(/^[ ]*$/)){
                Toast('输入内容不能为空');
            }else{
                questions.answer(datas).then((res)=>{
                    if(res.data.msg === '成功'){
                        Toast('回答成功');
                        this.getdata(this.id)
                        this.answerContent = '';
                    }
                }).catch((err)=>{
                    // Toast('输入内容不能为空');
                })
            }

        },
        go(){
            this.$router.go(-1)
        }
    },
    components:{

    }
  };
</script>

<style src="@/assets/css/ph/questions/questions-details.scss" lang="scss" scoped></style>
