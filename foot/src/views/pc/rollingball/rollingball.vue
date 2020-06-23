<template>
    <div class="bigbox">
        <pcNavBar navActivate="滚球专栏"></pcNavBar>
        <div class="head">
            <!-- 面包屑 -->
            <header>
                <span><img src="" alt="">帮众体育<img src="@/assets/images/footballdata/next_i@2x.png" alt=""></span>
                <span>滚球专栏</span>
            </header>
            <!-- 筛选 -->
            <div class="screen">
                <div class="left">
                    <span class="txt">时间范围:</span>
                    <!-- 时间 -->
                    <div class="range">
                        <div class="num">0</div>
                        <div class="zi">至</div>
                        <div class="num">120</div>
                    </div>
                    <!-- 半场 -->
                    <div class="HALF">
                        <div class="top">上半场</div>
                        <div>下半场</div>
                    </div>
                    <!-- 最后时间 -->
                    <div class="time">
                        <p>最后15分钟</p>
                        <p><img src="" alt=""></p>
                    </div>
                </div>
                <div class="right">
                    <div class="input">
                        <img src="" alt="">
                        <input type="text" placeholder="搜索你喜欢的比赛...">
                    </div>
                    <div class="hobby">
                        <img src="" alt="">
                        <p>筛选 & 偏好设置</p>
                    </div>
                </div>
            </div>
            <!-- 数据 -->
            <div class="data">
                <div>(8)比分相同</div>
                <div>(5)强队落后</div>
                <div>(2)大分差比赛</div>
                <div>(1)亚盘降盘</div>
                <div>(0)亚盘升盘</div>
                <div>(1)大小球降盘</div>
                <div>(0)大小球升盘</div>
            </div>
            <!-- 比赛选项 -->
            <div class="match">
                <div class="heads">
                    <div class="time">
                        <img src="" alt="">
                        <img src="" alt="">
                    </div>
                    <div class="shijian">
                        <img src="" alt="">
                        <img src="" alt="">
                        <img src="" alt="">
                        <img src="" alt="">
                        <img src="" alt="">
                    </div>
                    <!-- 重置 -->
                    <div class="reset">
                        <p class="text t1"><img src="" alt="">重置所有比赛</p>
                        <p class="text t2"><img src="" alt="">只看收藏的比赛</p>
                    </div>
                </div>
                <div class="bodys">
                    <div class="a"><img src="" alt=""></div>
                    <div class="b">
                        <p>时间</p>
                        <p>
                            <span>主队</span>
                            <span>比分</span>
                            <span>客队</span>
                        </p>
                    </div>
                    <div class="c">事件统计</div>
                    <div class="d">亚盘</div>
                    <div class="e">大小球</div>
                    <div class="f">功能</div>
                </div>
                <!-- 第一个国家列表头部 -->
                <div class="title">
                    <div class="a" @click="showfun1">收起<img src="" alt=""></div>
                    <div class="b">
                        <img src="" alt="">
                        <span>英格兰(今日赛事19场)</span>
                    </div>
                    <div class="c">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="d">
                        <div></div>
                        <div>
                            <p>水</p>
                            <p>盘</p>
                            <p>水</p>
                        </div>
                    </div>
                    <div class="e">
                        <p>水</p>
                        <p>盘</p>
                        <p>水</p>
                    </div>
                    <div class="f">
                        <img src="" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="body">

            <transition name="slide-fade">
                <div v-show="bool1">
                    <div class="samall-body" v-for="index in 3" :key="index">
                        <!-- 赛区头部 -->
                        <div class="title">
                            <div class="a"></div>
                            <div class="bs">
                                <p>英超</p><span>(6场)</span>
                            </div>
                            <div class="c">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div class="d">
                                <div></div>
                                <div>
                                    <p>水</p>
                                    <p>盘</p>
                                    <p>水</p>
                                </div>
                            </div>
                            <div class="e">
                                <p>水</p>
                                <p>盘</p>
                                <p>水</p>
                            </div>
                            <div class="f">
                                <img src="" alt="">
                            </div>
                        </div>
                        <!-- 赛区内容（大） -->
                        <div class="content">
                            <!-- 赛区内容（小） -->
                            <div class="contents" v-for="index in 2" :key="index">
                                <div class="left">
                                    <!-- 上/全场 -->
                                    <div class="head public">
                                        <div class="one">
                                            <p>
                                                <span class="dian"></span>
                                                <span>46:18</span>
                                            </p>
                                            <p>
                                                <span>利物浦[1]</span>
                                                <span class="score">3-2</span>
                                                <span>水晶宫[12]</span>
                                            </p>
                                        </div>
                                        <div class="two">
                                            <div><p class="p">9-3</p></div>
                                            <div><p class="p">9-3</p></div>
                                            <div><p class="p">9-3</p></div>
                                            <div>49-44</div>
                                            <div>49-44</div>
                                        </div>
                                        <div class="san">
                                            <div>全</div>
                                            <div class="flex shui">0.875</div>
                                            <div class="flex">0.875</div>
                                            <div class="flex shui">0.875</div>
                                        </div>
                                        <div class="si">
                                            <div class="shui">0.875</div>
                                            <div>0.875</div>
                                            <div class="shui">0.875</div>
                                        </div>
                                    </div>
                                    <!-- 下/半场 -->
                                    <div class="body public">
                                        <div class="one">
                                            <p>
                                                <span class="dian"></span>
                                                <span></span>
                                            </p>
                                            <p>
                                                <span></span>
                                                <span class="score">3-2</span>
                                                <span></span>
                                            </p>
                                        </div>
                                        <div class="two">
                                            <div><p class="p">9-3</p></div>
                                            <div><p class="p">9-3</p></div>
                                            <div><p class="p">9-3</p></div>
                                            <div>49-44</div>
                                            <div>49-44</div>
                                        </div>
                                        <div class="san">
                                            <div>半</div>
                                            <div class="flex shui">0.875</div>
                                            <div class="flex">0.875</div>
                                            <div class="flex shui">0.875</div>
                                        </div>
                                        <div class="si">
                                            <div class="shui">0.875</div>
                                            <div>0.875</div>
                                            <div class="shui">0.875</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="right">
                                    <div class="list">
                                        <div><img src="" alt=""></div>
                                        <div><img src="" alt=""></div>
                                        <div><img src="" alt=""></div>
                                        <div><img src="" alt=""></div>
                                    </div>
                                    <div class="details">详情</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
            <!-- 整体 -->
            <div class="whole">
                <div class="title1">
                    <div class="a" @click="showfun">收起<img src="" alt=""></div>
                    <div class="b">
                        <img src="" alt="">
                        <span>英格兰(今日赛事19场)</span>
                    </div>
                    <div class="c">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="d">
                        <div></div>
                        <div>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                    <div class="e">
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <div class="f">
                        <img src="" alt="">
                    </div>
                </div>
                <transition  name="slide-fade">
                    <div v-show="bool">
                        <div class="samall-body" v-for="index in 3" :key="index">
                            <!-- 赛区头部 -->
                            <div class="title">
                                <div class="a"></div>
                                <div class="bs">
                                    <p>英超</p><span>(6场)</span>
                                </div>
                                <div class="c">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div class="d">
                                    <div></div>
                                    <div>
                                        <p>水</p>
                                        <p>盘</p>
                                        <p>水</p>
                                    </div>
                                </div>
                                <div class="e">
                                    <p>水</p>
                                    <p>盘</p>
                                    <p>水</p>
                                </div>
                                <div class="f">
                                    <img src="" alt="">
                                </div>
                            </div>
                            <!-- 赛区内容（大） -->
                            <div class="content">
                                <!-- 赛区内容（小） -->
                                <div class="contents" v-for="index in 2" :key="index">
                                    <div class="left">
                                        <!-- 上/全场 -->
                                        <div class="head public">
                                            <div class="one">
                                                <p>
                                                    <span class="dian"></span>
                                                    <span>46:18</span>
                                                </p>
                                                <p>
                                                    <span>利物浦[1]</span>
                                                    <span class="score">3-2</span>
                                                    <span>水晶宫[12]</span>
                                                </p>
                                            </div>
                                            <div class="two">
                                                <div><p class="p">9-3</p></div>
                                                <div><p class="p">9-3</p></div>
                                                <div><p class="p">9-3</p></div>
                                                <div>49-44</div>
                                                <div>49-44</div>
                                            </div>
                                            <div class="san">
                                                <div>全</div>
                                                <div class="flex shui">0.875</div>
                                                <div class="flex">0.875</div>
                                                <div class="flex shui">0.875</div>
                                            </div>
                                            <div class="si">
                                                <div class="shui">0.875</div>
                                                <div>0.875</div>
                                                <div class="shui">0.875</div>
                                            </div>
                                        </div>
                                        <!-- 下/半场 -->
                                        <div class="body public">
                                            <div class="one">
                                                <p>
                                                    <span class="dian"></span>
                                                    <span></span>
                                                </p>
                                                <p>
                                                    <span></span>
                                                    <span class="score">3-2</span>
                                                    <span></span>
                                                </p>
                                            </div>
                                            <div class="two">
                                                <div><p class="p">9-3</p></div>
                                                <div><p class="p">9-3</p></div>
                                                <div><p class="p">9-3</p></div>
                                                <div>49-44</div>
                                                <div>49-44</div>
                                            </div>
                                            <div class="san">
                                                <div>半</div>
                                                <div class="flex shui">0.875</div>
                                                <div class="flex">0.875</div>
                                                <div class="flex shui">0.875</div>
                                            </div>
                                            <div class="si">
                                                <div class="shui">0.875</div>
                                                <div>0.875</div>
                                                <div class="shui">0.875</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="right">
                                        <div class="list">
                                            <div><img src="" alt=""></div>
                                            <div><img src="" alt=""></div>
                                            <div><img src="" alt=""></div>
                                            <div><img src="" alt=""></div>
                                        </div>
                                        <div class="details">详情</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
          bool:true,
          bool1:true
      };
    },
    created() {

    },
    mounted(){

    },
    methods: {
        //数据来了,显示隐藏需要该
        showfun(){
            this.bool =! this.bool;
        },
        showfun1(){
            this.bool1 =! this.bool1;
        },
    }

  };
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
</style>

<style src="@/assets/css/pc/rollingball/rollingball.scss" lang="scss" scoped></style>