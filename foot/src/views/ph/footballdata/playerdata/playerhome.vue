<template>
  <div class="bigbox">
      <ph-nav-bar nav-activate="球员一览"></ph-nav-bar>
      <div class="head-box">
          快速查询
      </div>
      <!-- 快速查询 -->
      <div class="nav1">
          <div class="one" @click="one">
              <span>选择联赛<img src="@/assets/images/footballdata/under@2x.png" alt=""></span>
              <ul v-show="onebool">
                  <li>英超</li>
                  <li>英超</li>
                  <li>英超</li>
              </ul>
          </div>
          <div class="two" @click="two">
              <span>选择球队<img src="@/assets/images/footballdata/under@2x.png" alt=""></span>
              <ul v-show="twobool">
                  <li>英超</li>
                  <li>英超</li>
                  <li>英超</li>
              </ul>
          </div>
          <div class="san" @click="san">
              <span>选择球员<img src="@/assets/images/footballdata/under@2x.png" alt=""></span>
              <ul v-show="sanbool">
                  <li>英超</li>
                  <li>英超</li>
                  <li>英超</li>
              </ul>
          </div>
          <p>查询</p>
      </div>
      <!-- bg -->
      <div class="bg"></div>
      <!-- 热门球星/球队 -->
      <div class="content-bigbox">
        <header><span>热门球星</span></header>
        <!-- 遍历内容区 -->
        <div class="nav">
            <div 
                class="big"
                v-for="(v,i) in list"  
                :key="i"
                v-show="i<show"
            >
                <div class="small" @click="godetails">
                    <div class="imgbox">   
                        <img src="" alt="">
                    </div>
                    <p class="text">罗纳尔多</p>
                </div>
            </div>
        </div>
        <!-- 查看更多 -->
        <div class="all" ref="all">
            <span @click="showfun">查看更多</span><img src="" alt="">
        </div>
      </div>
      <!-- bg -->
      <div class="bg"></div>
      <!-- 积分 -->
      <div class="integral">
          <div @click="integral(1)" :class="integralnum===1?'select':''">积分榜</div>
          <div @click="integral(2)" :class="integralnum===2?'select':''">助攻榜</div>
      </div>
      <div class="clas">
          <p 
            v-for="(v,i) in clas" 
            :key="i"
            @click="clasfun(i)"
            :class="clasnum===i?'select':''"
          >
            {{v.text}}
          </p>
      </div>
      <div class="head list">
          <p>排名</p>
          <p>球员</p>
          <p>球队</p>
          <p>进球</p>
      </div>
      <div class="body list" v-for="(v,i) in tit" :key="i">
          <p ref="tit">{{i+1}}</p>
          <p><img src="" alt=""><span>塞尔吉奥·阿吉尔</span></p>
          <p><img src="" alt=""><span>曼彻斯特城</span></p>
          <p>16</p>
      </div>
      <div class="bg"></div>
      <!-- 攻击力 -->
      <div class="details" v-for="(v,i) in claslist" :key="'a'+i">
          <div class="header">
              <span>{{v.text}}</span><img :src="v.img" alt="">
          </div>
          <div class="contents" v-for="(v,i) in contents" :key="i">
              <p>埃尔森·哈兰德</p>
              <p>1.13球/场</p>
          </div>
          <div class="bg"></div>
      </div>
  </div>
</template>

<script>
  export default {  
    data() {
      return {
          list:20,
          show:16,
          integralnum:1,
          clas:[
              {
                  text:'英超'
              },
              {
                  text:'西甲'
              },
              {
                  text:'意甲'
              },
              {
                  text:'法甲'
              },
              {
                  text:'德甲'
              },
          ],
          clasnum:0,
          tit:8,
          contents:5,
          claslist:[
              {
                  text:'攻击力',
                  img:require('@/assets/images/footballdata/gjl@2x.png')
              },
              {
                  text:'出场时间',
                  img:require('@/assets/images/footballdata/hh_i@2x (1).png')
              },
              {
                  text:'红黄牌' ,
                  img:require('@/assets/images/footballdata/hh_i@2x (1).png')
              },
          ],
          onebool:false,
          twobool:false,
          sanbool:false,
      };
    },
    created() {

    },
    mounted(){
        var tit = this.$refs.tit;
        tit[0].style.color = "#f55e53";
        tit[1].style.color = "#f4a125";
        tit[2].style.color = "#66bc68";
    },
    methods: {
        showfun(){
            this.show = this.list;
            this.$refs.all.style.display = "none";
        },
        integral(i){
            this.integralnum = i;
        },
        clasfun(i){
            this.clasnum = i;
        },
        one(){
            this.onebool = !this.onebool
        },
        two(){
            this.twobool = !this.twobool
        },
        san(){
            this.sanbool = !this.sanbool
        },
        godetails(){
            this.$router.push('ph-playerdata')
        }
    }
  };
</script>
// 公用一套
<style src="@/assets/css/ph/footballdata/teamdata/home.scss" lang="scss" scoped></style>
