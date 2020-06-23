<template>
    <div class="bigbox">
        <div class="title">
            <div class="left">
                <div>删除选中</div>
                <div>保留选中</div>
                <p>共有200/200家公司<span> [显示]</span></p>
            </div>
            <div class="right">
            </div>
        </div>
        <div class="conent">
            <div class="head public">
                <div><el-checkbox v-model="checked"></el-checkbox></div>
                <div class="two twotwo">公司</div>
                <div class="flex"></div>
                <div class="flex">大</div>
                <div class="flex">进球数</div>
                <div class="flex">小</div>
                <div class="flex">返还率值</div>
                <div>凯利指数</div>
                <div>变化时间</div>
                <div>历史指数</div>
            </div>
            <div class="body public exponent" v-for="index in 10" :key="index">
                <div class="one"><el-checkbox v-model="checked"></el-checkbox></div>
                <div class="two twotwo">Bet365(英国)</div>
                <div class="flex exponentflex"><p class="hui">初始</p><p>即时</p></div>
                <div class="flex exponentflex"><p class="hui hong">2.40</p><p>2.40</p></div>
                <div class="flex exponentflex"><p class="hui">0/0.5</p><p>0/0.5</p></div>
                <div class="flex exponentflex"><p class="hui">1.90</p><p class="lu">1.90</p></div>
                <div class="flex exponentflex"><p>42.05%</p><p>42.05%</p></div>
                <div>
                    <div class="flex exponentflex"><p>1.03</p><p>1.03</p></div>
                    <div class="flex exponentflex"><p>1.03</p><p>1.03</p></div>
                    <div class="flex exponentflex"><p class="hong">1.03</p><p class="hong">1.03</p></div>
                </div>
                <div>09-14 22:00</div>
                <div><span>主</span><span>客</span><span>同</span></div>
            </div>
        </div>
        <div class="textbox">
            <p>注：</p>
            <p>1、主胜、和、客胜：根据即时指数换算出主、和、胜三项的概率，是对各项打出的可能性的度量。计算方法为：返还率除以主、和、胜项的指数。</p>
            <p>2、返还率：即比赛的赔付比例，例如0.89的反还率含义就是博彩公司某场比赛的受注总量的89%用来支付投注者的奖金，剩下的11%为博彩公司的"水钱"。返还率越高说明投注者得到的实惠更多。计算公式为：P=A×B×C/(A×B+B×C+A×C)，P表示返还率，A表示胜赔，B表示平赔，C表示负赔。</p>
            <p>3、凯利指数：反映了各项指数存在的市场赔付风险，即市场动态与事前确立的赔付率之间的赔付差异。某项的凯利指数高于返还率，则表明该项的市场风险很大，难以打出；反之则市场风险小，容易打出。计算方法为：用市场平均的概率来乘以某一家公司的指数，即为该公司各项指数的凯利指数。</p>
            <p>4、使用帮助：凯利指数超过“1”时以红色加粗字体提醒；点击页头的“主、和、客、返还率”可以进行数值高低排序；点击指数可查看完整走势；变化时间显示红色时表示近30分钟内数据有变化。</p>
        </div>
        <div class="bottombox">
            <header>
                <div class="left">大小相关知识</div>
                <div class="right">查看更多欧赔教程>>></div>
            </header>
            <div class="conent">
                <div class="conents" v-for="index in 4" :key="index">
                    <div class="imgbox">
                        <img src="" alt="">
                        <p>
                            <span>复盘解析</span>
                            <span>新手小白</span>
                        </p>
                    </div>
                    <div class="text1">
                        <p class="p1">曼城夺冠希望渺茫 分析本赛季夺...</p>
                        <p class="p2">在输给曼联落后利物浦14分之后，基本宣告了曼联重回榜首无望。在输给曼联落后利物浦14分之后，基本宣告了曼联重回榜首无望。</p>
                        <p class="p3">
                            <span>2019-10-28</span>
                            <span><img src="@/assets/images/college/browse_i@2x.png" alt="">0</span>
                            <span><img src="@/assets/images/college/comment_i@2x.png" alt="">14</span>
                            <span><img src="@/assets/images/college/tags_i@2x.png" alt="">0</span>
                        </p>
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
        checked: false
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

<style src="@/assets/css/pc/instantscore/components/compensate.scss" lang="scss" scoped></style>