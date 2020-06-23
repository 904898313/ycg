<template>
  <div class="bigbox">
        <pcNavBar   navActivate='足球资料' navDown='足球图集'></pcNavBar>
        <!-- 面包屑 -->
        <div class="header">
            <span><img src="" alt="">帮众体育<img src="@/assets/images/footballdata/next_i@2x.png" alt=""></span>
            <span>萨拉赫图集<img src="@/assets/images/footballdata/next_i@2x.png" alt=""></span>
            <span>萨拉赫</span>
        </div>
        <!-- 图集详情 -->
        <div class="center">
            <div class="details">
                <div class="tit">
                    <p>萨拉赫图集 - 萨拉赫</p>
                </div>
                <div class="content">
                    <header>
                        <p>作者：帮众体育</p>
                        <p><img src="@/assets/images/footballdata/time_i@2x.png" alt=""> 2020-01-21 18:01:25</p>
                        <p><img src="@/assets/images/footballdata/browse_i@2x.png" alt=""> 160</p>
                        <p>支持键盘翻页 ←左 右→</p>
                        <p><img src="@/assets/images/footballdata/xz@2x.png" alt=""> 下载当前图片 </p>
                    </header>
                    <div class="atlas">
                        <!-- 上一张 -->
                        <div class="left"></div>
                        <!-- 下一张 -->                        
                        <div class="right"></div>
                        <!-- 当前图片展示 -->
                        <div class="imgbox">
                            <img src="" alt="" class="img">
                            <div class="num"> <span> 5 </span>  / 12</div>
                        </div>
                        <!-- 图集列表导航 -->
                        <div class="list">
                            <div class="nav"></div>
                            <div class="go"></div>
                            <div class="images" v-for="index in 4" :key="index">
                                <img src="" alt="">
                            </div>
                            <div class="go"></div>
                            <div class="nav"></div>
                        </div>
                        <!-- 图集介绍 -->
                        <div class="introduce">
                            <div class="text">
                                <p>萨拉赫当选2017年度非洲足球先生</p>
                                <p>关键字 <span>利物浦</span></p>
                            </div>
                            <div class="zan">
                                <img src="@/assets/images/footballdata/21@2x.png" alt="">
                                <span>13</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 大家都在看 -->
            <div class="see">
                <p class="tit">大家都在看</p>
                <div class="sees">
                    <div class="sees_content" v-for="index in 10" :key="index">
                        <img src="" alt="" class="imgs">
                        <p>黑贝破门奥巴梅杨失单刀</p>
                    </div>
                </div>
            </div>
        </div>
        <pcFooter></pcFooter>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    created() {

    },
    mounted(){

    },
    methods: {

    }
  };
</script>
<style src="@/assets/css/pc/footballdata/atlas/atlas-details.scss" lang="scss" scoped></style>
