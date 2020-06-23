<template>
    <div class="bigbox">
        <pcNavBar></pcNavBar>
        <!-- 导航header -->
        <div class="nav-box">
            <div class="nav">
                <div class="title"><span>帮众体育</span> > 彩经学院</div>
                <div class="nav-list">
                    <div class="first">种类:</div>
                    <div class="nav-class" @click="categoryfun(0)" ref="category" :class="[categorynum===0?'selection':'']">全部</div>
                    <div class="nav-class" @click="categoryfun(1)" ref="category" :class="[categorynum===1?'selection':'']">足球</div>
                    <div class="nav-class" @click="categoryfun(2)" ref="category" :class="[categorynum===2?'selection':'']">篮球</div>
                </div>
                <div class="nav-list">
                    <div class="first">类型:</div>
                    <div class="nav-class"  @click="typefun(0)" ref="category" :class="[typenum===0?'selection':'']">全部</div>
                    <div class="nav-class"  @click="typefun(1)" ref="category" :class="[typenum===1?'selection':'']">文章</div>
                    <div class="nav-class"  @click="typefun(2)" ref="category" :class="[typenum===2?'selection':'']">视频</div>
                </div>
                <div class="nav-list">
                    <div class="first">分类:</div>
                    <div class="nav-class" @click="classificationfun(0)" ref="category" :class="[classificationnum===0?'selection':'']">全部</div>
                    <div class="nav-class" @click="classificationfun(1)" ref="category" :class="[classificationnum===1?'selection':'']">欧赔思维</div>
                    <div class="nav-class" @click="classificationfun(2)" ref="category" :class="[classificationnum===2?'selection':'']">亚盘分析</div>
                    <div class="nav-class" @click="classificationfun(3)" ref="category" :class="[classificationnum===3?'selection':'']">大小秘籍</div>
                    <div class="nav-class" @click="classificationfun(4)" ref="category" :class="[classificationnum===4?'selection':'']">滚球技巧</div>
                    <div class="nav-class" @click="classificationfun(5)" ref="category" :class="[classificationnum===5?'selection':'']">足彩知识</div>
                    <div class="nav-class" @click="classificationfun(6)" ref="category" :class="[classificationnum===6?'selection':'']">复盘解析</div>
                    <div class="nav-class" @click="classificationfun(7)" ref="category" :class="[classificationnum===7?'selection':'']">其他干货</div>
                </div>
                <div class="nav-list last-nav-list">
                    <div class="first">难度:</div>
                    <div class="nav-class" @click="difficultyfun(0)" ref="category" :class="[difficultynum===0?'selection':'']">新手小白</div>
                    <div class="nav-class" @click="difficultyfun(1)" ref="category" :class="[difficultynum===1?'selection':'']">初窥门径</div>
                    <div class="nav-class" @click="difficultyfun(2)" ref="category" :class="[difficultynum===2?'selection':'']">高手进阶</div>
                </div>
            </div>
        </div>
        <!-- 列表详情 -->
        <div class="detail">
            <header>默认排序为时间排序</header>
            <div class="details">


                <div class="cs">


                <div class="contents" v-for="(v,i) in list" :key="i">
                    <div class="imgbox">
                        <img src="@/assets/images/college/qb@3x.png" alt="" class="img">

                            <div class="time">
                                <span>大小秘籍</span>
                            </div>
                    </div>
                    <div class="textbox">
                        <p class="p1">足球大小球技巧有哪些？足球大小球个人心得详解！</p>
                        <p class="p2">足球大小球技巧有哪些？足球大小球个人心得详解！足球大小球技巧有哪些？足球大小球个人心得详解！</p>
                        <p class="p3">
                            <span><img src="@/assets/images/college/browse_i@2x.png" alt="">10</span>
                            <span><img src="@/assets/images/college/comment_i@2x.png" alt="">10</span>
                            <span><img src="@/assets/images/college/tags_i@2x.png" alt="">10</span>
                        </p>
                    </div>
                </div>


                </div>

            </div>
            <el-pagination
            background
            layout="prev, pager, next"
            :total="100"
            class="paging">
            </el-pagination>
            <div class="last">.</div>
        </div>
        <pcFooter></pcFooter>
    </div>
</template>

<script>
  export default {
    data() {
      return {
          list:[1,1,1,1,1,1,1,1,1,1],
          categorynum:0,
          typenum:0,
          classificationnum:0,
          difficultynum:0
      };
    },
    created() {

    },
    methods: {
        categoryfun(i){
            this.categorynum = i;
        },
        typefun(i){
            this.typenum = i;
        },
        classificationfun(i){
            this.classificationnum = i;
        },
        difficultyfun(i){
            this.difficultynum = i;
        }
    }
  };
</script>

<style src="@/assets/css/pc/college/list.scss" lang="scss" scoped></style>
