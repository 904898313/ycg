<template>
    <div class="bigbox">
        <!-- 基本信息 -->
        <div class="head">
            <div class="heads"><span class="weight">基本信息</span></div>
            <div class="heads"><span>球队总身价</span><span class="two">1546万英镑</span></div>
            <div class="heads"><span>球队平均年龄</span><span class="two">21岁</span></div>
            <div class="heads"><span>球队阵容数量</span><span class="two">16人</span></div>
        </div>
        <!-- bg -->
        <div class="bg"></div>
        <!-- 球队阵容 -->
        <div class="lineup">
            <header><span>球队阵容</span></header>
            <!-- 主教练 -->
            <div class="coach">
                <div class="tit">
                    <span>主教练</span>
                </div>
                <div class="content">
                    <div class="left">
                        <img src="" alt="">
                        <div class="text">
                            <p class="name">萨拉赫</p>
                            <p>57岁.英格兰</p>
                        </div>
                    </div>
                    <div class="right">
                        <p>身价：175万英镑</p>
                        <p>日期：2019-06-30至2019-06-30</p>
                    </div>
                </div>
            </div>
            <!-- 球员 -->
            <!-- 前锋 -->
            <div class="player">
                <div class="tit public">
                    <div>前锋</div>
                    <p>截至日期</p>
                    <p>身价(英镑)</p>
                    <p>首发次数/进球</p>
                </div>
                <div class="content public" v-for="index in 4" :key="index">
                    <div class="left">
                        <img src="" alt="">
                        <div class="text">
                            <span class="name">萨拉赫</span>
                            <span>57岁.11号.英格兰</span>
                        </div>
                    </div>
                    <p><span>1897</span><span>06-20</span></p>
                    <p>175万</p>
                    <p>67/8</p>
                </div>
            </div>
            <!-- 中场 -->
            <div class="player">
                <div class="tit public">
                    <div>中场</div>
                    <p>截至日期</p>
                    <p>身价(英镑)</p>
                    <p>首发次数/进球</p>
                </div>
                <div class="content public" v-for="index in 4" :key="index">
                    <div class="left">
                        <img src="" alt="">
                        <div class="text">
                            <span class="name">萨拉赫</span>
                            <span>57岁.11号.英格兰</span>
                        </div>
                    </div>
                    <p><span>1897</span><span>06-20</span></p>
                    <p>175万</p>
                    <p>67/8</p>
                </div>
            </div>
            <!-- 后卫 -->
            <div class="player">
                <div class="tit public">
                    <div>后卫</div>
                    <p>截至日期</p>
                    <p>身价(英镑)</p>
                    <p>首发次数/进球</p>
                </div>
                <div class="content public" v-for="index in 4" :key="index">
                    <div class="left">
                        <img src="" alt="">
                        <div class="text">
                            <span class="name">萨拉赫</span>
                            <span>57岁.11号.英格兰</span>
                        </div>
                    </div>
                    <p><span>1897</span><span>06-20</span></p>
                    <p>175万</p>
                    <p>67/8</p>
                </div>
            </div>
            <!-- 门将 -->
            <div class="player">
                <div class="tit public">
                    <div>门将</div>
                    <p>截至日期</p>
                    <p>身价(英镑)</p>
                    <p>首发次数/进球</p>
                </div>
                <div class="content public">
                    <div class="left">
                        <img src="" alt="">
                        <div class="text">
                            <span class="name">萨拉赫</span>
                            <span>57岁.11号.英格兰</span>
                        </div>
                    </div>
                    <p><span>1897</span><span>06-20</span></p>
                    <p>175万</p>
                    <p>67/8</p>
                </div>
            </div>

        </div>
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
    methods: {

    }
  };
</script>

<style src="@/assets/css/ph/footballdata/teamdata/lineup.scss" lang="scss" scoped></style>
}