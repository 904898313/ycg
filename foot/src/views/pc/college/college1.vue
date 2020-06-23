<template>
  <div class="bigbox">
    <pcNavBar navActivate='彩经学院'></pcNavBar>
    <div class="list">
      <div class="list-head">
        <i class="el-icon-s-home"></i>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">帮众体育</el-breadcrumb-item>
          <el-breadcrumb-item>彩经学院</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="title_big">
      <div class="title">
        <div class="imgbox">
          <img src alt />
          <p>菲尔米诺什么水平？菲尔米诺为什么叫玉面郎君？</p>
        </div>
        <aside>
          <img src alt v-for="index in 3" :key="index" />
        </aside>
      </div>
    </div>
    <div class="content_big">
      <div class="content">
        <div class="title">
          <div class="bg"></div>
          <div class="head">
            <p
              v-for="(item,index) in list"
              :key="index"
              @click="listfun(index)"
              :class="listnum === index? 'select':''"
            >{{item}}</p>
          </div>
          <div class="nav">
            <div class="list1">
              <p
                @click="navfun(-1,null)"
                :class="navnum === -1 ? 'selectp':''"
              >
                <span></span>
                全部教程
              </p>
              <p
                v-for="(item,index) in navlist"
                :key="index"
                @click="navfun(index,item.id)"
                :class="navnum === index ? 'selectp':''"
              >
                <span></span>
                {{item.name}}
              </p>
            </div>
            <div class="list2">
              <p @click="classs()">
                <span class="cent">
                  {{classstext}}
                  <img src="@/assets/images/college/arrow_down@2x.png" alt />
                </span>
                <ul v-show="classsnum">
                  <li @click.stop="classs('文章类型')">文章类型</li>
                  <li @click.stop="classs('视频类型')">视频类型</li>
                </ul>
              </p>
              <p>
                <span class="cent" @click="time">
                  时间{{timetext}}序
                  <img src="@/assets/images/college/paixu@2x.png" alt />
                </span>
              </p>
            </div>
            <div class="list3">
              <input type="text" placeholder="想学什么？" v-model="querys" @keyup.enter="queryArticle"/>
              <img src="@/assets/images/college/search@2x.png" alt class="icon" @click="queryArticle"/>
            </div>
          </div>
        </div>
        <!-- 文章 -->
        <div class="contents" v-if="classstext === '文章类型'">
          <div class="big" v-for="(v,i) in conentlist" :key="i">
            <div class="small">
              <div class="imgbox" @click="textgo(v)">
                <img :src="v.articlePic" alt />
                <div class="label">
                  <div>欧赔思维</div>
                  <div>{{v.difficult==='0'?'新手小白':v.difficult==='1'?'初窥门径':'高手进阶'}}</div>
                </div>
              </div>
              <div class="text">
                <p v-text="v.articleTitle"></p>
                <p>
                  <span v-text="v.createTime"></span>
                  <span>
                    <img src="@/assets/images/college/browse_i@2x.png" alt />{{v.browse}}
                  </span>
                  <span>
                    <img src="@/assets/images/college/comment_i@2x.png" alt />{{v.comment}}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- 视频 -->
        <div class="contents" v-else>
          <div class="big" v-for="(v,i) in conentlist" :key="i">
            <div class="small">
              <div class="imgbox" @click="videogo(v)">
                <img :src="v.videoPic" alt />
                <div class="label">
                  <div>欧赔思维</div>
                  <div>{{v.difficult==='0'?'新手小白':v.difficult==='1'?'初窥门径':'高手进阶'}}</div>
                  <div class="time" v-text="v.time"></div>
                </div>
                <div class="play"><img src="@/assets/images/college/play2_i5@3x.png" alt=""></div>
              </div>
              <div class="text">
                <p v-text="v.videoTitle"></p>
                <p>
                  <span v-text="v.time"></span>
                  <span>
                    <img src="@/assets/images/college/browse_i@2x.png" alt />{{v.browse}}
                  </span>
                  <span>
                    <img src="@/assets/images/college/comment_i@2x.png" alt />{{v.comment}}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bottom">
          <span></span>
          <p>{{conentlist.length===0?"暂无数据":'已加载完全部内容，我是有底线的'}}</p>
          <span></span>
        </div>
      </div>
    </div>
    <pcFooter></pcFooter>
  </div>
</template>

