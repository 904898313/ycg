<template>
    <div class="big">
        <!-- 欧赔预测 -->
        <div class="forecast">
            <div class="tit">欧赔预测</div>
            <div class="content">
                <header>
                    <div class="left">
                        <p>赛前大数据预测</p>
                        <p><span>AI指数</span><span>8.3</span><img src="" alt=""></p>
                    </div>
                </header>
                <div class="table">
                    <div class="head public">
                        <div>赔率公司</div>
                        <div></div>
                        <div>
                            <p>主胜</p>
                            <p>平局</p>
                            <p>客胜</p>
                        </div>
                        <div>赔率时间</div>
                        <div>返还率</div>
                        <div>
                            <p>主胜率</p>
                            <p>平率</p>
                            <p>客胜率</p>
                        </div>
                        <div>凯利指数</div>
                    </div>
                    <div class="body public">
                        <div>Bet365 <b><span>主</span></b></div>
                        <div>
                            <p>初始</p>
                            <p>即时</p>
                        </div>
                        <div>
                            <p>
                                <span>0.88</span>
                                <span>0.88</span>
                                <span>0.88</span>
                            </p>
                            <p>
                                <span><strong class="hong">0.88</strong></span>
                                <span>0.88</span>
                                <span><strong class="lu">0.88</strong></span>
                            </p>
                        </div>
                        <div>
                            <p>03-14 08:30</p>
                            <p>03-14 08:30</p>
                        </div>
                        <div>
                            <p>64.34%</p>
                            <p>64.34%</p>
                        </div>
                        <div>
                            <p>
                                <span>33.38%</span>
                                <span>33.38%</span>
                                <span>33.38%</span>
                            </p>
                            <p>
                                <span>33.38%</span>
                                <span>33.38%</span>
                                <span>33.38%</span>
                            </p>
                        </div>
                        <div>
                            <p>
                                <span>0.9</span>
                                <span>0.9</span>
                                <span>0.9</span>
                            </p>
                            <p>
                                <span>0.9</span>
                                <span><strong class="hong">0.9</strong></span>
                                <span>0.9</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="foot">
                    <div class="left">
                        <div class="a" @click="forecastfun(1)" :class="forecastnum===1?'select':'a'">上盘 1.90<img src="@/assets/images/instantscore/pc-yuce_ok@2x.png" alt=""></div>
                        <div class="a" @click="forecastfun(2)" :class="forecastnum===2?'select':'a'">平手/半球<img src="@/assets/images/instantscore/pc-yuce_ok@2x.png" alt=""></div>
                        <div @click="forecastfun(3)" :class="forecastnum===3?'select':''">下盘 1.90<img src="@/assets/images/instantscore/pc-yuce_ok@2x.png" alt=""></div>
                    </div>
                    <div class="center">
                        <p>AI推荐解读：</p>
                        <p>本场比赛符合AI大数据预测200条法则里的72条规则。</p>
                    </div>
                    <div class="right">
                        <div>用户评测:</div>
                        <div>
                            <p><img src="@/assets/images/instantscore/pc-haopingyixuanzhong@2x.png" alt=""><span style="width:50px" class="a"></span>12</p>
                            <p><img src="@/assets/images/instantscore/pc-chaping@2x.png" alt=""><span style="width:50px" class="b"></span>12</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 让球盘预测 -->
        <div class="forecast">
            <div class="tit">让球盘预测</div>
            <div class="content">
                <header>
                    <div class="left">
                        <p>赛前大数据预测</p>
                        <p><span>AI指数</span><span>8.3</span><img src="" alt=""></p>
                    </div>
                </header>
                <div class="tables">
                    <div class="head public">
                        <div>赔率公司 <b><span>主</span></b></div>
                        <div>
                            <p>主胜</p>
                            <p>初始</p>
                            <p>客胜</p>
                        </div>
                        <div>
                            <p>主胜</p>
                            <p>即时</p>
                            <p>客胜</p>
                        </div>
                        <div>变化时间</div>
                    </div>
                    <div class="body public">
                        <div>Bet365 <img src="" alt=""></div>
                        <div>
                            <p>
                                <span><strong class="hong">0.88</strong></span>
                                <span>0.88</span>
                                <span><strong class="lu">0.88</strong></span>
                            </p>
                        </div>
                        <div>
                            <p>
                                <span>0.88</span>
                                <span><b>0.88</b></span>
                                <span>0.88</span>
                            </p>
                        </div>
                        <div>
                            <p>03-14 08:30</p>
                        </div>
                    </div>
                </div>
                <div class="foot">
                    <div class="left">
                        <div class="a" @click="forecastfun1(1)" :class="forecastnum1===1?'select':'a'">上盘 1.90<img src="@/assets/images/instantscore/pc-yuce_ok@2x.png" alt=""></div>
                        <div class="a" @click="forecastfun1(2)" :class="forecastnum1===2?'select':'a'">平手/半球<img src="@/assets/images/instantscore/pc-yuce_ok@2x.png" alt=""></div>
                        <div @click="forecastfun1(3)" :class="forecastnum1===3?'select':''">下盘 1.90<img src="@/assets/images/instantscore/pc-yuce_ok@2x.png" alt=""></div>
                    </div>
                    <div class="center">
                        <p>AI推荐解读：</p>
                        <p>本场比赛符合AI大数据预测200条法则里的72条规则。</p>
                    </div>
                    <div class="right">
                        <div>用户评测:</div>
                        <div>
                            <p><img src="@/assets/images/instantscore/pc-haopingyixuanzhong@2x.png" alt=""><span style="width:50px" class="a"></span>12</p>
                            <p><img src="@/assets/images/instantscore/pc-chaping@2x.png" alt=""><span style="width:50px" class="b"></span>12</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 大小球预测 -->
        <div class="forecast">
            <div class="tit">大小球预测</div>
            <div class="content">
                <header>
                    <div class="left">
                        <p>赛前大数据预测</p>
                        <p><span>AI指数</span><span>8.3</span><img src="" alt=""></p>
                    </div>
                </header>
                <div class="tables">
                    <div class="head public">
                        <div>赔率公司  <b><span>主</span></b></div>
                        <div>
                            <p>主胜</p>
                            <p>初始</p>
                            <p>客胜</p>
                        </div>
                        <div>
                            <p>主胜</p>
                            <p>即时</p>
                            <p>客胜</p>
                        </div>
                        <div>变化时间</div>
                    </div>
                    <div class="body public">
                        <div>Bet365 <img src="" alt=""></div>
                        <div>
                            <p>
                                <span><strong class="hong">0.88</strong></span>
                                <span>0.88</span>
                                <span><strong class="lu">0.88</strong></span>
                            </p>
                        </div>
                        <div>
                            <p>
                                <span>0.88</span>
                                <span><b>0.88</b></span>
                                <span>0.88</span>
                            </p>
                        </div>
                        <div>
                            <p>03-14 08:30</p>
                        </div>
                    </div>
                </div>
                <div class="foot">
                    <div class="left">
                        <div class="a" @click="forecastfun2(1)" :class="forecastnum2===1?'select':'a'">上盘 1.90<img src="@/assets/images/instantscore/pc-yuce_ok@2x.png" alt=""></div>
                        <div class="a" @click="forecastfun2(2)" :class="forecastnum2===2?'select':'a'">平手/半球<img src="@/assets/images/instantscore/pc-yuce_ok@2x.png" alt=""></div>
                        <div @click="forecastfun2(3)" :class="forecastnum2===3?'select':''">下盘 1.90<img src="@/assets/images/instantscore/pc-yuce_ok@2x.png" alt=""></div>
                    </div>
                    <div class="center">
                        <p>AI推荐解读：</p>
                        <p>本场比赛符合AI大数据预测200条法则里的72条规则。</p>
                    </div>
                    <div class="right">
                        <div>用户评测:</div>
                        <div>
                            <p><img src="@/assets/images/instantscore/pc-haopingyixuanzhong@2x.png" alt=""><span style="width:50px" class="a"></span>12</p>
                            <p><img src="@/assets/images/instantscore/pc-chaping@2x.png" alt=""><span style="width:50px" class="b"></span>12</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 角球预测 -->
        <div class="forecast">
            <div class="tit">角球预测</div>
            <div class="content">
                <header>
                    <div class="left">
                        <p>赛前大数据预测</p>
                        <p><span>AI指数</span><span>8.3</span><img src="" alt=""></p>
                    </div>
                </header>
                <div class="corner">
                    <div class="conents">
                        <div class="headers"><img src="" alt=""><span>曼彻斯特城</span></div>
                        <div class="head zhu">
                            <p>全场</p>
                            <p class="flex">赛</p>
                            <p class="flex">平均</p>
                            <p class="flex">获得</p>
                            <p class="flex">丢失</p>
                            <p class="flex">胜</p>
                            <p class="flex">平</p>
                            <p class="flex">负</p>
                            <p>胜率</p>
                        </div>
                        <div class="head">
                            <p>总计</p>
                            <p class="flex">10</p>
                            <p class="flex">8.4</p>
                            <p class="flex">4.5</p>
                            <p class="flex">3.9</p>
                            <p class="flex">6</p>
                            <p class="flex">6</p>
                            <p class="flex">6</p>
                            <p>42.9%</p>
                        </div>
                        <div class="head">
                            <p>主场</p>
                            <p class="flex">10</p>
                            <p class="flex">8.4</p>
                            <p class="flex">4.5</p>
                            <p class="flex">3.9</p>
                            <p class="flex">6</p>
                            <p class="flex">6</p>
                            <p class="flex">6</p>
                            <p>42.9%</p>
                        </div>
                        <div class="head">
                            <p>客场</p>
                            <p class="flex">10</p>
                            <p class="flex">8.4</p>
                            <p class="flex">4.5</p>
                            <p class="flex">3.9</p>
                            <p class="flex">6</p>
                            <p class="flex">6</p>
                            <p class="flex">6</p>
                            <p>42.9%</p>
                        </div>
                        <div class="head">
                            <p>近6场</p>
                            <p class="flex">10</p>
                            <p class="flex">8.4</p>
                            <p class="flex">4.5</p>
                            <p class="flex">3.9</p>
                            <p class="flex">6</p>
                            <p class="flex">6</p>
                            <p class="flex">6</p>
                            <p>42.9%</p>
                        </div>
                    </div>
                    <div class="conents">
                        <div class="headers"><img src="" alt=""><span>曼彻斯特城</span></div>
                        <div class="head ke">
                            <p>全场</p>
                            <p class="flex">赛</p>
                            <p class="flex">平均</p>
                            <p class="flex">获得</p>
                            <p class="flex">丢失</p>
                            <p class="flex">胜</p>
                            <p class="flex">平</p>
                            <p class="flex">负</p>
                            <p>胜率</p>
                        </div>
                        <div class="head">
                            <p>总计</p>
                            <p class="flex">10</p>
                            <p class="flex">8.4</p>
                            <p class="flex">4.5</p>
                            <p class="flex">3.9</p>
                            <p class="flex">6</p>
                            <p class="flex">6</p>
                            <p class="flex">6</p>
                            <p>42.9%</p>
                        </div>
                        <div class="head">
                            <p>主场</p>
                            <p class="flex">10</p>
                            <p class="flex">8.4</p>
                            <p class="flex">4.5</p>
                            <p class="flex">3.9</p>
                            <p class="flex">6</p>
                            <p class="flex">6</p>
                            <p class="flex">6</p>
                            <p>42.9%</p>
                        </div>
                        <div class="head">
                            <p>客场</p>
                            <p class="flex">10</p>
                            <p class="flex">8.4</p>
                            <p class="flex">4.5</p>
                            <p class="flex">3.9</p>
                            <p class="flex">6</p>
                            <p class="flex">6</p>
                            <p class="flex">6</p>
                            <p>42.9%</p>
                        </div>
                        <div class="head">
                            <p>近6场</p>
                            <p class="flex">10</p>
                            <p class="flex">8.4</p>
                            <p class="flex">4.5</p>
                            <p class="flex">3.9</p>
                            <p class="flex">6</p>
                            <p class="flex">6</p>
                            <p class="flex">6</p>
                            <p>42.9%</p>
                        </div>
                    </div>
                </div>
                <div class="foot">
                    <div class="left">
                        <div class="a" @click="forecastfun3(1)" :class="forecastnum3===1?'select':'a'">上盘 1.90<img src="@/assets/images/instantscore/pc-yuce_ok@2x.png" alt=""></div>
                        <div @click="forecastfun3(3)" :class="forecastnum3===3?'select':''">下盘 1.90<img src="@/assets/images/instantscore/pc-yuce_ok@2x.png" alt=""></div>
                    </div>
                    <div class="center">
                        <p>AI推荐解读：</p>
                        <p>本场比赛符合AI大数据预测200条法则里的72条规则。</p>
                    </div>
                    <div class="right">
                        <div>用户评测:</div>
                        <div>
                            <p><img src="@/assets/images/instantscore/pc-haopingyixuanzhong@2x.png" alt=""><span style="width:50px" class="a"></span>12</p>
                            <p><img src="@/assets/images/instantscore/pc-chaping@2x.png" alt=""><span style="width:50px" class="b"></span>12</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 波胆预测 -->
        <div class="forecast">
            <div class="tit">波胆预测</div>
            <div class="content">
                <header>
                    <div class="left">
                        <p>赛前大数据预测</p>
                        <p><span>AI指数</span><span>8.3</span><img src="" alt=""></p>
                    </div>
                </header>
                <div class="last">
                    <div class="head public">
                        <p>球队名称</p>
                        <p class="flex"><span>1</span><span>:</span><span>2</span></p>
                        <p class="flex"><span>1</span><span>:</span><span>2</span></p>
                        <p class="flex"><span>1</span><span>:</span><span>2</span></p>
                        <p class="flex"><span>1</span><span>:</span><span>2</span></p>
                        <p class="flex"><span>1</span><span>:</span><span>2</span></p>
                        <p class="flex"><span>1</span><span>:</span><span>2</span></p>
                        <p class="flex"><span>1</span><span>:</span><span>2</span></p>
                        <p class="flex"><span>1</span><span>:</span><span>2</span></p>
                        <p class="flex"><span>1</span><span>:</span><span>2</span></p>
                        <p class="flex"><span>1</span><span>:</span><span>2</span></p>
                        <p class="flex"><span>1</span><span>:</span><span>2</span></p>
                        <p class="flex"><span>1</span><span>:</span><span>2</span></p>
                        <p class="flex"><span>1</span><span>:</span><span>2</span></p>
                        <p class="flex"><span>1</span><span>:</span><span>2</span></p>
                        <p class="flex"><span>1</span><span>:</span><span>2</span></p>
                        <p class="flex"><span>1</span><span>:</span><span>2</span></p>
                        <p class="flex"><span>1</span><span>:</span><span>2</span></p>
                        <p class="flex"><span>1</span><span>:</span><span>2</span></p>
                        <p class="flex"><span>1</span><span>:</span><span>2</span></p>
                        <p class="flex"><span>1</span><span>:</span><span>2</span></p>
                        <p class="flex"><span>1</span><span>:</span><span>2</span></p>
                        <p class="flex"><span>1</span><span>:</span><span>2</span></p>
                        <p class="flex"><span>1</span><span>:</span><span>2</span></p>
                        <p class="flex"><span>1</span><span>:</span><span>2</span></p>
                        <p><span>5球</span><span>或</span><span>以上</span></p>
                    </div>
                    <div class="body public">
                        <p>曼城斯特城</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p>0</p>
                    </div>
                    <div class="body public">
                        <p>曼城斯特城</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p class="flex">3</p>
                        <p>0</p>
                    </div>
                </div>
                <div class="foot">
                    <div class="left">
                        <div class="select">下盘 1.90<img src="@/assets/images/instantscore/pc-yuce_ok@2x.png" alt=""></div>
                    </div>
                    <div class="center">
                        <p>AI推荐解读：</p>
                        <p>本场比赛符合AI大数据预测200条法则里的72条规则。</p>
                    </div>
                    <div class="right">
                        <div>用户评测:</div>
                        <div>
                            <p><img src="@/assets/images/instantscore/pc-haopingyixuanzhong@2x.png" alt=""><span style="width:50px" class="a"></span>12</p>
                            <p><img src="@/assets/images/instantscore/pc-chaping@2x.png" alt=""><span style="width:50px" class="b"></span>12</p>
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
            forecastnum:1,
            forecastnum1:1,
            forecastnum2:1,
            forecastnum3:1,
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        forecastfun(num){
            this.forecastnum = num;
        },
        forecastfun1(num){
            this.forecastnum1 = num;
        },
        forecastfun2(num){
            this.forecastnum2 = num;
        },
        forecastfun3(num){
            this.forecastnum3 = num;
        },
    }

};
</script>

<style src="@/assets/css/pc/instantscore/components/AI.scss" lang="scss" scoped></style>