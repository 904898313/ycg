<template>
    <div class="large">
        <div class="tou">
            <img src="@/assets/images/footballdata/back_i2@2x.png" alt="" @click="go">
            <span>帮众体育</span>
            <img src="@/assets/images/footballdata/share_i@2x.png" alt="">
        </div>
        <div class="bigbox">
            <div class="title">
                北青：2021年世俱杯延期成必然，2020年冬季举办最理想北青：2021年世俱杯延期成必然，2020年冬季举办最理想北青：2021年世俱杯延期成必然，2020年冬季举办最理想
            </div>
            <div class="time"><span>来源：帮众体育</span><span>2020-03-23 16:02 </span><span><img src="@/assets/images/college/browse_i@2x.png" class="picture" alt=""><span>20</span></span></div>
            <div class="nav">
                <p>文章导读</p>
                <p>新赛季NBA即将到来，为大家带来新赛季NBA诸强巡礼，这一次我们先讲讲西部的强队们，看看谁能笑到最后。</p>
                <p><span class="text">本文大概 <span class="number">1912</span> 字，阅读大概需要 <span  class="number">6</span> 分钟</span></p>
            </div>
            <div class="content">
                <p class="content-text">欧足联、南美洲足联3月17日先后通过官方渠道确认，原计划于今夏举行的2020年欧洲杯、美洲杯赛事，受疫情影响双双延至一年后举行。那么原定于2021夏天在中国举行的首届改制后的国际足联俱乐部世界杯赛会否相应调整赛期？答案是肯定的。据悉，国际足联北京时间3月18日凌晨已表态，支持具体方案将根据国际足联与包括世具备组委会中国足球协会等的结果而定。 </p>
                <img src="" alt="">
                <p class="content-title">国际足联理事会会议</p>
                <p class="content-text">欧足联、南美洲足联3月17日先后通过官方渠道确认，原计划于今夏举行的2020年欧洲杯、美洲杯赛事，受疫情影响双双延至一年后举行。那么原定于2021夏天在中国举行的首届改制后的国际足联俱乐部世界杯赛会否相应调整赛期？答案是肯定的。据悉，国际足联北京时间3月18日凌晨已表态，支持具体方案将根据国际足联与包括世具备组委会中国足球协会等的结果而定。 </p>
                <p class="content-text">欧足联、南美洲足联3月17日先后通过官方渠道确认，原计划于今夏举行的2020年欧洲杯、美洲杯赛事，受疫情影响双双延至一年后举行。那么原定于2021夏天在中国举行的首届改制后的国际足联俱乐部世界杯赛会否相应调整赛期？答案是肯定的。据悉，国际足联北京时间3月18日凌晨已表态，支持具体方案将根据国际足联与包括世具备组委会中国足球协会等的结果而定。 </p>
                <p class="edit">责任编辑：admin</p>
                <div class="newnba">
                    <div>NBA巡礼</div>
                    <div>新赛季NBA</div>
                </div>
                <div class="copyright">版权声明：本文由帮众体育原创，转载请注明出处。</div>
                <div class="updown">
                    <div>上一篇：一心想从事体育行业，能赚钱吗？</div>
                    <div>下一篇：跪求 米尔萨的真实身高和臂展是多少？</div>
                </div>
            </div>
        </div>
        <!-- 隔层 -->
        <div class="bgbox"></div>
        <!-- 相关文章 -->
        <div class="content-bigbox">
            <header><span>相关文章</span><span>查看更多<img src="@/assets/images/college/next_i@2x.png" alt=""></span></header>
            <!-- 遍历内容区 -->
            <div class="content-box"  v-for="(v,i) in ghwj" :key="i">
                <div class="content-imgbox">
                <img src="" alt="">
                </div>
                <div class="content-textbox">
                <p>西甲有默契球吗？西甲有哪些默契球？</p>
                <p><span>2020-02-07</span><span class="imgspan"><img src="@/assets/images/college/comment_i@2x.png" alt=""><span>0</span></span><span class="imgspan"><img src="@/assets/images/college/browse_i@2x.png" alt=""><span>20</span></span><span class="imgspan"><img src="@/assets/images/college/tags_i@2x.png" alt=""><span>0</span></span></p>
                </div>
            </div>
        </div>
        <!-- 隔层 -->
        <div class="bgbox"></div>
        <!-- 相关图集 -->
        <div class="content-bigbox">
            <header><span>相关图集</span><span>查看更多<img src="@/assets/images/college/next_i@2x.png" alt=""></span></header>
            <!-- 遍历内容区 -->
            <div class="atlas">
                <div class="imgbox" v-for="index in 3 " :key="index">
                    <div class="mask">
                        <p>足球战争是怎么回事足球战争是怎么回事足球战争是怎么回事</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 隔层 -->
        <div class="bgbox"></div>
        <!-- 相关视频 -->
        <div class="content-bigbox">
            <header><span>相关视频</span><span>查看更多<img src="@/assets/images/college/next_i@2x.png" alt=""></span></header>
            <!-- 遍历内容区 -->
            <div class="video">
                <div class="imgbox">
                    <div class="mask">
                        <p><img src="" alt="">席尔瓦精彩集锦！曼城真核！</p>
                        <p>2020/03/18 14:50:13 <span>·</span> 12314人看过</p>
                    </div>
                    <div class="time">
                        <span>时长：</span><span>08:18</span>
                    </div>
                </div>
                <div class="texts">
                    <p v-for="index in 4" :key="index"><span></span>无可奈何 当世界最强防守球员遭遇梅西</p>
                </div>
                
            </div>
        </div>

        <!-- 隔层 -->
        <div class="bgbox"></div>
        <!-- 回复 -->
        <div class="reply">
            <div class="reply-title">3个回答</div>
            <div class="reply-content" v-for="index in 3" :key="index">
                <div class="reply-imgbox">
                    <img src="" alt="">
                </div>
                <div class="reply-textbox">
                    <p><span>小猪佩奇粉红猪</span><span>举报</span></p>
                    <p>这个问题由我帮你来回答,当初刚开始的时候我也是走了很多弯路，对于大小球的玩法，虽对于大小球的玩法，虽</p>
                    <p>
                        <span>03-12 12:23 · </span>
                        <span class="reply-btn">回复</span>
                        <span class="fabulous"><img src="@/assets/images/college/applaud_i2@2x.png" alt="">23</span>
                        <span class="nofabulous"><img src="@/assets/images/college/against_i2@2x.png" alt="">0</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="comment">
            <div class="inputbox">
                <input type="text" class="comment-text" placeholder="写下您的观点...">
                <img src="@/assets/images/college/edit_i@2x.png" alt="">
            </div>
            <div class="comment-send">发送</div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
          ghwj:[1,2,3],
          Label:["中超","英超","西甲","意甲","德甲","法甲","欧冠","欧联","亚冠","中甲"],
          select:1
      };
    },
    created() {

    },
    methods: {
        newfun(i){
            this.select = i;
        },
        go(){
            this.$router.go(-1)
        }
    }
  };
</script>

<style src="@/assets/css/ph/college/text.scss" lang="scss" scoped></style>