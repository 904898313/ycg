<template>
    <div class="bigbox">
        <!-- 面包屑 -->
        <div class="list-head">
            <i class="el-icon-s-home"></i>
            <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">帮众体育</el-breadcrumb-item>
            <el-breadcrumb-item>即时比分</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="conent">
            <!-- 语言切换 -->
            <div class="switch">
                <div class="left">
                    <div class="navs" @click="navfun(1)" :class="navnum===1?'select':''"><p>全部</p></div>
                    <div class="navs" @click="navfun(2)" :class="navnum===2?'select':''"><p>进行</p></div>
                    <div class="navs" @click="navfun(3)" :class="navnum===3?'select':''"><p>赛程</p></div>
                    <div class="navs" @click="navfun(4)" :class="navnum===4?'select':''"><p>完场</p></div>
                    <div class="navs" @click="navfun(5)" :class="navnum===5?'select':''"><p>关注</p></div>
                </div>
                <div class="right">
                    <p>
                        <el-radio v-model="radio" label="1">国语</el-radio>
                        <el-radio v-model="radio" label="2">粤语</el-radio>
                        <el-radio v-model="radio" label="3">English</el-radio>
                    </p>
                    <p class="xian"></p>
                    <p>
                        <el-checkbox v-model="checked1">进球声音</el-checkbox>
                        <el-checkbox v-model="checked2">进球弹窗</el-checkbox>
                    </p>
                </div>
            </div>
        </div>
        <!-- 选择 -->
        <div class="choice">
            <div class="choices">
                <div class="left">
                    <div @click="choicesfun(1)" :class="choicesnum===1?'select':''">焦点</div>
                    <div @click="choicesfun(2)" :class="choicesnum===2?'select':''">北单</div>
                    <div @click="choicesfun(3)" :class="choicesnum===3?'select':''">竞彩</div>
                    <div @click="choicesfun(4)" :class="choicesnum===4?'select':''">足彩</div>
                    <div @click="choicesfun(5)" :class="choicesnum===5?'select':''">完整</div>
                    <p class="sessions">共142场比赛，隐藏了<span>0</span>场</p>
                    <p class="all">显示全部</p>
                </div>
                <div class="right">
                    <div class="bot" @click="matchfun('')">
                        <p><span>{{match}}</span><img src="" alt=""></p>
                        <ul v-show="matchbool">
                            <li @click.stop="matchfun('英超')">英超</li>
                            <li @click.stop="matchfun('德甲')">德甲</li>
                            <li @click.stop="matchfun('意甲')">意甲</li>
                        </ul>
                    </div>
                    <div class="bot"><p><span>选择盘口</span><img src="" alt=""></p></div>
                    <div class="bot"><p><span>选择公司</span><img src="" alt=""></p></div>
                    <div class="set"  @click="Maskfun"><img src="@/assets/images/instantscore/setting_i3@2x.png" alt=""><span>功能设置</span></div>
                </div>
            </div>
        </div>
        <!-- 比赛数据列表 -->
        <div class="data">
            <div class="bighead">
                <div class="head public">
                    <!-- <div><el-checkbox  v-model="checked"></el-checkbox></div> -->
                    <div class="titcheck">
                        <!-- <input type="checkbox" @click="checkallfun" v-model="checkallbool"> -->
                        <el-checkbox @change="checkallfun" v-model="checkallbool"></el-checkbox>
                    </div>
                    <div>赛事</div>
                    <div>
                        <p>时间</p>
                        <p>状态</p>
                    </div>
                    <div>
                        <p>主队</p>
                        <p>比分</p>
                        <p>客队</p>
                    </div>
                    <div>半场</div>
                    <div>角球</div>
                    <div>直播</div>
                    <div>赔率</div>
                    <div>
                        <p>功能</p>
                        <p><span>收藏&置顶</span></p>
                    </div>
                </div>
            </div>
            <div class="bigmatch">
                <!-- 正在进行 -->
                <div class="match">
                    <div class="tit">正在进行的比赛<img src="@/assets/images/instantscore/shijian@2x.png" alt=""></div>
                    <div class="body public" v-for="index in 2" :key="index">
                        <div>
                            <input type="checkbox" ref="a" @click="checkfun">
                            <!-- <el-checkbox ref="a"  @click="checkfun"></el-checkbox> -->
                        </div>
                        <div>英超</div>
                        <div>
                            <p>03:00</p>
                            <p class="lu"><img src="" alt="">59′</p>
                            <!-- lu:正在进行的 hong:结束的-->
                        </div>
                        <div>
                            <p>斯特城<img src="" alt=""></p>
                            <p class="lu">3-3</p>
                            <!-- hong：已完成  .lu：正在进行 -->
                            <p><img src="" alt="">利物浦</p>
                        </div>
                        <div>1-2</div>
                        <div><img src="@/assets/images/instantscore/jaioqiu@2x.png" alt="">(7-9)</div>
                        <div><img src="@/assets/images/instantscore/qiuchang2@2x.png" alt=""></div>
                        <div>
                            <p>
                                <span class="hong">3.08</span>
                                <span>3.08</span>
                            </p>
                            <p>
                                <span>三球半/四球</span>
                                <span>2.5/3</span>
                            </p>
                            <p>
                                <span>2.38</span>
                                <span class="lu">2.38</span>
                            </p>
                        </div>
                        <div>
                            <p>
                                <span class="hongbg hong">滚球</span>
                                <span>分析</span>
                                <span>指数</span>
                            </p>
                            <p>
                                <img src="@/assets/images/instantscore/shoucang2@2x.png" alt="">
                                <img src="" alt="">
                            </p>
                        </div>
                    </div>
                </div>
                <!-- 未开始的比赛 -->
                <div class="match">
                    <div class="tit tit1">未开始的比赛<img src="@/assets/images/instantscore/wei-shijian@2x.png" alt=""></div>
                    <div class="body public" v-for="index in 9" :key="index">
                        <div><input type="checkbox" ref="a" @click="checkfun"></div>
                        <div>英超</div>
                        <div>
                            <p>03:00</p>
                            <p><img src="" alt="">59′</p>
                            <!-- lu:正在进行的 hong:结束的-->
                        </div>
                        <div>
                            <p>斯特城<img src="" alt=""></p>
                            <p class="hui">VS</p>
                            <!-- hong：已完成  .lu：正在进行 -->
                            <p><img src="" alt="">利物浦</p>
                        </div>
                        <div>1-2</div>
                        <div><img src="@/assets/images/instantscore/jaioqiu@2x.png" alt="">(7-9)</div>
                        <div><img src="@/assets/images/instantscore/qiuchang2@2x.png" alt=""></div>
                        <div>
                            <p>
                                <span class="hong">3.08</span>
                                <span>3.08</span>
                            </p>
                            <p>
                                <span>三球半/四球</span>
                                <span>2.5/3</span>
                            </p>
                            <p>
                                <span>2.38</span>
                                <span class="lu">2.38</span>
                            </p>
                        </div>
                        <div>
                            <p>
                                <span class="lubg lu">预测</span>
                                <span>分析</span>
                                <span>指数</span>
                            </p>
                            <p>
                                <img src="@/assets/images/instantscore/shoucang2@2x.png" alt="">
                                <img src="@/assets/images/instantscore/zhiding@2x.png" alt="">
                            </p>
                        </div>
                    </div>
                </div>
                <!-- 已完场的比赛 -->
                <div class="match">
                    <div class="tit tit2">已完场的比赛<img src="@/assets/images/instantscore/wan-shijian@2x.png" alt=""></div>
                    <div class="body public" v-for="index in 9" :key="index">
                        <div><input type="checkbox" ref="a" @click="checkfun"></div>
                        <div>英超</div>
                        <div>
                            <p>03:00</p>
                            <p class="hong"><img src="" alt="">59′</p>
                            <!-- lu:正在进行的 hong:结束的-->
                        </div>
                        <div>
                            <p>斯特城<img src="" alt=""></p>
                            <p class="hong">3-3</p>
                            <!-- hong：已完成  .lu：正在进行 -->
                            <p><img src="" alt="">利物浦</p>
                        </div>
                        <div>1-2</div>
                        <div><img src="@/assets/images/instantscore/jaioqiu@2x.png" alt="">(7-9)</div>
                        <div><img src="@/assets/images/instantscore/qiuchang2@2x.png" alt=""></div>
                        <div>
                            <p>
                                <span class="hong">3.08</span>
                                <span>3.08</span>
                            </p>
                            <p>
                                <span>三球半/四球</span>
                                <span>2.5/3</span>
                            </p>
                            <p>
                                <span>2.38</span>
                                <span class="lu">2.38</span>
                            </p>
                        </div>
                        <div>
                            <p>
                                <span class="hui huibg">复盘</span>
                                <span>分析</span>
                                <span>指数</span>
                            </p>
                            <p>
                                <img src="@/assets/images/instantscore/shoucang2@2x.png" alt="">
                                <img src="@/assets/images/instantscore/zhiding@2x.png" alt="">
                            </p>
                        </div>
                    </div>
                </div>
                <div class="textbox">
                    <p>帮众体育-即时比分提示：点击球队名：查看球队战绩；点击比分：查看比赛数据，<img src="@/assets/images/instantscore/jaioqiu@2x.png" alt="">表示角球，<img src="@/assets/images/instantscore/qiuchang2@2x.png" alt="">表示直播。</p>
                    <p>网站提醒：以上比分数据仅供浏览，投注参考，并不作为最终派奖赛果依据。</p>
                    <p>为保证您最佳的浏览效果，请使用IE9或以上版本，Chorome等浏览器进行访问</p>
                </div>
            </div>
        </div>
        <!-- 遮罩层 -->
        <div class="Mask" v-show="Maskbool">
            <div class="center">
                <div class="off" @click="Maskfun"> × </div>
                <div class="tit">
                    功能设置
                </div>
                <div class="conent">
                    <p>
                        <span>显示红黄牌</span><el-checkbox v-model="checkedpai" class="el"></el-checkbox>
                        <span>球队排名</span><el-checkbox v-model="checkednum" class="el"></el-checkbox>
                    </p>
                    <div class="choicebox">
                        <span class="left">进球声</span>
                        <div class="option" @click="choiceboxfun(1)">
                            <p class="title"><span>{{choiceboxtit1}}</span><img src="" alt=""></p>
                            <ul v-show="this.choiceboxnum === 1">
                                <li @click="choiceboxtit1fun(1)">1</li>
                                <li @click="choiceboxtit1fun(2)">2</li>
                                <li @click="choiceboxtit1fun(3)">3</li>
                            </ul>
                        </div>
                    </div>
                    <div class="choicebox">
                        <span class="left">提示窗</span>
                        <div class="option" @click="choiceboxfun(2)">
                            <p class="title"><span>正上方</span><img src="" alt=""></p>
                            <ul v-show="this.choiceboxnum === 2">
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                            </ul>
                        </div>
                    </div>
                    <div class="choicebox">
                        <span class="left">背景皮肤</span>
                        <div class="option" @click="choiceboxfun(3)">
                            <p class="title"><span>默认</span><img src="" alt=""></p>
                            <ul v-show="this.choiceboxnum === 3">
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                            </ul>
                        </div>
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
          navnum:1,
          radio: '1',
          //进球声音/进球弹窗
          checked1:true,
          checked2:true,
          //足球比赛类型选择
          choicesnum:5,
          match:'选择赛事',
          matchbool:false,
          checked:false,
          checkedpai:false,
          checkednum:false,
          Maskbool:false,
          choiceboxnum:0,
          choiceboxtit1:'默认',
          checkallbool:false
      };
    },
    created() {

    },
    mounted(){

    },
    methods: {
        navfun(i){
            this.navnum = i;
        },
        choicesfun(i){
            this.choicesnum = i;
        },
        matchfun(text){
            if(text === ''){

            }else{
                this.match = text;

            }
            this.matchbool =!this.matchbool;
        },
        Maskfun(){
            this.Maskbool =! this.Maskbool;
            console.log(this.Maskbool)
        },
        choiceboxfun(num){
            if(this.choiceboxnum === num){
                this.choiceboxnum =0;
            }else{
                this.choiceboxnum = num;
            }
        },
        choiceboxtit1fun(num){
            this.choiceboxtit1 = num;
        },
        //单选按钮
        checkfun(){
            // console.log('0..0.0.');
            var flag = true;
            for(var i=0;i<this.$refs.a.length;i++){
                if(!this.$refs.a[i].checked){
                    flag=false;
                }
            }
            this.checkallbool = flag;
        },
        //全选按钮
        checkallfun(){
            // this.checkallbool =! this.checkallbool;
            if(this.checkallbool){
                for(var i=0;i<this.$refs.a.length;i++){
                    this.$refs.a[i].checked = true;
                }
            }else{
                for(var i=0;i<this.$refs.a.length;i++){
                    this.$refs.a[i].checked = false;
                }
            }
        }
    },
  };
</script>
<style lang="scss">
    .titcheck{
        .el-checkbox__input.is-checked .el-checkbox__inner{
            background-color: $themeColor;
            border-color: $themeColor;
        }
    }

</style>

<style src="@/assets/css/pc/instantscore/instantscore-home.scss" lang="scss" scoped></style>