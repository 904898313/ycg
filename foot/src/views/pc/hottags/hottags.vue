<template>
    <div class="bigbox">
        <pcNavBar navActivate=''></pcNavBar>
        <div class="list">
            <div class="list-head">
                <i class="el-icon-s-home"></i>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">帮众体育</el-breadcrumb-item>
                <el-breadcrumb-item>热门标签</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <div class="bigcontent">
            <div class="content">
                <div class="left">
                    <div class="head">
                        <div class="text">
                            英超
                        </div>
                        <div class="nav">
                            <div class="navs" @click="navfun('texts')" :class="nav==='texts'?'select':''">文章</div>
                            <div class="navs" @click="navfun('videos')" :class="nav==='videos'?'select':''">视频</div>
                            <div class="navs" @click="navfun('atlas')" :class="nav==='atlas'?'select':''">图集</div>
                        </div>
                    </div>
                    <component :is="variable"></component>
                </div>
                <div class="right">
                    <!-- 热门文章 -->
                    <div class="hottext" v-if="nav==='texts'">
                        <header>
                            <div class="textbox">热门文章</div>
                        </header>
                        <div class="listbox">
                            <div class="module" v-for="index in 6" :key="index">
                                <div class="imgbox"><img src="" alt=""></div>
                                <div class="textbox">
                                    <p class="tit">新赛季NBA买谁赢钱？ NBA常规赛MVP带...</p>
                                    <p class="time">
                                        <span>2019-10-28</span>
                                        <span><img src="@/assets/images/college/browse_i@2x.png" alt="">14</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 热门图集 -->
                    <div class="atlas" v-if="nav==='atlas'">
                        <header><div class="textbox">热门图集</div></header>
                        <div class="big">
                            <div class="atlass">
                                <img src="" alt="" class="img">
                                <div class="bottom">
                                    <div>哈雷车U19</div>
                                    <div><img src="@/assets/images/college/tu-icon@2x.png" alt="">15张</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 热门视频 -->
                    <div class="hottext video" v-if="nav==='videos'">
                        <header>
                            <div class="textbox">热门视频</div>
                        </header>
                        <div class="listbox">
                            <div class="module" v-for="index in 6" :key="index">
                                <div class="imgbox">
                                    <img src="" alt="" class="bg">
                                    <div class="play"><img src="@/assets/images/college/bofang-icon@2x.png" alt=""><span>4:30</span></div>
                                </div>
                                <div class="textbox">
                                    <p class="tit">新赛季NBA买谁赢钱？ NBA常规赛MVP带...</p>
                                    <p class="time">
                                        <span>2019-10-28</span>
                                        <span><img src="@/assets/images/college/browse_i@2x.png" alt="">14</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 热门标签 -->
                    <div class="label">
                        <header><div class="textbox">热门标签</div></header>
                        <div class="big">
                            <div class="labels" v-for="index in 10" :key="index">
                                英超集锦
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            nav:'texts',
            variable:'texts'
        }
    },
    methods:{
        navfun(i){
            this.nav = i;
            this.variable = i;
        }
    },
    components:{
        texts:()=>import('./text.vue'),
        videos:()=>import('./video.vue'),
        atlas:()=>import('./atlas.vue'),
    }
}
</script>
<style scoped lang="scss" src="@/assets/css/pc/hottags/hottags.scss"></style>

