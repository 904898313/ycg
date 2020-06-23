<template>
  <div class="bigbox">
    <pcNavBar  navActivate='问答专栏'></pcNavBar>
      <header>
          <img src="" alt="">
          <span>帮众体育 > </span>
          <span class="current">体育问答</span>
      </header>
      <div class="content">
          <!-- 左 -->
        <div class="left-box">
            <ul class="list">
                <li v-for="(k,i) in list" :key="'b'+i" @click="selection(k,k.questionId)" :class="[selection_list!=k.text?'':'selection']">
                    <p>
                        <img :src="selection_list!= k.text ? k.img:k.imgs" alt=""> 
                        <span>{{k.text}}</span> 
                    </p>
                </li>
            </ul>
        </div>
        <!-- 中 -->
        <div class="center-box">
            <!-- ask提问 -->
            <div class="ask">
                <input type="text" placeholder="搜索你感兴趣的问题...">
                <div class="askbtn" @click="propose()">我要提问</div>
                <img src="@/assets/images/questions/search@2x.png" alt="">
            </div>
            <div class="null" v-show="contentlist.length===0">
                暂无回答
            </div>
            <!-- 循环 -->
            <div class="questions" v-for="(v,i) in contentlist" :key="'c'+i" v-if="i<nums">
                <div class="questions-header">
                    <div v-for="(y,u) in arr(v.remarkName)" :key="u">{{y}}</div>
                </div>
                <p class="questions-title" @click="go(v)"><img src="@/assets/images/questions/q_i@2x.png" alt="">{{v.title}}</p>
                <p class="questions-author"><img :src="v.avatar" alt="">{{v.userName}}</p>
                <div class="questions-text" >
                    <span class="text" ref="textall1" v-if="v.remark===null">{{v.details.substring(0,90)}}</span>  
                    <span class="text" ref="textall" v-else>{{v.details}}</span>
                    <span class="all" @click="all(i)" ref="all" v-show="v.details.length>90">[查看全文]</span>
                </div>
                
                <p class="time">
                    <span>
                        <span>{{v.answers}}人回答<span class="d">·</span></span>
                        <span>{{v.standby3?v.standby3:'0'}}人浏览<span class="d">·</span></span>
                        <span>所属栏目：{{v.classifyName}}</span>
                    </span>
                    <span>
                        发布时间: {{v.createTime}}
                    </span>
                </p>
            </div>
            <div class="more" v-show="nums<contentlist.length && contentlist.length!=0" >
                <div class="solidbox"></div>
                <div>下拉加载跟多</div>
                <div class="solidbox"></div>
            </div>
            <div class="more" v-show="nums>=contentlist.length && contentlist.length!=0" >
                <div class="solidbox"></div>
                <div>暂无更多</div>
                <div class="solidbox"></div>
            </div>

        </div>
        <!-- 右 -->
        <div class="right-box">
            <div class="recommend">
                <header>
                    <span>推荐问答</span>
                </header>
                <!-- content容器 -->
                <div class="problem">
                    <!-- content循环内容 -->
                    <div class="problem-content" v-for="(v,i) in rightlist" :key="'l'+i" v-if="i<4" @click="go(v)">
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
            <!-- 隔层 -->
            <div class="bgbox"></div>
            <!-- 热门标签 -->
            <!-- <div class="label">  css也注释了
                <header>
                    <span>热门标签</span>
                </header>
                <div class="label-content">
                    <div v-for="(v,i) in labellist" :key="'m'+i" @click="labelfun(i)" :class="[labelnum===i?'yes':'']">{{v.name}}</div>
                </div>
            </div> -->
        </div>
      </div>
        <!-- pc提问弹出框 -->
        <div class="pcEject-bigbox" ref="propose">
            <!-- 遮罩层↑ -->
            <div class="pcEject">
                <div class="title">说出你的疑惑</div>
                <div class="pcEject-text">
                    <div class="pcEject-text-box">
                        <div class="pcEject-content-box">
                            <p>标题</p>
                            <input type="text" v-model="tit" placeholder="请输入标题(30个字内)" autofocus>
                        </div>
                        <div class="pcEject-content-box">
                            <p>内容</p>
                            <textarea  cols="2"  @input="descInput" v-model="desc" placeholder="请输入内容，方便您更好的描述问题..."  rows="6" maxlength="200"  class="pcEject-content-text"></textarea>

                            <span class="numberV">{{txtVal}}/200</span>
                        </div>
                        <div class="pcEject-content-box">
                            <p>栏目选择</p>
                            <div class="fenclass">
                                <div class="fenclass-box" v-for="(item,index) in fenclasslist" :key="'h'+index" @click="fenclassfun(item.classifyId)"  :class="fenclasstext===item.classifyId?'selection1':'fenclass-box'">{{item.classifyName}}</div>
                            </div>
                            <p>标签选择</p>
                            <div class="fenclass">
                                <div class="fenclass-box" 
                                    v-for="(item,index) in labellist" 
                                    :key="index" 
                                    @click="labelfun(item.id)"  
                                    :class="labelid.includes(item.id)?'selection1':'fenclass-box'"
                                >{{item.name}}</div>
                            </div>
                        </div>
                        <div class="bigSub">
                            <div class="Sub" @click="Submit()">提交</div>
                        </div>

                    </div>
                </div>
                <div class="deletebox" @click="deletefun">
                    ×
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
          list:[
              {
                  text:"全部回答",
                  img:require('@/assets/images/questions/all_i2@2x.png'),
                  imgs:require('@/assets/images/questions/all_i@2x.png'),
                  questionId:null
              },
              {
                  text:"足球小白",
                  img:require('@/assets/images/questions/zqxb_i@2x.png'),
                  imgs:require('@/assets/images/questions/zqxb_i2@2x.png'),
                  questionId:"1250010504755695617"
             },
              {
                  text:"赛事交流",
                  img:require('@/assets/images/questions/ssjl_i@2x.png'),
                  imgs:require('@/assets/images/questions/ssjl_i2@2x.png'),
                  questionId:"1250010626168213505"
             },
              {
                  text:"欧亚揭秘",
                  img:require('@/assets/images/questions/oyjm_i@2x.png'),
                  imgs:require('@/assets/images/questions/oyjm_i2@2x.png'),
                  questionId:"1250010677930119170"
             },
              {
                  text:"大小博弈",
                  img:require('@/assets/images/questions/dxby_i@2x.png'),
                  imgs:require('@/assets/images/questions/dxby_i2@2x.png'),
                  questionId:"1250010721622183938"
             },
              {
                  text:"滚球妙招",
                  img:require('@/assets/images/questions/gqmz_i@2x.png'),
                  imgs:require('@/assets/images/questions/gqmz_i2@2x.png'),
                  questionId:"1250010763871408129"
             },
              {
                  text:"球队球员",
                  img:require('@/assets/images/questions/qdqy_i@2x.png'),
                  imgs:require('@/assets/images/questions/qdqy_i2@2x.png'),
                  questionId:"1250010782854828033"
             },
              {
                  text:"其他问答",
                  img:require('@/assets/images/questions/qtwd_i@2x.png'),
                  imgs:require('@/assets/images/questions/qtwd_i2@2x.png'),
                  questionId:"1250010813473247234"
             },
          ],
          fenclasslist:[],
          fenclasstext:null,
          selection_list:"全部回答",
          txtVal: 0,
          desc:"",
          tit:'',
         contentlist:[],
         rightlist:[],
        //  热门标签
         labellist:[],
         labelnum:-1,
         labelid:[],
         v:null,
         nums:10,
      };
    },
    created() {
        this.getList();
        this.questions();
        //推荐问答
        this.recommendQuestion();
        //问答标签列表
        this.labellistfun();
        
    },
    mounted(){
        // 监听滚动条到底部
        window.addEventListener('scroll', this.lazyLoading);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.lazyLoading);
    },
    methods: {
        lazyLoading () { // 滚动到底部，再加载的处理事件
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          let clientHeight = document.documentElement.clientHeight;
          let scrollHeight = document.documentElement.scrollHeight;
          if (scrollTop + clientHeight + 10 >= scrollHeight) { // 如果滚动到接近底部，自动加载下一页
            this.nums = this.nums + 6;
            }
        },

        selection(k,selection){
            this.selection_list = k.text;
            this.gitclass(selection);
        },

        descInput(){
            this.txtVal = this.desc.length;
        },
        
        fenclassfun(k){
            this.fenclasstext = k;
        },

        deletefun(){
            this.$refs.propose.style.display = "none";
        },

        labelfun(id){
            if(this.labelid.includes(id) === false){
                this.labelid.push(id);
            }else {
                this.labelid.splice(this.labelid.indexOf(id), 1);
            }
            console.log(this.labelid)
        },

        // 查看全部
        all(i){
            if(this.$refs.all[i].innerHTML === "[查看全文]"){
                var all = this.$refs.all;
                all[i].innerHTML = "[收起]";
                this.$set(this.contentlist,remark,1)
                console.log(this.contentlist[i]);
            }else{
                var all = this.$refs.all;
                all[i].innerHTML = "[查看全文]";
                this.$set(this.contentlist,remark,null)                
                console.log(this.contentlist[i]);
                
            }
            
        },

        //提问弹框
        propose(){
            this.$refs.propose.style.display = 'block';
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

        //提交问题
        Submit(){
            if(this.fenclasstext === null){
                this.$message.error('请选择栏目');
            }else if(this.desc.trim() === ''){
                this.$message.error('请输入内容');
            }else if(this.tit.trim() === ''){
                this.$message.error('请输入标题');
            }else if(this.labelid === null){
                this.$message.error('请选择标签');
            }else{
                let datas = {
                    classifyId:this.fenclasstext,
                    details:this.desc,
                    title:this.tit,
                    questionLabels:this.labelid
                }
                questions.question(datas).then((res)=>{
                    this.$message({
                        message: '提问成功',
                        type: 'success'
                    });
                    this.desc = '';
                    this.tit = '';
                    this.labelid = [];
                    this.fenclasstext = null;
                }).catch(()=>{
                    // this.$message.error('提交失败,请稍后重试');
                })
            }
        },

        // 数据接口
        // 栏目列表
        getList() {
            questions.getrecordsList().then((res)=>{
                this.fenclasslist = res.data.data;
                console.log(res)
            })
        },

        questionsdetails(questionId) {
            let params = {
                questionId: questionId
            };
            questions.questionsdetails(params).then((res)=>{
                this.yiji = res.data.data;
            })
        },

        questions(){
            questions.questionsList().then((res)=>{
                this.contentlist = res.data.data;
                console.log(this.contentlist)
                this.nums = 10;
            })
        },

        //分类获取
        gitclass(classifyId) {
            let params = {
                classifyId:classifyId
            }
            if(classifyId){
                questions.gitclass(params).then((res)=>{
                    this.contentlist = res.data.data;
                    this.nums = 10;
                    console.log(res)
                })
            }else{
                this.questions();
            }
        },

        //推荐问答
        recommendQuestion(){
            questions.recommendQuestion().then((res)=>{
                this.rightlist = res.data.data;
            })
        },
        //问答标签列表
        labellistfun(){
            let params = {
                labelType:1
            }
            questions.labellist(params).then((res)=>{
                this.labellist = res.data.data;
                console.log(this.labellist)
            })
        }
    },
    computed:{
        arr:function(){
            return (list)=>{
                if(list){
                    return list.split(",");
                }
            }
        }
    }

  };
</script>

<style src="@/assets/css/pc/questions/questions.scss" lang="scss" scoped></style>