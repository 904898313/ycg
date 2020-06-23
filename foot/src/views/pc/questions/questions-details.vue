<template>
  <div class="bigbox">
    <pcNavBar navActivate='问答专栏'></pcNavBar>
      <!-- header 导航 -->
      <header>
          <img src="" alt="">
          <span>帮众体育 > </span>
          <span class="current">体育问答</span>
      </header>
      <div class="content-box">
            <!-- 头部问题详情 -->
            <div class="questions">
                <div class="questions-header">
                    <div class="left">
                        <div v-for="(item,index) in remarkName.split(',')" :key="index">{{item}}</div>
                    </div>
                    <div class="right">
                        <span>
                            <img src="@/assets/images/questions/fx(3)@2x.png" alt="">
                            <span>分享</span>
                        </span>
                        <img src="@/assets/images/questions/weiixn@2x.png" alt="" class="share">
                        <img src="@/assets/images/questions/weibo@2x.png" alt="" class="share">
                        <img src="@/assets/images/questions/zone@2x.png" alt="" class="share lastimg">
                        <span class="jb" @click="informquestion(id)">
                            <img src="@/assets/images/questions/jb@2x.png" alt="">
                            <span>举报</span>
                        </span>
                    </div>
                </div>
                <p class="questions-title"><img src="@/assets/images/questions/q_i@2x.png" alt="">{{title}}</p>
                <p class="questions-author"><img :src="avatar" alt="">{{userName}}</p>
                <p class="questions-text">
                    <span class="text">{{details}}</span>
                </p>
                <p class="time">
                    <span>
                        <span>{{answers}}人回答<span class="d">·</span></span>
                        <span>{{standby3}}人浏览<span class="d">·</span></span>
                        <span>所属栏目：{{classifyName}}</span>
                    </span>
                    <span>
                        发布时间: {{createTime}}
                    </span>
                </p>
            </div>
            <!-- 隔层 -->
            <div class="bgbox"></div>
            
            <div class="body">
                <!-- 回答列表 -->
                <div class="body-left">
                    <!-- 用户回答 -->
                    <div class="comment-box">
                        <textarea maxlength="350" id="" cols="30" rows="10" placeholder="我来告诉你答案..." style="resize:none;" v-model="answerContent">

                        </textarea>
                        <div class="release">
                            <div class="comment-btn" @click="answer">发布回答</div>
                            <p>请自觉遵守互联网相关政策法规，回答内容只代表网友观点，与本站立场无关！</p>
                            <p class="upload">
                                <el-upload
                                    :action="apiUrl()"
                                    name="images"
                                    class="upload-demo"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :before-remove="beforeRemove"
                                    multiple
                                    :limit="3"
                                    :on-exceed="handleExceed"
                                    :file-list="fileList"
                                    :on-success="success"
                                    enctype="multipart/form-data"
                                    :show-file-list="false"
                                >
                                    上传图片
                                </el-upload>
                            </p>
                        </div>
                        <div class="imgbox">
                            <img :src="v.minImageUrl" alt="" v-for="(v,i) in imglist" :key="i">
                        </div>
                    </div>
                    <!-- 回答总数 -->
                    <div class="tit">
                        <span>{{yiji.length}}个回答</span>
                    </div>
                    <!-- 回答详情 -->
                    <div class="answer" v-for="(k,l) in yiji" :key="l" v-show="l<nums">
                        <!-- 遍历内容 -->
                        <div class="answers">
                            <div class="answers-title">
                                <img :src="k.avatar" alt="">
                                <span>{{k.userName}}</span>
                                <span class="answers-time">{{k.answerCreateTime}}</span>
                            </div>
                            <p class="answers-texts">{{k.answerContent}}</p>
                            <img :src="k.standby1" alt="">
                            <!-- <p class="answers-texts"></p> -->
                            <!-- 评论 浏览 点赞 -->
                            <div class="answers-fun">
                                <span>
                                    <!-- applaud_i@2x.png -->
                                    <span @click="goodBadRecord(k.answerId,1)"><img src="" alt=""><img src="@/assets/images/college/applaud_i2@2x.png" alt=""> 赞 {{k.goods}}</span>
                                    <span class="c" @click="goodBadRecord(k.answerId,2)"><img src="@/assets/images/college/against_i2@2x.png" alt=""> 踩 {{k.bads}}</span>
                                    <span @click="commentfun(l)"><img src="" alt=""><img :src="isHidden===l?require('@/assets/images/questions/comment_i2@2x.png'):require('@/assets/images/questions/comment_i@2x.png')" alt="">{{k.answerList.length}}人评论</span>
                                </span>
                                <span class="last" @click="informanswer(k.answerId)">
                                    <img src="@/assets/images/questions/jb@2x.png" alt="">
                                    举报此回答
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
                                        <textarea ref="text" id="twotext" cols="30" rows="10" placeholder="在这写下你想说的话..."></textarea>
                                        <!-- 提交二级评论按钮 -->
                                        <div class="comment-btn" @click="replyAnswer(l,k.answerId)">
                                            评论
                                        </div>
                                    </div>
                                </div>
                                <!-- 评论列表 -->
                                <div class="comment-list" v-for="(v,i) in k.answerList" :key="i">
                                    <img :src="v.avatar" alt="" class="imgs">
                                    <div class="comment-content">
                                        <p class="username" v-text="v.userName"></p>
                                        <p class="usertime" v-text="v.answerCreateTime"></p>
                                        <div class="com">
                                            <p class="com-text" v-text="v.answerContent"></p>
                                            <p class="fabulous" @click="erjigoodBadRecord(v.answerId,1)" :key="v.goods">
                                                <img src="@/assets/images/college/applaud_i2@2x.png" alt="">
                                                {{v.goods}}
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
                <!-- 相关问答列表页 -->
                <div class="body-right">
                    <!-- .相关问答. -->
                    <div class="recommend">
                        <header>
                            <span>相关问答</span>
                        </header>
                        <!-- content容器 -->
                        <div class="problem">
                            <!-- content循环内容 -->
                            <div class="problem-content" v-for="(v,i) in rightlist1" :key="i" v-if="i<4" @click="go(v)">
                                <p class="problem-title" v-text="v.details"></p>
                                <p class="problem-time">
                                    <span v-text="v.createTime"></span>
                                    <span>{{v.answers}}人回答 · {{v.standby3}}人浏览</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- 隔层 -->
                    <div class="bgbox"></div>
                    <!-- .热门问答. -->
                    <div class="recommend">
                        <header>
                            <span>热门问答</span>
                        </header>
                        <!-- content容器 -->
                        <div class="problem">
                            <!-- content循环内容 -->
                            <div class="problem-content" v-for="(v,i) in rightlist2" :key="i" v-if="i<4" @click="go(v)">
                                <p class="problem-title" v-text="v.title"></p>
                                <p class="problem-author"><img :src="v.avatar" alt="">{{v.userName}}</p>
                                <p class="problem-text" v-text="v.details"></p>
                                <p class="problem-time">
                                    <span v-text="v.createTime"></span>
                                    <span>{{v.answers}}人回答 · {{v.standby3}}人浏览</span>
                                </p>
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
  import * as questions from "@/api/questions";
  export default {
    data() {
      return {
          rightlist1:[],
          rightlist2:[],
          yiji:[],
          answerContent:'',
          questionId:null,
          title:null,
          userName:null,
          id:null,
          avatar:null,
          details:null,
          answers:null,
          standby3:null,
          classifyName:null,
          createTime:null,
          classifyId:null,
          remarkName:null,
          nums:10,
          fileList: [],
          imglist:[],
          isHidden:null
      };
    },
    
    watch: {
        '$route' (to, from) { //监听路由是否变化
            if(this.$route.query.id){//   判断传递值的变化
                this.questionsdetails(this.$route.query.id);
                this.title = this.$route.query.title;
                this.userName = this.$route.query.userName;
                this.id = this.$route.query.id;
                this.avatar = this.$route.query.avatar;
                this.details = this.$route.query.details;
                this.answers = this.$route.query.answers;
                this.standby3 = this.$route.query.standby3;
                this.classifyName = this.$route.query.classifyName;
                this.createTime = this.$route.query.createTime;
                this.classifyId = this.$route.query.classifyId;
                this.remarkName = this.$route.query.remarkName;
                this.imglist = []
            }
        } 
    },
    created() {
        this.questionsdetails(this.$route.query.id);
        this.title = this.$route.query.title;
        this.userName = this.$route.query.userName;
        this.id = this.$route.query.id;
        this.avatar = this.$route.query.avatar;
        this.details = this.$route.query.details;
        this.answers = this.$route.query.answers;
        this.standby3 = this.$route.query.standby3;
        this.classifyName = this.$route.query.classifyName;
        this.createTime = this.$route.query.createTime;

        this.classifyId = this.$route.query.classifyId;
        this.remarkName = this.$route.query.remarkName;
        this.hotQuestion();
        this.recommendQuestion();

        // console.log(this.$route.query.remark);
    },
    computed: {
    },
    mounted(){
        this.questionId = this.$route.query.data;
        // 监听滚动条到底部
        window.addEventListener('scroll', this.lazyLoading);
    },
    methods: {
        lazyLoading () { // 滚动到底部，再加载的处理事件
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          let clientHeight = document.documentElement.clientHeight;
          let scrollHeight = document.documentElement.scrollHeight;
          if (scrollTop + clientHeight >= scrollHeight) { // 如果滚动到接近底部，自动加载下一页
                this.nums = this.nums+6;
            }
        },

        // 二级评论显示隐藏
        commentfun(l){
            if (this.isHidden === l){
                this.isHidden = null;
            }else if(this.isHidden === null){
                this.isHidden = l;
            }else if(this.isHidden || this.isHidden === 0){
                this.isHidden = l;
            }
        },

        //接口
        //获取回答列表
        questionsdetails(questionId) {
            let params = {
                questionId: questionId
            };
            questions.questionsdetails(params).then((res)=>{
                this.yiji = res.data.data;
                console.log(this.yiji);
            })
        },

        //回答问题
        answer(){
            this.isLogin();
                if(this.imglist.length===0){
                    let datas = {
                        questionId:this.$route.query.id,
                        answerContent:this.answerContent,
                    }       
                    if(datas.answerContent.match(/^[ ]*$/)){
                        this.$message.error('内容不能为空');
                    }else{
                        questions.answer(datas).then((res)=>{
                            console.log(res)
                            this.$message({
                                message: '回答成功',
                                type: 'success'
                            });
                            this.answerContent = '';
                            this.imglist = [];
                            this.questionsdetails(this.$route.query.id)()
                        }).catch(()=>{
                            // this.$message.error('提交失败，请稍后重试');
                        })
                    }
                }else if(this.imglist.length>0){
                    let datas = {
                        questionId:this.$route.query.id,
                        answerContent:this.answerContent,
                        standby1:this.imglist[0].minImageUrl
                    }
                    if(datas.answerContent.match(/^[ ]*$/)){
                        this.$message.error('内容不能为空');
                    }else{
                        questions.answer(datas).then((res)=>{

                            this.$message({
                                message: '回答成功',
                                type: 'success'
                            });
                            this.answerContent = '';
                            this.imglist = [];
                            this.questionsdetails(this.$route.query.id)()
                        }).catch(()=>{
                            // this.$message.error('提交失败，请稍后重试');
                        })
                    }
                }

        },

        //点赞
        goodBadRecord(id,num){
            this.isLogin();
            let datas = {
                answerId:id,
                type:num
            }
            questions.goodBadRecord(datas).then((res)=>{
                if(res.data.msg === "成功"){

                }else{
                    this.$message.error(res.data.msg);
                }
                this.questionsdetails(this.$route.query.id)()
            }).catch(()=>{
                    // this.$message.error('点赞/踩失败，稍后重试');
            })
        },
        //二级点赞
        erjigoodBadRecord(id,num){
            this.isLogin();
            let datas = {
                answerId:id,
                type:num
            }
            questions.goodBadRecord(datas).then((res)=>{
                if(res.data.msg === "成功"){
                    this.$message({
                    message: '成功',
                    type: 'success'
                    });
                    this.questionsdetails(this.$route.query.id)()
                }else{
                    this.$message.error(res.data.msg);
                }
                
            }).catch(()=>{
                    // this.$message.error('点赞/踩失败，稍后重试');
            })
        },

        //跳转问题详情页面
        go(v){
            console.log(v)
            this.$router.push({
                path:'pc-questions-details',
                name:'pc-questions-details',
                query:{  //需要携带的参数
                    data:v,
                    id:v.questionId,
                    title:v.title,
                    userName:v.userName,
                    avatar:v.avatar,
                    details:v.details,
                    answers:v.answers,
                    standby3:v.standby3,
                    classifyName:v.classifyName,
                    createTime:v.createTime,
                    classifyId:v.classifyId,
                    remarkName:v.remarkName
                }
            })
        },

        //举报问题
        informquestion(id){
            this.isLogin();
            let datas = {
                questionId:id,
                reason:'消极问题'
            }
            questions.inform(datas).then((res)=>{
                
                 this.$message({
                        message: '举报成功',
                        type: 'success'
                    });
            }).catch(()=>{

                // this.$message.error('举报失败,请稍后重试');
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
                    this.$message({
                        message: '举报成功',
                        type: 'success'
                    });
                }else if(res.data.msg === "您已举报过此回答"){
                    this.$message.error('您已举报过此回答');
                }
                 
            }).catch(()=>{
                // this.$message.error('举报失败,请稍后重试');
            })
        },

        //回复评论
        replyAnswer(index,id){
            this.isLogin();
            let datas = {
                answerId:id,
                answerContent:this.$refs.text[index].value                
            }
            if(datas.answerContent.match(/^[ ]*$/)){
                this.$message.error('内容不能为空');
            }else{
                questions.replyAnswer(datas).then((res)=>{
                    this.$message({
                        message: '回复成功',
                        type: 'success'
                    });
                    this.questionsdetails(this.$route.query.id);
                    
                    this.$refs.text[index].value = '';
                }).catch(()=>{
                    // this.$message.error('回复失败，请稍后重试');
                    
                })
            }

        },
        //热门回答
        hotQuestion(){
            questions.hotQuestion().then((res)=>{
                this.rightlist2 = res.data.data;
            })
        },
        //相关问答
        recommendQuestion(){
            let params = {
                classifyId:this.classifyId
            }
            questions.recommendQuestion(params).then((res)=>{
                this.rightlist1 = res.data.data;
            })
        },





     apiUrl() {
      var url =
        process.env.VUE_APP_BASE_API + "/file/uploadImageAndCrtThumbImages";
        return url;
    },


        //上传图片
      handleRemove(file, fileList) {
      },
      handlePreview(file) {
        
      },
      handleExceed(files, fileList) {
        this.$message.warning(`最多上传3张图片`);
      },
      beforeRemove(file, fileList) {
           this.$message.warning('??????');
      },
    success(response, file, fileList){
        this.imglist.push(response.data[0])
    }



    },
    components:{

    }
  };
</script>

<style src="@/assets/css/pc/questions/questions-details.scss" lang="scss" scoped></style>