<script>
import * as college from "@/api/college";
export default {
  data() {
    return {
      list: ["全部教程", "免费课程", "付费课程"],
      listnum: 0,
      navlist: [],
      navnum: -1,
      isFree:null,//是否付费
      classifyId:null,//分类id
      conentlist:[],
      timetext:'正',
      classsnum:false,
      classstext:'文章类型',
      querys:'',//模糊查询绑定变量
    };
  },
  created() {
    // this.getList();
    //彩经学院文章
    this.collegeArticle();
    //彩经学院分类列表
    this.collegeSplendid();
  },
  watch:{
    //监听是否免费
    isFree(news,lod){
      if(this.classstext === '视频类型'){
        this.collegeVideoall(this.isFree,this.classifyId);
      }else if(this.classstext === '文章类型'){
        this.collegeArticle(this.isFree,this.classifyId);
      }
    },
    //监听栏目分类
    classifyId(news,lod){
      if(this.classstext === '视频类型'){
        this.collegeVideoall(this.isFree,this.classifyId);
      }else if(this.classstext === '文章类型'){
        this.collegeArticle(this.isFree,this.classifyId);
      }
    },
    //监听类型(文章类型/视频类型)
    classstext(news,lod){
      if(news === '文章类型'){
        this.collegeArticle(this.isFree,this.classifyId);
      }else if(news === '视频类型'){
        this.collegeVideoall(this.isFree,this.classifyId);
      }
    }
  },
  methods: {
    listfun(index) {//判断文章是否免费/收费
      this.listnum = index;
      if(index ===1){
        this.isFree = 1;
      }else if (index ===2){
        this.isFree = 0;
      }else if(index === 0){
        this.isFree = null;
      }
    },
    navfun(index,id) {//判断文章类型
      this.navnum = index;
      this.classifyId = id;
    },
    classs(text){
      this.classsnum =! this.classsnum;
      if(text){
        this.classstext = text;
      }
    },
    time(){//正逆序
      if(this.timetext === '正'){
        this.timetext = '逆';
        if(this.classstext === '文章类型'){
          this.reverseArticle();//文章逆序
        }else if (this.classstext === '视频类型'){
          this.reverseVideo();//视频逆序
        }
      }else if(this.timetext === '逆'){
        this.timetext = '正';
        if(this.classstext === '文章类型'){
          this.ForwardArticle();//文章正序
        }else if(this.classstext === '视频类型'){
          this.ForwardVideo();//视频正序
        }
        
      }
    },
    //接口
    //彩经学院文章标签(get)
    getList(){
      let params = {
        labelType:2
      }
      college.getList(params).then((res)=>{
        console.log(res)
      })
    },
    //彩经学院文章
    collegeArticle(isFree,ID){
      let params = {
        size:10,
        current:1
      }
      let data = {
        kind:isFree,
        classifyId:ID,
      }
      college.collegeArticle(params,data).then((res)=>{
        this.conentlist = res.data.data.records;
      })
    },
    //彩经学院视频
    collegeVideoall(isFree,ID){
      let params = {
        size:10,
        current:1
      }
      let data = {
        isFree:isFree,
        classifyId:ID,
      }
      college.collegeVideoall(params,data).then((res)=>{
        this.conentlist = res.data.data.records;
      })
    },
    //彩经学院分类列表
    collegeSplendid(){
      let params = {
        size:10,
        current:1
      }
      college.collegeSplendid(params).then((res)=>{
        this.navlist = res.data.data.records;
      })
    },
    //彩经学院文章与视频模糊查询
    queryArticle(){
      let params = {
        size:10,
        current:1
      }
        if(this.classstext === '文章类型'){
          let data = {
            articleTitle:this.querys
          }
          college.queryArticle(params,data).then((res)=>{
            if(res.data.code === 1){
              this.querys = "";
              this.conentlist = res.data.data.records;
            }
          })
        }else if (this.classstext === '视频类型'){
          let data = {
            videoTitle:this.querys
          }
          college.queryVideo(params,data).then((res)=>{
            if(res.data.code === 1){
              this.querys = "";
              this.conentlist = res.data.data.records;
            }
          })
        }
    },
    //文章逆序
    reverseArticle(){
      let params = {
        size:10,
        current:1
      }
      college.reverseArticle().then((res)=>{
        this.conentlist = res.data.data.records;
      })
    },
    //文章正序
    ForwardArticle(){
      let params = {
        size:10,
        current:1,
      }
      college.ForwardArticle(params).then((res)=>{
        this.conentlist = res.data.data.records;
      })
    },
    //视频逆序
    reverseVideo(){
      let params = {
        size:10,
        current:1
      }
      college.reverseVideo(params).then((res)=>{
        this.conentlist = res.data.data.records;
      })
    },
    //视频正序
    ForwardVideo(){
      let params = {
        size:10,
        current:1
      }
      college.ForwardVideo(params).then((res)=>{
        this.conentlist = res.data.data.records;
      })
    },
    //跳转
    videogo(v) {
      this.$router.push({
        path:"pc-video",
        query:{
          id:v.id,//id
        }
      });
    },
    textgo(v) {
      this.$router.push({
        path:"pc-text",
        query:{
            id:v.id,//id
            articleLabel:v.articleLabel,//标签id
          }
        });
    }
  }
};
</script>

<style src="@/assets/css/pc/college/college1.scss" lang="scss" scoped></style>
