<template>
  <div class="bigbox">
      <ph-nav-bar nav-activate="赛事一览"></ph-nav-bar>
      <div class="head-box">
          快速查询
      </div>
      <!-- 快速查询 -->
      <div class="nav1">
          <div class="one" @click="one">
              <span>各州赛事<img src="@/assets/images/footballdata/under@2x.png" alt=""></span>
              <ul v-show="onebool">
                  <li>英超</li>
                  <li>英超</li>
                  <li>英超</li>
              </ul>
          </div>
          <div class="two" @click="two">
              <span>各国赛事<img src="@/assets/images/footballdata/under@2x.png" alt=""></span>
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
        <header><span>热门赛事</span></header>
        <!-- 遍历内容区 -->
        <div class="nav">
            <div 
                class="big"
                v-for="(v,i) in list"  
                :key="i"
                v-show="i<show"
            >
                <div class="small" @click="godetails" >
                    <div class="imgbox">   
                        <img src="" alt="">
                    </div>
                    <p class="text">曼彻斯特城</p>
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
          <p>积分榜</p>
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
      <div class="head list1">
          <p>排名</p>
          <p>球员</p>
          <p class="flex">场次</p>
          <p class="flex">胜</p>
          <p class="flex">平</p>
          <p class="flex">负</p>
          <p class="flex">积分</p>
      </div>
      <div class="body list1" v-for="(v,i) in 8" :key="i">
          <p ref="tit">{{i+1}}</p>
          <p><img src="" alt=""><span>曼彻斯特城</span></p>
          <p class="flex">16</p>
          <p class="flex">16</p>
          <p class="flex">16</p>
          <p class="flex">16</p>
          <p class="flex">16</p>
      </div>

  </div>
</template>

<script>
  export default {  
    data() {
      return {
          list:20,
          show:16,
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
          contents:5,
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
            this.$router.push('ph-teamdata')
        }
    }
  };
</script>
// 公用一套
<style src="@/assets/css/ph/footballdata/teamdata/home.scss" lang="scss" scoped></style>
