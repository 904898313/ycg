<template>
  <div class="integralBox">
    <div class="navTitle">
      <b>积分榜</b>
      <p><span>查看更多</span><van-icon class="nav_icon" name="arrow" color="#999999" size="12"/></p>
    </div>
    <van-tabs color="#ffc002" :border="false">
      <template v-for="(item,index) in leagueList">
        <van-tab :title="item.name"></van-tab>
      </template>
    </van-tabs>
    <ul class="table_header">
      <li>球队</li>
      <li>场次</li>
      <li>胜</li>
      <li>平</li>
      <li>负</li>
      <li>进失</li>
      <li>积分</li>
    </ul>
    <ul class="table_list">
      <li v-for="(item,index) in teamPoints">
        <ul class="table_item_list">
          <li><span :style="{color:teamRankColor(index)}">{{index+1}}</span>{{item.name}}</li>
          <li>{{item.num}}</li>
          <li>{{item.num}}</li>
          <li>{{item.num}}</li>
          <li>{{item.num}}</li>
          <li>{{item.num}}/{{item.num}}</li>
          <li>{{item.num}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navIndex: 0,
        // 联赛名称
        leagueList:[
          {id: 0,name:'中超'},
          {id: 0,name:'亚冠'},
          {id: 0,name:'英超'},
          {id: 0,name:'欧冠'},
          {id: 0,name:'西甲'},
          {id: 0,name:'意甲'},
          {id: 0,name:'德甲'},
          {id: 0,name:'法甲'}
        ],
        // 球队积分
        teamPoints:[
          {id: 0,name:'利物浦',num: 0},
          {id: 0,name:'利物浦',num: 0},
          {id: 0,name:'利物浦',num: 0},
          {id: 0,name:'利物浦',num: 0},
          {id: 0,name:'利物浦',num: 0},
          {id: 0,name:'利物浦',num: 0}
        ]
      };
    },
    created() {

    },
    methods: {
      // 排行榜状态
      teamRankColor(idx){
        if(idx === 0){
          return '#c01e2f'
        }else if(idx === 1){
          return '#f59026'
        }else if(idx === 2){
          return '#f4dc26'
        }else {
          return ''
        }
      }
    }

  };
</script>

<style src="../../../../assets/css/ph/home/integral.scss" lang="scss" scoped></style>
