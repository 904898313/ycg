<template>
  <div>
    <!-- 情报 -->
    <div class="qingbao">
      <div class="title">
        <p>情报分析</p>
        <img src="@/assets\images\instantscore\icon@2x.png" alt />
        <span>曼城进攻猛如虎，利物浦比赛风格依旧大开大合</span>
      </div>
      <div class="tabs">
        <span :class="currid==0?'active':''" @click="changecurr(0)">利物浦</span>
        <span :class="currid==1?'active':''" @click="changecurr(1)">会员私享情报</span>
        <span :class="currid==2?'active':''" @click="changecurr(2)">莱切斯特城</span>
      </div>
      <div class="youli">
        <div class="title">
          <span>有利情报</span>
        </div>
        <div class="list">
          <div class="item">
            <span>状态</span>
            <p>本场比赛是联赛第四和联赛第七名的交手，双方只有2分的差距。最近2次交手，双方都站成了平手。</p>
          </div>
          <div class="item">
            <span>实力</span>
            <p>本场比赛是联赛第四和联赛第七名的交手，双方只有2分的差距。最近2次交手，双方都站成了平手。</p>
          </div>
          <div class="item">
            <span>状态</span>
            <p>本场比赛是联赛第四和联赛第七名的交手，双方只有2分的差距。最近2次交手，双方都站成了平手。</p>
          </div>
        </div>
      </div>
      <div class="buli">
        <div class="title">
          <span>不利情报</span>
        </div>
        <div class="list">
          <div class="item">
            <span>状态</span>
            <p>本场比赛是联赛第四和联赛第七名的交手，双方只有2分的差距。最近2次交手，双方都站成了平手。</p>
          </div>
          <div class="item">
            <span>实力</span>
            <p>本场比赛是联赛第四和联赛第七名的交手，双方只有2分的差距。最近2次交手，双方都站成了平手。</p>
          </div>
          <div class="item">
            <span>状态</span>
            <p>本场比赛是联赛第四和联赛第七名的交手，双方只有2分的差距。最近2次交手，双方都站成了平手。</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 必发 -->
    <div class="inevitable">
      <div class="echarts">
        <p>必发指数</p>
        <p class="total">交易量：6815,887</p>
        <div class="mychart" ref="myChart"></div>
      </div>
      <div class="table">
        <div class="title">
          <span></span>
          <span>必发价位</span>
          <span>交易量</span>
          <span>盈亏</span>
        </div>
        <div class="list">
          <div class="trs">
            <span>主胜</span>
            <span>3.65</span>
            <span>2754706</span>
            <span>3797137</span>
          </div>
          <div class="trs">
            <span>主胜</span>
            <span>3.65</span>
            <span>2754706</span>
            <span>3797137</span>
          </div>
          <div class="trs">
            <span>主胜</span>
            <span>3.65</span>
            <span>2754706</span>
            <span>3797137</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 历史交锋 -->
    <div class="clash">
      <div class="title">历史交锋</div>
      <div class="seclist">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
      </div>
      <div class="table">
        <div class="thead">
          <div>日期</div>
          <div>对阵</div>
          <div class="tree">
            <span>胜负</span>
            <span>盘路</span>
            <span>大小</span>
          </div>
        </div>
        <div class="trs">
          <div class="top">
            <p>19-12/03 | 英超</p>
            <span>半场（2:1）</span>
          </div>
          <div class="bot">
            <div>
              <p>利物浦</p>
              <span>4:1</span>
              <p>曼彻斯特城</p>
            </div>
            <div>
              <span>胜</span>
              <span>输</span>
              <span>走</span>
            </div>
          </div>
        </div>
        <div class="trs">
          <div class="top">
            <p>19-12/03 | 英超</p>
            <span>半场（2:1）</span>
          </div>
          <div class="bot">
            <div>
              <p>利物浦</p>
              <span>4:1</span>
              <p>曼彻斯特城</p>
            </div>
            <div>
              <span>胜</span>
              <span>输</span>
              <span>走</span>
            </div>
          </div>
        </div>
        <div class="trs">
          <div class="top">
            <p>19-12/03 | 英超</p>
            <span>半场（2:1）</span>
          </div>
          <div class="bot">
            <div>
              <p>利物浦</p>
              <span>4:1</span>
              <p>曼彻斯特城</p>
            </div>
            <div>
              <span>胜</span>
              <span>输</span>
              <span>走</span>
            </div>
          </div>
        </div>
        <div class="huizong">
          <p>
            近6场比赛，利物浦赢
            <i class="win">6</i>场，平
            <i class="draw">0</i>场，输
            <i class="count">0</i>场；胜率
            <i class="winning">100%</i>；赢盘率
            <i class="ballnv">70</i>%；大球率
            <i class="bigball">0</i>%
          </p>
        </div>
      </div>
    </div>
    <!-- 近期战绩 -->
    <div class="clash">
      <div class="title">近期战绩</div>
      <div class="seclist">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
      </div>
      <div class="team">
        <div class="left">
          <img src="@/assets/images/instantscore/lwp@2x.png" alt />
        </div>
        <div class="right">
          <p class="top">
            利物浦(胜率
            <i class="winning">100%</i> 赢盘率
            <i class="bigball">70%</i> 大球率0%)
          </p>
          <p class="bot">
            利物浦近6场比赛，赢
            <i class="ying">6</i>场，平
            <i class="ping">0</i>场，输
            <i class="shu">0</i>场
          </p>
        </div>
      </div>
      <div class="table">
        <div class="thead">
          <div>日期</div>
          <div>对阵</div>
          <div class="tree">
            <span>胜负</span>
            <span>盘路</span>
            <span>大小</span>
          </div>
        </div>
        <div class="trs">
          <div class="top">
            <p>19-12/03 | 英超</p>
            <span>半场（2:1）</span>
          </div>
          <div class="bot">
            <div>
              <p>利物浦</p>
              <span>4:1</span>
              <p>曼彻斯特城</p>
            </div>
            <div>
              <span>胜</span>
              <span>输</span>
              <span>走</span>
            </div>
          </div>
        </div>
        <div class="trs">
          <div class="top">
            <p>19-12/03 | 英超</p>
            <span>半场（2:1）</span>
          </div>
          <div class="bot">
            <div>
              <p>利物浦</p>
              <span>4:1</span>
              <p>曼彻斯特城</p>
            </div>
            <div>
              <span>胜</span>
              <span>输</span>
              <span>走</span>
            </div>
          </div>
        </div>
        <div class="trs">
          <div class="top">
            <p>19-12/03 | 英超</p>
            <span>半场（2:1）</span>
          </div>
          <div class="bot">
            <div>
              <p>利物浦</p>
              <span>4:1</span>
              <p>曼彻斯特城</p>
            </div>
            <div>
              <span>胜</span>
              <span>输</span>
              <span>走</span>
            </div>
          </div>
        </div>
        <div class="huizong">
          <p>
            近6场比赛，利物浦赢
            <i class="win">6</i>场，平
            <i class="draw">0</i>场，输
            <i class="count">0</i>场；胜率
            <i class="winning">100%</i>；赢盘率
            <i class="ballnv">70</i>%；大球率
            <i class="bigball">0</i>%
          </p>
        </div>
      </div>
      <div class="team">
        <div class="left">
          <img src="@/assets/images/instantscore/lwp@2x.png" alt />
        </div>
        <div class="right">
          <p class="top">
            利物浦(胜率
            <i class="winning">100%</i> 赢盘率
            <i class="bigball">70%</i> 大球率0%)
          </p>
          <p class="bot">
            利物浦近6场比赛，赢
            <i class="ying">6</i>场，平
            <i class="ping">0</i>场，输
            <i class="shu">0</i>场
          </p>
        </div>
      </div>
      <div class="table">
        <div class="thead">
          <div>日期</div>
          <div>对阵</div>
          <div class="tree">
            <span>胜负</span>
            <span>盘路</span>
            <span>大小</span>
          </div>
        </div>
        <div class="trs">
          <div class="top">
            <p>19-12/03 | 英超</p>
            <span>半场（2:1）</span>
          </div>
          <div class="bot">
            <div>
              <p>利物浦</p>
              <span>4:1</span>
              <p>曼彻斯特城</p>
            </div>
            <div>
              <span>胜</span>
              <span>输</span>
              <span>走</span>
            </div>
          </div>
        </div>
        <div class="trs">
          <div class="top">
            <p>19-12/03 | 英超</p>
            <span>半场（2:1）</span>
          </div>
          <div class="bot">
            <div>
              <p>利物浦</p>
              <span>4:1</span>
              <p>曼彻斯特城</p>
            </div>
            <div>
              <span>胜</span>
              <span>输</span>
              <span>走</span>
            </div>
          </div>
        </div>
        <div class="trs">
          <div class="top">
            <p>19-12/03 | 英超</p>
            <span>半场（2:1）</span>
          </div>
          <div class="bot">
            <div>
              <p>利物浦</p>
              <span>4:1</span>
              <p>曼彻斯特城</p>
            </div>
            <div>
              <span>胜</span>
              <span>输</span>
              <span>走</span>
            </div>
          </div>
        </div>
        <div class="huizong">
          <p>
            近6场比赛，利物浦赢
            <i class="win">6</i>场，平
            <i class="draw">0</i>场，输
            <i class="count">0</i>场；胜率
            <i class="winning">100%</i>；赢盘率
            <i class="ballnv">70</i>%；大球率
            <i class="bigball">0</i>%
          </p>
        </div>
      </div>
    </div>
    <!-- 联赛排名 -->
    <div class="paiming">
      <div class="title">
        <p>联赛排名</p>
      </div>
      <div class="team">
        <div class="left">
          <img src="@/assets/images/instantscore/lwp@2x.png" alt />
        </div>
        <div class="mid">
          <p class="name">利物浦</p>
          <p class="text">利物浦在英超联赛中处于第3名，剑指榜首。</p>
        </div>
        <div class="right">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </div>
      </div>
      <div class="table">
        <div class="thead">
          <span>全场</span>
          <span>赛</span>
          <span>胜</span>
          <span>平</span>
          <span>负</span>
          <span>进</span>
          <span>失</span>
          <span>净</span>
          <span>胜率</span>
          <span>积分</span>
          <span>排名</span>
        </div>
        <div class="trs" v-for="(item,index) in 3" :key="index">
          <span>总计</span>
          <span>30</span>
          <span>30</span>
          <span>30</span>
          <span>30</span>
          <span>30</span>
          <span>30</span>
          <span>30</span>
          <span>30</span>
          <span>30</span>
          <span>30</span>
        </div>
      </div>
      <div class="line"></div>
      <div class="team">
        <div class="left">
          <img src="@/assets/images/instantscore/lwp@2x.png" alt />
        </div>
        <div class="mid">
          <p class="name">利物浦</p>
          <p class="text">利物浦在英超联赛中处于第3名，剑指榜首。</p>
        </div>
        <div class="right">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </div>
      </div>
      <div class="table">
        <div class="thead">
          <span>全场</span>
          <span>赛</span>
          <span>胜</span>
          <span>平</span>
          <span>负</span>
          <span>进</span>
          <span>失</span>
          <span>净</span>
          <span>胜率</span>
          <span>积分</span>
          <span>排名</span>
        </div>
        <div class="trs" v-for="(item,index) in 3" :key="index">
          <span>总计</span>
          <span>30</span>
          <span>30</span>
          <span>30</span>
          <span>30</span>
          <span>30</span>
          <span>30</span>
          <span>30</span>
          <span>30</span>
          <span>30</span>
          <span>30</span>
        </div>
      </div>
    </div>
    <!-- 未来赛程 -->
    <div class="schedule">
      <div class="title">未来赛程</div>
      <div class="team">
        <img src="@/assets/images/instantscore/lwp@2x.png" alt />
        <p>利物浦</p>
      </div>
      <div class="list">
        <div class="thead">
          <div>日期</div>
          <div>对阵</div>
          <div class="tree">
            <span>分析</span>
            <span>直播</span>
            <span>相隔</span>
          </div>
        </div>
        <div class="info" v-for="(item,index) in 3" :key="index">
          <p>19-12/03 | 英超</p>
          <div class="bot">
            <div class="vs">
              <span class="name">利物浦</span>
              <span class="namemar">VS</span>
              <span class="name">曼彻斯特城</span>
            </div>
            <div class="fenxi">
              <span class="gr">分析</span>
              <img src alt />
              <span class="name">3天</span>
            </div>
          </div>
        </div>
      </div>
      <div class="team">
        <img src="@/assets/images/instantscore/lwp@2x.png" alt />
        <p>利物浦</p>
      </div>
      <div class="list">
        <div class="thead">
          <div>日期</div>
          <div>对阵</div>
          <div class="tree">
            <span>分析</span>
            <span>直播</span>
            <span>相隔</span>
          </div>
        </div>
        <div class="info" v-for="(item,index) in 3" :key="index">
          <p>19-12/03 | 英超</p>
          <div class="bot">
            <div class="vs">
              <span class="name">利物浦</span>
              <span class="namemar">VS</span>
              <span class="name">曼彻斯特城</span>
            </div>
            <div class="fenxi">
              <span class="gr">分析</span>
              <img src alt />
              <span class="name">3天</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 联赛盘路走势 -->
    <div class="trend">
      <div class="title">联赛盘路走势</div>
      <div class="team">
        <p>
          <img src="@/assets/images/instantscore/lwp@2x.png" alt />利物浦
        </p>
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
      </div>
      <div class="table">
        <div class="thead">
          <div class="one">全场</div>
          <div class="two">让球盘</div>
          <div class="three">大小球</div>
        </div>
        <div class="themes">
          <div class="one">
            <div class="theme"></div>
            <span>赛</span>
          </div>
          <div class="two">
            <span>赢</span>
            <span>走</span>
            <span>输</span>
            <span>赢盘率</span>
            <span>详细</span>
          </div>
          <div class="three">
            <span>大</span>
            <span>大球率</span>
            <span>小</span>
            <span>小球率</span>
            <span>详细</span>
          </div>
        </div>
        <div class="trs">
          <div class="one">
            <div class="theme">总计</div>
            <span>30</span>
          </div>
          <div class="two">
            <span>13</span>
            <span>2</span>
            <span>13</span>
            <span>46.4%</span>
            <span>查看</span>
          </div>
          <div class="three">
            <span>9</span>
            <span>32.1%</span>
            <span>18</span>
            <span>64.3%</span>
            <span>查看</span>
          </div>
        </div>
        <div class="trs">
          <div class="one">
            <div class="theme">近6场</div>
            <span>6</span>
          </div>
          <div class="two">
            <div class="shuy">
              <p>
                <span>走赢赢</span>
              </p>
              <p>
                <span>输输输</span>
              </p>
            </div>
            <span>46.4%</span>
            <span>查看</span>
          </div>
          <div class="three">
            <div class="shuy">
              <p>
                <span>走赢赢</span>
              </p>
              <p>
                <span>输输输</span>
              </p>
            </div>
            <span>64.3%</span>
            <span>查看</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 相同盘路 -->
    <div class="sameroute">
      <div class="title">相同盘路</div>
      <div class="team">
        <div class="left">
          <img src="@/assets/images/instantscore/lwp@2x.png" alt />
          <span>利物浦</span>
        </div>
        <div class="right">
          <span :class="ballid==0?'active':''" @click="changeballid(0)">让球</span>
          <span :class="ballid==1?'active':''" @click="changeballid(1)">大小球</span>
        </div>
      </div>
      <div class="table">
        <div class="thead">
          <span>日期</span>
          <span>对阵</span>
          <div class="chupan">
            <span>初盘</span>
            <span>盘路</span>
          </div>
        </div>
        <div class="list">
          <div class="info" v-for="(item,index) in 3" :key="index">
            <p>19-12/03 | 英超</p>
            <div class="text">
              <div class="seat"></div>
              <div class="left">
                <p>利物浦</p>
                <span>1 : 3</span>
                <p>曼彻斯特城</p>
              </div>
              <div class="right">
                <span>两球</span>
                <span>赢</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="team">
        <div class="left">
          <img src="@/assets/images/instantscore/lwp@2x.png" alt />
          <span>利物浦</span>
        </div>
        <div class="right">
          <span :class="ballid==0?'active':''" @click="changeballid(0)">让球</span>
          <span :class="ballid==1?'active':''" @click="changeballid(1)">大小球</span>
        </div>
      </div>
      <div class="table">
        <div class="thead">
          <span>日期</span>
          <span>对阵</span>
          <div class="chupan">
            <span>初盘</span>
            <span>盘路</span>
          </div>
        </div>
        <div class="list">
          <div class="info" v-for="(item,index) in 3" :key="index">
            <p>19-12/03 | 英超</p>
            <div class="text">
              <div class="seat"></div>
              <div class="left">
                <p>利物浦</p>
                <span>1 : 3</span>
                <p>曼彻斯特城</p>
              </div>
              <div class="right">
                <span>两球</span>
                <span>赢</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 进球数及分布 -->
    <div class="goalsfor">
      <div class="title">上下半场进球数及分布</div>
      <div class="team">
        <img src="@/assets/images/instantscore/lwp@2x.png" alt />
        <span>利物浦</span>
      </div>
      <div class="list">
        <div class="thead">
          <span></span>
          <span>0</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4+</span>
          <span>上半场</span>
          <span>下半场</span>
        </div>
        <div class="trs" v-for="(item,index) in 3" :key="index">
          <span>总计</span>
          <span>1</span>
          <span>2</span>
          <span>12</span>
          <span>6</span>
          <span>4</span>
          <span>32</span>
          <span>32</span>
        </div>
      </div>
      <div class="line"></div>
      <div class="team">
        <img src="@/assets/images/instantscore/lwp@2x.png" alt />
        <span>利物浦</span>
      </div>
      <div class="list">
        <div class="thead">
          <span></span>
          <span>0</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4+</span>
          <span>上半场</span>
          <span>下半场</span>
        </div>
        <div class="trs" v-for="(item,index) in 3" :key="index">
          <span>总计</span>
          <span>1</span>
          <span>2</span>
          <span>12</span>
          <span>6</span>
          <span>4</span>
          <span>32</span>
          <span>32</span>
        </div>
      </div>
    </div>
    <!-- 半全场 -->
    <div class="halffield">
      <div class="title">半全场</div>
      <div class="team">
        <img src="@/assets/images/instantscore/lwp@2x.png" alt />
        <span>利物浦</span>
      </div>
      <div class="table">
        <div class="thead">
          <span>半场</span>
          <span>胜</span>
          <span>胜</span>
          <span>胜</span>
          <span>平</span>
          <span>平</span>
          <span>平</span>
          <span>负</span>
          <span>负</span>
          <span>负</span>
        </div>
        <div class="thead">
          <span>全场</span>
          <span>胜</span>
          <span>胜</span>
          <span>胜</span>
          <span>平</span>
          <span>平</span>
          <span>平</span>
          <span>负</span>
          <span>负</span>
          <span>负</span>
        </div>
        <div class="trs">
          <span>总计</span>
          <span>19</span>
          <span>0</span>
          <span>0</span>
          <span>0</span>
          <span>0</span>
          <span>0</span>
          <span>6</span>
          <span>6</span>
          <span>1</span>
        </div>
      </div>
      <div class="team">
        <img src="@/assets/images/instantscore/lwp@2x.png" alt />
        <span>利物浦</span>
      </div>
      <div class="table">
        <div class="thead">
          <span>半场</span>
          <span>胜</span>
          <span>胜</span>
          <span>胜</span>
          <span>平</span>
          <span>平</span>
          <span>平</span>
          <span>负</span>
          <span>负</span>
          <span>负</span>
        </div>
        <div class="thead">
          <span>全场</span>
          <span>胜</span>
          <span>胜</span>
          <span>胜</span>
          <span>平</span>
          <span>平</span>
          <span>平</span>
          <span>负</span>
          <span>负</span>
          <span>负</span>
        </div>
        <div class="trs">
          <span>总计</span>
          <span>19</span>
          <span>0</span>
          <span>0</span>
          <span>0</span>
          <span>0</span>
          <span>0</span>
          <span>6</span>
          <span>6</span>
          <span>1</span>
        </div>
      </div>
    </div>
    <!-- 大小单双 -->
    <div class="double">
      <div class="title">大小/单双</div>
      <div class="team">
        <img src="@/assets/images/instantscore/lwp@2x.png" alt />
        <span>利物浦</span>
      </div>
      <div class="table">
        <div class="thead">
          <span></span>
          <span>大</span>
          <span>小</span>
          <span>走</span>
          <span>单</span>
          <span>双</span>
        </div>
        <div class="trs" v-for="(item,index) in 3" :key="index">
          <span>总计</span>
          <span>10(35.7%)</span>
          <span>10(35.7%)</span>
          <span>10(35.7%)</span>
          <span>10(35.7%)</span>
          <span>10(35.7%)</span>
        </div>
      </div>
    </div>
    <!-- 进球时间 -->
    <div class="goaltime">
      <div class="title">联赛盘路走势</div>
      <div class="team">
        <p>
          <img src="@/assets/images/instantscore/lwp@2x.png" alt />利物浦
        </p>
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
      </div>
      <div class="table">
        <div class="thead">
          <span></span>
          <span>46-50</span>
          <span>51-60</span>
          <span>61-70</span>
          <span>71-80</span>
          <span>81-90+</span>
        </div>
        <div class="trs" v-for="(item,index) in 3" :key="index">
          <span>总计</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>6</span>
          <span>5</span>
        </div>
      </div>
    </div>
    <!-- 角球历史统计 -->
    <div class="historical">
      <div class="title">
        <p>角球历史统计</p>
      </div>
      <div class="menus">
        <van-dropdown-menu class="menu">
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
        <van-dropdown-menu class="menu">
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
        <van-dropdown-menu class="menu">
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
      </div>
      <div class="team">
        <img src="@/assets/images/instantscore/lwp@2x.png" alt />
        <span>利物浦</span>
      </div>
      <div class="table">
        <div class="thead">
          <span>全场</span>
          <span>赛</span>
          <span>平均</span>
          <span>获得</span>
          <span>丢失</span>
          <span>胜</span>
          <span>平</span>
          <span>负</span>
          <span>胜率</span>
        </div>
        <div class="trs" v-for="(item,index) in 3" :key="index">
          <span>总计</span>
          <span>14</span>
          <span>8.4</span>
          <span>4.5</span>
          <span>3.9</span>
          <span>6</span>
          <span>2</span>
          <span>6</span>
          <span>42.9%</span>
        </div>
      </div>
    </div>
    <!-- 进球时间分布 -->
    <div class="rtd">
      <div class="title">进球角球时间分布</div>
      <div class="team">
        <p>
          <img src="@/assets/images/instantscore/lwp@2x.png" alt />利物浦
        </p>
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
      </div>
      <div class="echarts">
        <div class="mychart" ref="myChart1"></div>
      </div>
    </div>
    <!-- 本赛季数据统计比较 -->
    <div class="comparison">
      <div class="title">本赛季数据统计比较</div>
      <div class="tabs">
        <span :class="currid1==0?'active':''" @click="changecurrid1(0)">战绩统计</span>
        <span :class="currid1==1?'active':''" @click="changecurrid1(1)">得失球统计</span>
        <span :class="currid1==2?'active':''" @click="changecurrid1(2)">净胜球统计</span>
      </div>
      <div class="team">
        <img src="@/assets/images/instantscore/lwp@2x.png" alt />
        <span>利物浦</span>
      </div>
      <div class="progress">
        <div class="zong">
          <div class="left">总</div>
          <div class="right">
            <div class="proItem">
              <span class="sheng">胜</span>
              <van-progress
                :show-pivot="false"
                color="#f55e53"
                :percentage="92"
                class="vanprogress"
                track-color="#f0f0f0"
              />
              <span class="bai">92%</span>
              <span class="sheng">[26场]</span>
            </div>
            <div class="proItem">
              <span class="sheng">平</span>
              <van-progress
                :show-pivot="false"
                color="#f55e53"
                :percentage="3"
                class="vanprogress"
                track-color="#f0f0f0"
              />
              <span class="bai">92%</span>
              <span class="sheng">[26场]</span>
            </div>
            <div class="proItem">
              <span class="sheng">输</span>
              <van-progress
                :show-pivot="false"
                color="#f55e53"
                :percentage="92"
                class="vanprogress"
                track-color="#f0f0f0"
              />
              <span class="bai">92%</span>
              <span class="sheng">[26场]</span>
            </div>
          </div>
        </div>
        <div class="zhu">
          <div class="left">主场</div>
          <div class="right">
            <div class="proItem">
              <span class="sheng">胜</span>
              <van-progress
                :show-pivot="false"
                color="#f55e53"
                :percentage="92"
                class="vanprogress"
                track-color="#f0f0f0"
              />
              <span class="bai">92%</span>
              <span class="sheng">[26场]</span>
            </div>
            <div class="proItem">
              <span class="sheng">平</span>
              <van-progress
                :show-pivot="false"
                color="#f55e53"
                :percentage="3"
                class="vanprogress"
                track-color="#f0f0f0"
              />
              <span class="bai">92%</span>
              <span class="sheng">[26场]</span>
            </div>
            <div class="proItem">
              <span class="sheng">输</span>
              <van-progress
                :show-pivot="false"
                color="#f55e53"
                :percentage="92"
                class="vanprogress"
                track-color="#f0f0f0"
              />
              <span class="bai">92%</span>
              <span class="sheng">[26场]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 阵容情况 -->
    <div class="lineup">
      <div class="title">阵容情况</div>
      <div class="lineuppic">
        <div class="team1">
          <img src="@/assets/images/instantscore/lwp@2x.png" alt />
          <p>利物浦 4-3-1-2</p>
        </div>
        <div class="team2">
          <img src="@/assets/images/instantscore/lwp@2x.png" alt />
          <p>曼彻斯特城 4-3-3</p>
        </div>
        <div class="rows">
          <div class="person">
            <img src="@/assets\images\instantscore\clo-bg_i@2x.png" alt />
            <span>凯帕</span>
          </div>
        </div>
        <div class="rows">
          <div class="person">
            <img src="@/assets\images\instantscore\clo-bg_i@2x.png" alt />
            <span>克里斯滕森</span>
          </div>
          <div class="person">
            <img src="@/assets\images\instantscore\clo-bg_i@2x.png" alt />
            <span>里斯.詹姆斯</span>
          </div>
          <div class="person">
            <img src="@/assets\images\instantscore\clo-bg_i@2x.png" alt />
            <span>阿斯皮利昆塔</span>
          </div>
          <div class="person">
            <img src="@/assets\images\instantscore\clo-bg_i@2x.png" alt />
            <span>祖玛</span>
          </div>
        </div>
        <div class="rows">
          <div class="person">
            <img src="@/assets\images\instantscore\clo-bg_i@2x.png" alt />
            <span>克里斯滕森</span>
          </div>
          <div class="person">
            <img src="@/assets\images\instantscore\clo-bg_i@2x.png" alt />
            <span>里斯.詹姆斯</span>
          </div>
          <div class="person">
            <img src="@/assets\images\instantscore\clo-bg_i@2x.png" alt />
            <span>阿斯皮利昆塔</span>
          </div>
          <div class="person">
            <img src="@/assets\images\instantscore\clo-bg_i@2x.png" alt />
            <span>祖玛</span>
          </div>
        </div>
        <div class="rows">
          <div class="person">
            <img src="@/assets\images\instantscore\clo-bg_i@2x.png" alt />
            <span>克里斯滕森</span>
          </div>
          <div class="person">
            <img src="@/assets\images\instantscore\clo-bg_i@2x.png" alt />
            <span>祖玛</span>
          </div>
        </div>
        <div class="addheight"></div>
        <div class="rows">
          <div class="person">
            <img src="@/assets\images\instantscore\clo-bg2_i@2x.png" alt />
            <span>斯特林</span>
          </div>
          <div class="person">
            <img src="@/assets\images\instantscore\clo-bg2_i@2x.png" alt />
            <span>斯特林</span>
          </div>
          <div class="person">
            <img src="@/assets\images\instantscore\clo-bg2_i@2x.png" alt />
            <span>斯特林</span>
          </div>
        </div>
        <div class="rows">
          <div class="person">
            <img src="@/assets\images\instantscore\clo-bg2_i@2x.png" alt />
            <span>斯特林</span>
          </div>
          <div class="person">
            <img src="@/assets\images\instantscore\clo-bg2_i@2x.png" alt />
            <span>斯特林</span>
          </div>
          <div class="person">
            <img src="@/assets\images\instantscore\clo-bg2_i@2x.png" alt />
            <span>斯特林</span>
          </div>
        </div>
        <div class="rows">
          <div class="person">
            <img src="@/assets\images\instantscore\clo-bg2_i@2x.png" alt />
            <span>斯特林</span>
          </div>
          <div class="person">
            <img src="@/assets\images\instantscore\clo-bg2_i@2x.png" alt />
            <span>斯特林</span>
          </div>
          <div class="person">
            <img src="@/assets\images\instantscore\clo-bg2_i@2x.png" alt />
            <span>斯特林</span>
          </div>
          <div class="person">
            <img src="@/assets\images\instantscore\clo-bg2_i@2x.png" alt />
            <span>斯特林</span>
          </div>
        </div>
        <div class="rows">
          <div class="person">
            <img src="@/assets\images\instantscore\clo-bg2_i@2x.png" alt />
            <span>斯特林</span>
          </div>
        </div>
      </div>
      <div class="legend">
        <p>图例注释</p>
        <div class="rule">
          <ul>
            <li>
              <img src="@/assets\images\instantscore\jinqiu-icon@2x.png" alt />
              <span>进球</span>
            </li>
            <li>
              <img src="@/assets\images\instantscore\dianqiu-icon@2x.png" alt />
              <span>点球</span>
            </li>
            <li>
              <img src="@/assets\images\instantscore\wulongqiu-icon@2x.png" alt />
              <span>乌龙球</span>
            </li>
            <li>
              <img src="@/assets\images\instantscore\shiqiu.png" alt />
              <span>点球未进</span>
            </li>
            <li>
              <img src="@/assets\images\instantscore\yelp.png" alt />
              <span>黄牌</span>
            </li>
            <li>
              <img src="@/assets\images\instantscore\huanren-icon@2x.png" alt />
              <span>换人</span>
            </li>
            <li>
              <img src="@/assets\images\instantscore\jiaoqiu-icon@2x.png" alt />
              <span>角球</span>
            </li>
            <li>
              <img src="@/assets\images\instantscore\zhugong.png" alt />
              <span>助攻</span>
            </li>
            <li>
              <img src="@/assets\images\instantscore\lianghuangyihong-icon@2x.png" alt />
              <span>两黄一红</span>
            </li>
            <li>
              <img src="@/assets\images\instantscore\redp.png" alt />
              <span>红牌</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="lineupoverview">
        <span>阵容概述</span>
        <span>主队阵容</span>
        <span>客队阵容</span>
      </div>
      <div class="lineupissues">
        <p class="theme">阵容不行</p>
        <p
          class="text"
        >根据官方最新给出的曼彻斯特城VS利物浦首发阵容和阵型，曼彻斯特城采用4-3-3阵型，中央海岸水手使用4-3-1-3-2阵型，双方阵型不同。双方采用了不痛的阵型，阵型之间并未强弱优势，只看谁将自己的技战术与阵型结合更完美。</p>
      </div>
      <div class="substitute">
        <p>本场替补</p>
        <div class="sub">
          <p>
            <img src="@/assets/images/instantscore/lwp@2x.png" alt />
            利物浦
          </p>
          <p>
            曼彻斯特城
            <img src="@/assets/images/instantscore/lwp@2x.png" alt />
          </p>
        </div>
        <div class="tibu">
          <div class="info">
            <p>
              <img src="@/assets\images\instantscore\df-icon@2x.png" alt />
              若日尼奥
            </p>
            <p>
              布拉沃
              <img src="@/assets\images\instantscore\df-icon@2x.png" alt />
            </p>
          </div>
          <div class="info">
            <p>
              <img src="@/assets\images\instantscore\df-icon@2x.png" alt />
              若日尼奥
            </p>
            <p>
              布拉沃
              <img src="@/assets\images\instantscore\df-icon@2x.png" alt />
            </p>
          </div>
          <div class="info">
            <p>
              <img src="@/assets\images\instantscore\df-icon@2x.png" alt />
              若日尼奥
            </p>
            <p>
              布拉沃
              <img src="@/assets\images\instantscore\df-icon@2x.png" alt />
            </p>
          </div>
        </div>
      </div>

      <div class="shangting">
        <p>伤停信息</p>
        <div class="sub">
          <p>
            <img src="@/assets/images/instantscore/lwp@2x.png" alt />
            利物浦
          </p>
          <p>
            曼彻斯特城
            <img src="@/assets/images/instantscore/lwp@2x.png" alt />
          </p>
        </div>
        <div class="tibu">
          <div class="info">
            <p>
              <img src="@/assets\images\instantscore\injured_icon@2x.png" alt />
              若日尼奥
            </p>
            <p>
              布拉沃
              <img src="@/assets\images\instantscore\injured_icon@2x.png" alt />
            </p>
          </div>
          <div class="info">
            <p>
              <img src="@/assets\images\instantscore\injured_icon@2x.png" alt />
              若日尼奥
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 相关比赛推荐 -->
    <div class="recommend">
      <div class="title">
        <div class="left">
          <span :class="reccurrid==0?'active':''" @click="changereccurrid(0)">相关比赛推荐</span>
          <span :class="reccurrid==1?'active1':''" @click="changereccurrid(1)">相关回放</span>
        </div>
        <div class="right">查看更多></div>
      </div>
      <div class="list">
        <div class="item" v-for="(item,index) in 4" :key="index">
          <div class="rows1">
            <img src="@/assets\images\instantscore\tag_i@2x.png" alt />
            <p>英格兰超级联赛26轮</p>
          </div>
          <div class="rows2">
            <p>
              <img src="@/assets/images/instantscore/lwp@2x.png" alt />乌迪内斯
            </p>
            <span>03月31日</span>
          </div>
          <div class="rows2">
            <p>
              <img src="@/assets/images/instantscore/lwp@2x.png" alt />03月31日
            </p>
            <span>03月31日</span>
          </div>
          <div class="yuce">预测方案</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as scoreInfo from "@/api/instantscore";
