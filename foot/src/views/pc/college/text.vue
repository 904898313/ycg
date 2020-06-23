<template>
  <div class="bigbox">
    <pcNavBar navActivate='彩经学院'></pcNavBar>
    <div class="bgcontent">
      <img :src="textdata.articlePic" alt="" class="bgcontentimg">
        <div class="content">
          <div class="text">
            <!-- 面包屑 -->
            <div class="crumbs">
              <p><img src="" alt=""><span>帮众体育</span><img src="" alt=""> > </p>
              <p v-text="textdata.articleTitle"></p>
            </div>
            <div class="title">
              <img :src="textdata.articlePic" alt="">
              <p class="p1"><span v-text="textdata.createTime"></span><span class="num" v-text="textdata.browse"></span></p>
              <p class="p2" v-text="textdata.articleTitle"></p>
              <p class="p3">
                <img src="@/assets/images/college/logo@2x.png" alt="" class="logo">
                <span v-text="textdata.author"></span>
                <img src="@/assets/images/college/vip@2x.png" alt="" class="vip">
                <span>责任编辑：{{textdata.compile}}</span>
              </p>
              <p class="p4">导读：{{textdata.introduction}} #本文大概4153字，阅读约为3分钟#</p>
            </div>
            <p class="texts" v-text="textdata.content"></p>
            
            <div class="imgbox">
              <img :src="textdata.contentPic" alt="" class="imgs">
              <!-- <p>IT创始人：大实际开发加水电费垃圾啊</p> -->
            </div> <div class="bottom">
              <p class="ptext">本文由帮众体育原创，转载请注明出处：https://www.bzsports.com/content/wz496.html，谢谢合作！</p>
              <div class="left">
                <p>文章相关标签: </p>
                <div v-for="(item,index) in textlabel.split(',')" :key="index">{{item}}</div>
              </div>
            </div>
            <!-- 点赞 -->
            <div class="from">
              <div>
                <img src="@/assets/images/college/1@2x.png" alt="" @click="goodBadRecord(id,1)">
                <p class="p1" v-text="textdata.good || 0"></p>
                <p class="p2">学到了，666！</p>
              </div>
              <div>
                <img src="@/assets/images/college/2@2x.png" alt="" @click="goodBadRecord(id,2)">
                <p class="p1" v-text="textdata.bad || 0"></p>
                <p class="p2">一脸懵逼</p>
              </div>
              <div>
                <img src="@/assets/images/college/3@2x.png" alt="" @click="goodBadRecord(id,3)">
                <p class="p1" v-text="textdata.face2 || 0"></p>
                <p class="p2">看傻了，神仙操作</p>
              </div>
              <div>
                <img src="@/assets/images/college/4@2x.png" alt="" @click="goodBadRecord(id,4)">
                <p class="p1" v-text="textdata.face3 || 0"></p>
                <p class="p2">不学我也会！</p>
              </div>
              <div>
                <img src="@/assets/images/college/5@2x.png" alt="" @click="goodBadRecord(id,5)">
                <p class="p1" v-text="textdata.face4 || 0"></p>
                <p class="p2">一派胡言~~~</p>
              </div>
            </div>
            <!-- 上下一篇文章 -->
            <div class="navbtn">
              <span>上一篇：<span>一心想从事体育行业，能赚钱吗？</span></span>
              <div></div>
              <span>下一篇：<span>跪求 米尔萨的真实身高和臂展是多少？</span></span>
            </div>
            <div class="bgbox"></div>
            <!-- 最新文章 -->
            <div class="article">
              <header>
                <p class="left">
                  <span>最新文章</span>
                  <!-- <span>有<strong>3</strong>人评论</span> -->
                </p>
                <p class="right">更多 > </p>
              </header>
              <div class="body">
                <div class="bodys" v-for="(item,index) in si(newtexts)" :key="index" >
                  <div class="imgbox">
                    <img :src="item.articlePic" alt="">
                  </div>
                  <div class="textbox">
                    <p v-text="item.articleTitle"></p>
                    <p v-text="item.createTime"></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bgbox"></div>
            <!-- 评论/回复 -->
            <div class="article">
              <header>
                <p class="left">
                  <span>网友评论</span>
                  <span>有<strong>3</strong>人评论</span>
                </p>
                <p class="right"></p>
              </header>
            </div>

            <!-- copy -->

                <!-- 回答列表 -->
                <div class="body-left">
                    <!-- 用户回答 -->
                    <div class="comment-box">
                        <textarea maxlength="350" id="" cols="30" rows="10" placeholder="我来告诉你答案..." style="resize:none;" v-model="answerContent">
                          
                        </textarea>
                        <div class="release">
                            <div class="comment-btn" @click="commentfun(id)">发布回答</div>
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
                                        <div class="comment-btn" @click="replyComment(k.id)">
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
          <!-- 右 -->
          <div class="nav">
              <!-- 相关文章 -->
              <div class="course">
                <header>
                  <span>相关文章</span>
                  <span>更多 > </span>
                </header>
                <div class="contents" v-for="(v,i) in liu(relevant)" :key="i">
                  <div class="imgbox">
                    <img :src="v.articlePic" alt="">
                  </div>
                  <div class="textbox">
                    <p v-text="v.articleTitle"></p>
                    <p>发布于{{v.createTime}}</p>
                  </div>
                </div>
              </div>
              <!-- 文章阅读排行 -->
              <div class="course">
                <header>
                  <span>文章阅读排行</span>
                  <span>更多 > </span>
                </header>
                <div class="read" v-for="(item,index) in liu(readranking)" :key="index">
                  <div class="left" :class="index<3?'bgred':''">
                    {{index+1}}
                  </div>
                  <div class="right">
                    <p v-text="item.articleTitle"></p>
                    <p><span>发布于：{{item.createTime}}  </span><span>  {{item.browse}}人读过</span></p>
                  </div>
                </div>
              </div>
              <!-- 相关图集 -->
              <div class="course">
                <header>
                  <span>相关图集</span>
                  <span>更多 > </span>
                </header>
                <div class="atlas">
                  <div class="imgbox" v-for="(item,index) in san(atlas)" :key="index">
                    <img :src="item.address" alt="" class="bgimg">
                    <div class="imgbg">
                      <p><img src="@/assets/images/college/tu-icon@2x.png" alt="">{{item.title}}</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 相关视频 -->
              <div class="course">
                <header>
                  <span>相关视频</span>
                  <span>更多 > </span>
                </header>
                <div class="video">
                  <!-- <div class="imgbox">
                    <img :src="video1.videoPic || ''" alt="" class="bgimg">
                    <div class="imgbg">
                      <p><img src="@/assets/images/college/videotape@2x.png" alt="">{{video1.videoTitle || ''}}</p>
                      <p><span>{{video1.createTime || ''}}</span> · <span>{{video1.browse || ''}}人看过</span></p>
                    </div>
                    <div class="videoss">时长：{{video1.time || ''}}</div>
                  </div> -->
                  <div class="video_text">
                    <p v-for="(item,index) in si(video)" :key="index"><span></span>{{item.videoTitle}}</p>
                  </div>
                  
                </div>
              </div>
              <!-- 热门标签 -->
              <div class="course">
                <header>
                  <span>热门标签</span>
                  <span>更多 > </span>
                </header>
                <div class="label">
                  <div class="labels" v-for="index in 8" :key="index">
                      孙兴慜
                  </div>
                </div>
              </div>
          </div>
          <!-- 分享 -->
          <div class="share">
            <div><img src="@/assets/images/college/comment_i@3x.png" alt=""></div>
            <p>分享</p>
            <div><img src="@/assets/images/college/weixin-ico2@2x.png" alt=""></div>
            <div><img src="@/assets/images/college/QQ-icon2@2x.png" alt=""></div>
            <div><img src="@/assets/images/college/weibo-icon@2x.png" alt=""></div>
          </div>
        </div>
    </div>
     <pcFooter></pcFooter>
  </div>
