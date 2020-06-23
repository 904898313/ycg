<template>
  <div class="bigbox">
      <ph-nav-bar nav-activate="问答专栏"></ph-nav-bar>
      <div class="content">
          <div class="h5-header">
              <div class="total"> <img src="@/assets/images/questions/q_i@2x.png" alt="" class="header-img"> 共有{{Questions.length}}个问答</div>
              <div @click="h5headerfun(1)" :class="[h5header!=1?'':'selectiondiv']"><span></span>热门问答</div>
              <div @click="h5headerfun(2)" :class="[h5header!=2?'':'selectiondiv']"><span></span>等待回答</div>
          </div>
          <div class="content-bigbox">
            <div class="left-box">
                <ul class="list">
                    <li 
                    v-for="(k,i) in listone" 
                    :key="'a'+i" 
                    @click="selectionone(i)" 
                    :class="[selectiononenum===i?'selection':'']"
                    >
                        <p>
                            <span>{{k.text}}</span> 
                        </p>
                    </li>
                    <li 
                    v-for="(k,i) in list" 
                    :key="i" 
                    @click="selection(i,k)" 
                    :class="[selection_list===i?'selection':'']"
                    >
                        <p>
                            <span>{{k.classifyName}}</span> 
                        </p>
                    </li>
                </ul>
            </div>
            <div class="center-box">
                <div class="paging-content-box">
                    <div class="div1" @click="godetails(k)" v-for="(k,i) in Questions" :key="i">
                        <div class="img-box">
                            <img src="@/assets/images/questions/q_i@2x.png" alt="">
                        </div>
                        <div class="text-box">
                            <p class="p1" v-text="k.details"></p>
                            <p class="p3"><img src="@/assets/images/questions/_i2@2x.png" alt=""> 赛事交流 <span class="dian">·</span> <span class="num1"> 8 </span> <span class="text"> 评论 </span> <span class="dian">·</span> <span class="num2"> 3 </span> <span class="text"> 浏览</span><span class="dian">·</span><span> 2019-12-31 </span> </p>
                            <!-- h5-p3 ↓ -->
                            <p class="h5-p3"><span :class="'a'+k.classifyId" v-text="'#'+k.classifyName"></span><span class="span2" v-text="k.createTime.slice(0,10)"></span><span class="span3">有<span v-text="k.answers"></span>个回答</span></p>
                        </div>
                    </div>
                    <div class="nothing" v-if="Questions.length===0">
                        暂无问答
                    </div>
                </div>

            </div>
          </div>

        <!-- h5提问 -->
        <div class="ask" @click="go">
            提问
        </div>


      </div>
  </div>
</template>

<script>
  import * as questions from "@/api/questions";
  export default {
    data() {
      return {
          list:[],
          listone:[
              {
                  text:"全部回答"
              }
          ],
          selection_list:1000,
          selectiononenum:0,
          title:1,
          h5header:1,
          Questions:[],
          problem:[
              1,2,3
          ],
          txtVal: 0,
          desc:"",

      };
    },
    created() {
        //获取栏目列表
        this.gitlist();
        //获取全部回答
        this.alllist()
    },
    methods: {

        h5headerfun(k){
            this.h5header = k;
        },
        descInput(){
            this.txtVal = this.desc.length;
        },
        questionsfun(){
            this.$refs.pcEjectbigbox.style.display = "block";
        },
        deletefun(){
            this.$refs.pcEjectbigbox.style.display = "none";
        },
        //跳转提问
        go(){
            this.$router.push('ph-submission')
        },
        //跳转问题详情
        godetails(v){
            this.$router.push({
                path:'ph-questions-details',
                name:'ph-questions-details',
                query:{  //需要携带的参数
                    id:v.questionId,
                    title:v.title,
                    details:v.details,
                    answers:v.answers,
                    classifyName:v.classifyName,
                    createTime:v.createTime.slice(0,10),
                    classifyId:v.classifyId
                }
            })
        },
        //分类回答
        selection(i,k){
            this.selection_list = i;
            this.selectiononenum = 1;
            //掉获取数据接口
            this.classlist(k.classifyId);
        },
        //全部回答
        selectionone(k){
            this.selectiononenum = k;
            this.selection_list = 1000;
            this.alllist()
        },

        
        //接口
        //获取全部回答
        alllist(){
            questions.questionsList().then((res)=>{
                this.Questions = res.data.data;
            })
        },
        //获取该类回答
        classlist(classifyId){
            let params = {
                classifyId:classifyId
            }
            questions.gitclass(params).then((res)=>{
                this.Questions = res.data.data;
            })
        },

        //获取栏目列表
        gitlist(){
            questions.getrecordsList().then((res)=>{
                this.list = res.data.data;
            })
        }
    }

  };
</script>

<style src="@/assets/css/ph/questions/questions.scss" lang="scss" scoped></style>


