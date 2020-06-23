<template>
    <div class="bigbox">
        <ph-nav-bar navActivate='彩经学院'></ph-nav-bar>
        <!-- 课程分类 -->
        <div class="header">
            <p 
                v-for="(item,index) in headerlist" 
                :key="index"
                @click="headerfun(index)"
                :class="headernum === index?'select':''"
            >
                <span></span>
                {{item}}
            </p>
        </div>
        <div class="content">
            <!-- 类型/排序 -->
            <van-dropdown-menu active-color="#ffc002">
                <van-dropdown-item :title="vant1" ref="item1">
                    <div class="vant_big">
                        <div 
                            class="vant_small" 
                            v-for="(item,index) in vantlist1" 
                            :key="index"
                            @click="selectfun1(index)"
                        >
                            {{item.name}}
                        </div>
                    </div>
                </van-dropdown-item >
                <van-dropdown-item :title="vant2" ref="item2">
                    <div class="vant_big">
                        <div 
                            class="vant_small" 
                            v-for="(item,index) in vantlist2" 
                            :key="index"
                            @click="selectfun2(index)"
                        >
                            {{item.text}}
                        </div>
                    </div>
                </van-dropdown-item >
                <van-dropdown-item :title="vant3" ref="item3">
                    <div class="vant_big">
                        <div 
                            class="vant_small" 
                            v-for="(item,index) in vantlist3" 
                            :key="index"
                            @click="selectfun3(index)"
                        >
                            {{item.text}}
                        </div>
                    </div>
                </van-dropdown-item >
            </van-dropdown-menu>
            <!-- 列表 -->
            <div class="body">
                <div class="bodys" v-for="index in 10" :key="index">
                    <div class="imgbox">
                        <img src="" alt="">
                    </div>
                    <div class="textbox">
                        <div>欧冠杯小组赛有哪些规律？欧冠欧冠杯小组赛有哪些规律？欧冠...</div>
                        <div>
                            <p>欧赔思维</p>
                            <p>初级</p>
                        </div>
                        <div>
                            <p>2020-02-07</p>
                            <p><img src="" alt="">0</p>
                            <p><img src="" alt="">0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <ph-footer></ph-footer>
    </div>
</template>

<script>
import * as college from "@/api/college";
  export default {
    data() {
      return {
            headerlist:[
                '全部教程',
                '免费课程',
                '付费课程',
            ],
            headernum:0,
            vant1: '全部教程',
            // vantlist1:[
            //     {
            //         text:'全部教程',
            //     },
            //     {
            //         text:'欧赔思维',
            //     },
            //     {
            //         text:'亚盘分析',
            //     },
            //     {
            //         text:'大小秘籍',
            //     },
            //     {
            //         text:'滚球技巧',
            //     },
            //     {
            //         text:'足彩知识',
            //     },
            //     {
            //         text:'复盘解析',
            //     },
            //     {
            //         text:"其他干货",
            //     },
            //     {
            //         text:'足球资料',
            //     },
            // ],
            vantlist1:[],
            vant2: '文章类型',
            vantlist2:[
                {
                    text:'文章类型',
                },
                {
                    text:'视频类型',
                },
            ],
            vant3: '时间正序',
            vantlist3:[
                {
                    text:'时间正序',
                },
                {
                    text:'时间逆序',
                },
            ],
      };
    },
    created() {
        // this.collegeArticle();//彩经学院文章
        this.collegeSplendid();//彩经学院分类列表
    },
    methods: {
        headerfun(index){
            this.headernum = index;
        },
        selectfun1(index){
            this.vant1 = this.vantlist1[index].name;
            this.$refs.item1.toggle();
        },
        selectfun2(index){
            this.vant2 = this.vantlist2[index].text;
            this.$refs.item2.toggle();
        },
        selectfun3(index){
            this.vant3 = this.vantlist3[index].text;
            this.$refs.item3.toggle();
        },
        //接口
        collegeArticle(){//彩经学院文章
            let params = {
                size:1,
                current:10
            }
            let data = {
                kind:0,
                classifyId:"1259007209454968833"
            }
            college.collegeArticle(params,data).then((res)=>{
                console.log(res);
            })
        },
        collegeSplendid(){//彩经学院分类列表
            let params = {
                size:10,
                current:1,
            }
            college.collegeSplendid(params).then((res)=>{
                console.log(res);
                this.vantlist1 = res.data.data.records
            })
        }
    }
  };
</script>

<style src="@/assets/css/ph/college/college1.scss" lang="scss" scoped></style>