export default {
  components: {},
  data() {
    return {
      currid: 0,
      currid1: 0,
      reccurrid: 0,
      value1: 0,
      ballid: 0,
      option1: [
        { text: "全场", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ]
    };
  },
  created() {},
  mounted() {
    this.drawLine();
    this.drawLine1();
    this.getIntelligenceList();
  },
  methods: {
    // 情报数据
    getIntelligenceList() {
      const data = {
        gameId: this.$store.state.score.gameId
      };
      scoreInfo.getIntelligenceList(data).then(res => {
        console.log(res);
      });
    },
    changecurr(index) {
      this.currid = index;
    },
    changeballid(index) {
      this.ballid = index;
    },
    changecurrid1(index) {
      this.currid1 = index;
    },
    changereccurrid(index) {
      this.reccurrid = index;
    },
    // 绘制图表
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.myChart);
      myChart.setOption({
        title: {
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          bottom: 0,
          left: "center",
          data: ["主胜", "客胜", "平手"]
        },
        series: [
          {
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            selectedMode: "single",
            data: [
              { value: 2076860, name: "主胜2076860" },
              { value: 278469, name: "客胜278469" },
              { value: 197896, name: "平手197896" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    },
    // 绘制进球角球图表
    drawLine1() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.myChart1);
      myChart.setOption({
        tooltip: {
          formatter: "{b}<br>{a}：{c}"
        },
        xAxis: [
          {
            type: "category",
            data: ["新都区", "锦江区", "B4", "B5", "N", "D4"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "常住人口数",
            type: "bar",
            itemStyle: {
              normal: {
                color: "#0deaff"
              }
            },
            barWidth: 20,
            // barGap: 1,
            // barCategoryGap: 20,
            data: [5, 3, 5, 5, 14, 13]
          },
          {
            name: "流入人员数",
            type: "bar",
            itemStyle: {
              normal: {
                color: "#e94832"
              }
            },
            barWidth: 20,
            // barGap: 1,
            // barCategoryGap: 20,
            data: [5, 0, 5, 5, 14, 13]
          },
          {
            name: "流出人员数",
            type: "bar",
            itemStyle: {
              normal: {
                color: "#fed808"
              }
            },
            barWidth: 20,
            // barGap: 1,
            // barCategoryGap: 20,
            data: [-5, -3, -5, -5, -14, -13]
          }
        ]
      });
    }
  },
  computed: {},
  watch: {}
};
</script>
<style lang='scss' src="@/assets\css\ph\instantscore\matchanalysis.scss" scoped>
</style>
<style lang="scss">
.clash .seclist .van-dropdown-menu__bar {
  width: 1.7rem;
  height: 0.56rem;
  background-color: #f3f3f3;
  border-radius: 0.28rem;
}
.clash .seclist .van-ellipsis {
  color: #999999;
  font-size: 0.26rem;
}
.paiming .team .right .van-dropdown-menu__bar {
  width: 1.57rem;
  height: 0.56rem;
  background-color: #f3f3f3;
  border-radius: 0.28rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.paiming .team .right .van-ellipsis {
  color: #999999;
  font-size: 0.26rem;
}
.trend .team .van-dropdown-menu__bar {
  width: 1.57rem;
  height: 0.56rem;
  background-color: #f3f3f3;
  border-radius: 0.28rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.trend .team .van-ellipsis {
  color: #999999;
  font-size: 0.26rem;
}
.goaltime .team .van-dropdown-menu__bar {
  width: 1.57rem;
  height: 0.56rem;
  background-color: #f3f3f3;
  border-radius: 0.28rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.goaltime .team .van-ellipsis {
  color: #999999;
  font-size: 0.26rem;
}
.historical .menus .van-dropdown-menu__bar {
  width: 1.57rem;
  height: 0.56rem;
  background-color: #f3f3f3;
  border-radius: 0.28rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.historical .menus .van-ellipsis {
  color: #999999;
  font-size: 0.26rem;
}
.rtd .team .van-dropdown-menu__bar {
  width: 1.57rem;
  height: 0.56rem;
  background-color: #f3f3f3;
  border-radius: 0.28rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.rtd .team .van-ellipsis {
  color: #999999;
  font-size: 0.26rem;
}
</style>