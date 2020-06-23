<template>
  <div>
    <div class="hot">
      <div class="title">
        <span>热门赛事直播</span>
        <div class="lines">
          <span></span>
          <i></i>
        </div>
      </div>
      <div class="hotlist">
        <span v-for="(item,index) in hotlist" :key="index">{{item.name}}</span>
      </div>
    </div>
    <div class="video">
      <div class="title">
        <span>足球经典录像</span>
        <div class="lines">
          <span></span>
          <i></i>
        </div>
      </div>
      <div class="videoList">
        <div class="info" v-for="(item,index) in videoList" :key="index">
          <i
            :class="{'color1':item.index==1,'color2':item.index==2,'color3':item.index==3}"
          >{{item.index}}</i>
          <span>{{item.text}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotlist: [
        {
          id: "0",
          name: "英超直播"
        },
        {
          id: "1",
          name: "西甲直播"
        },
        {
          id: "2",
          name: "意甲直播"
        },
        {
          id: "3",
          name: "德甲直播"
        },
        {
          id: "4",
          name: "法甲直播"
        },
        {
          id: "5",
          name: "中超直播"
        },
        {
          id: "6",
          name: "亚冠直播"
        },
        {
          id: "7",
          name: "中甲直播"
        },
        {
          id: "8",
          name: "欧冠直播"
        },
        {
          id: "9",
          name: "欧联直播"
        }
      ],
      videoList: [
        {
          index: "1",
          text: "3月10日意甲萨索洛vs布雷西亚录像回放"
        },
        {
          index: "2",
          text: "3月17日俄超坦波夫斯巴达vs苏维埃之翼视频..."
        },
        {
          index: "3",
          text: "3月10日意甲萨索洛vs布雷西亚录像回放"
        },
        {
          index: "4",
          text: "3月10日意甲萨索洛vs布雷西亚录像回放"
        },
        {
          index: "5",
          text: "3月10日意甲萨索洛vs布雷西亚录像回放"
        }
      ],
      lightsList: [
        {
          text: "阿圭罗转身劲射破门 博阿松门前补射扳平"
        },
        {
          text: "此球只应天上有！古蒂“上帝脚后跟”让对方门将投降"
        },
        {
          text: "C罗任意球破门最窒息 皇马本赛季夺冠精彩时刻"
        },
        {
          text: "无可奈何 当世界最强防守球员遭遇梅西"
        }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>

<style src="@/assets/css/pc/match/recommend.scss" lang="scss" scoped></style>