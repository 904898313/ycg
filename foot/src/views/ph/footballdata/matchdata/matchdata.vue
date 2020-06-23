<template>
  <div class="bogbox">
      <ph-nav-bar nav-activate="赛事一览"></ph-nav-bar>
      <!-- 赛事导航 -->
      <nav>
          <div class="title">赛事</div>
          <div class="content">
              <div 
                class="contents" 
                v-for="(v,i) in navlist"
                :key="i"
                @click="go"
              >
                <div class="imgbox">
                    <img src="" alt="">
                </div>
                <p>{{v.text}}</p>
              </div>
          </div>
      </nav>
      <!-- 赛区选择 -->
      <div class="zone">
          <div class="qu">
              <p 
                v-for="(v,i) in zhou" 
                :key="i"
              >
                <span
                    @click="zhoufun(i)"
                    :class="zhounum===i?'select':''"
                >{{v}}</span>
              </p>
          </div>
          <div class="cont">
              <div class="tit">
                  <div 
                    v-for="(v,i) in tit" 
                    :key="i"
                    @click="titfun(i)"
                    :class="titnum===i?'tits':''"
                  >
                    {{v}}
                  </div>
              </div>
              <div class="cont">
                  <div class="conts" v-for="i in a" :key="i">
                      <div><img src="" alt=""></div>
                      <p>中国</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          navlist:[
              {
                  text:'英超'
              },
              {
                  text:'西甲'
              },
              {
                  text:'德甲'
              },
              {
                  text:'意甲'
              },
              {
                  text:'法甲'
              },
              {
                  text:'中超'
              },
              {
                  text:'欧冠杯'
              },
              {
                  text:'亚洲杯'
              },
              {
                  text:'日职联'
              },
              {
                  text:'亚冠杯'
              },
              {
                  text:'韩K联'
              },
              {
                  text:'澳洲甲'
              },
          ],
          zhou:['欧洲','美洲','亚洲','大洋洲','非洲','国际'],
          zhounum:0,
          tit:['国家赛事','洲际赛事'],
          titnum:0,
          a:15
      };
    },
    created() {

    },
    methods: {
        zhoufun(i){
            this.zhounum = i;
        },
        titfun(i){
            this.titnum = i;
        },
        go(){
            this.$router.push('/ph-matchdata-region')
        }
    }
  };
</script>

<style src="@/assets/css/ph/footballdata/matchdata/matchdata.scss" lang="scss" scoped></style>