</template>

<script>
  import * as college from '@/api/college.js'
  export default {
    data() {
      return {
        selectnum:1,
        textdata:[],//文章数据
        textlabel:'',//文章标签
        yiji:[],//评论数据
        nums:10,//评论最多展示
        isHidden:-1,//控制二级评论的显示隐藏
        answerContent:'',// 一级回复输入框值
        erjicomment:'',// 二级回复输入框值
        newtexts:[],//最新文章
        relevant:[],//相关文章
        readranking:[],//文章阅读排行
        atlas:[],//相关图集
        video:[],//相关视频
        video1:[],//相关视频1
        user:null,
        //路由传参
        id:null,//id
        articleLabel:null,//标签id
      };
    },
    created() {
      this.id = this.$route.query.id;//文章id
      this.articleLabel = this.$route.query.articleLabel;//标签id

      this.newtext();//获取最新文章
      this.textdetails(this.$route.query.id)//获取文章详情
      this.newtextbel(this.$route.query.id)//获取当前文章详情的标签
      this.read();//获取文章阅读排行
      this.relevanttext(this.$route.query.articleLabel);//获取相关文章
      this.picture(this.$route.query.articleLabel);//获取相关图集
      this.getcomment(this.$route.query.id);//获取文章评论


      this.relevantcollegeVideo(this.$route.query.articleLabel);//获取相关视频
    },
    mounted(){
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
      selectfun(i){
        this.selectnum =i;
      },
      commentbtn(index){//控制二级评论的显示隐藏
        if(this.isHidden === index ){
          this.isHidden = -1;
        }else{
          this.isHidden = index;
        }
      },
      //接口
      relevantcollegeVideo(id){//获取相关视频
        let params = {
          labelIds:id
        }
        college.relevantcollegeVideo(params).then((res)=>{
          this.video = res.data.data;
          this.video1 = res.data.data[0];
          console.log(this.video);
        })
      },


      goodBadRecord(id,num){//文章点赞/点踩
        let data = {
          "standby1": id,//文章id
          "type": num//类型(0:无,1:赞,2:踩,3:一脸懵逼,4:看傻了,5:不学我也会）
        }
        college.goodBadRecord(data).then((res)=>{
          console.log(res)
          if(res.data.msg === "重复操作"){
            this.$message.error("您已选择过了");
          }else if(res.data.code){
            this.$message({message: '成功',type: 'success'});
          }
        })
      },
      replyComment(ids){//回复文章评论
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
            console.log(data);
            college.replyComment(data).then((res)=>{
              if(res.data.code === 1){
                this.$message({message: '回复成功',type: 'success'});
                this.erjicomment = '';
                this.getcomment(this.id);
              }else {
                  this.$message.error("回复失败,请稍后重试");
              }
            })
          }
        }else{
          this.$message.error("用户未登录");
        }
      },
      erjigoodBadRecord(id,num){//文章评论点赞/点踩
        let data = {
          "standby2":id,//文章评论id
          "type":num//1赞2踩
        }
        // console.log(data);
        college.erjigoodBadRecord(data).then((res)=>{
          console.log(res)
          if (res.data.msg === "您已赞过此条评论"){
              this.$message.error('您已赞过此条评论');
          }else if (res.data.msg === "您已踩过此条评论"){
              this.$message.error("您已踩过此条评论");
          }
          if(res.data.code === 1){
            this.getcomment(this.id);
            this.$message({message: '成功',type: 'success'});
          }
          if(res.data.msg === "用户未登录"){
              this.$message.error("用户未登录");
          }
        })
      },
      getcomment(id){//获取文章评论
        let data = {
          articleId:id
        }
        college.collegeArticleComment(data).then((res)=>{
          this.yiji = res.data.data;
        })
      },
      commentfun(id){//一级提交评论
        let data = {
          articleId:id,
          content:this.answerContent
        }
        if(this.answerContent.trim() === ''){
          this.$message.error('内容不能为空');
        }else{
          college.Comment(data).then((res)=>{
            if(res.data.msg === "用户未登录"){
              this.$message.error('用户未登录');
            }else if(res.data.msg === "成功"){
              this.$message({message: '回复成功',type: 'success'});
              this.getcomment(id);
              this.answerContent = '';
            }
          })
        }

      },
      newtext(){//最新文章
        college.newtext().then((res)=>{
          this.newtexts = res.data.data.records;
        })
      },
      newtextbel(id){//获取当前文章详情的标签
        let params = {
          size:10,
          current:1,
          id
        }
        college.newtext(params).then((res)=>{
          this.textlabel = res.data.data.records[0].articleLabelName;
        })
      },
      textdetails(id){//获取文章详情
        let params = {
          size:10,
          current:1
        }
        let data = {
          id
        }
        college.collegeArticle(params,data).then((res)=>{
          this.textdata = res.data.data.records[0];
        })
      },
      read(){//获取文章阅读排行
        let params = {
          size:10,
          current:1
        }
        college.collegeArticle(params).then((res)=>{
          this.readranking = res.data.data.records;
        })
      },
      relevanttext(id){//获取相关文章
        let params = {
          idsList:id
        }
        college.relevanttext(params).then((res)=>{
          this.relevant = res.data.data;
        })
      },
      picture(id){//获取相关图集
        let params = {
          labelIds:id
        }
        college.picture(params).then((res)=>{
          this.atlas = res.data.data;
        })
      },
    },
    computed:{
      san(){//展示前三条
        return (list)=> list.slice(0,3)
      },
      si(){//展示前四条
        return (list)=> list.slice(0,4)
      },
      liu(){//展示前六条
        return (list)=> list.slice(0,6)
      },
    },
  };
</script>

<style src="@/assets/css/pc/college/text.scss" lang="scss" scoped></style>

