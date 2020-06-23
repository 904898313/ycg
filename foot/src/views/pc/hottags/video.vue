<template>
    <div class="big">
        <div class="nav">
            <div 
                class="big"
                v-for="(v,i) in 15"  
                :key="i"
            >
                <div class="small">
                    <div class="imgbox">
                        <img src="" alt="" class="bgimg">
                        <div class="play"><img src="@/assets/images/college/bofang-icon@2x.png" alt=""><span>4:30</span></div>
                    </div>
                    <div class="text">
                        <p>欧联杯规律盘点 欧联杯避坑认准西甲英超</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="paging">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="60"
                prev-text="上一页"
                next-text="下一页"
            >
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    }
}
</script>
<style lang="scss">
.paging{
    .el-pagination.is-background .el-pager li:not(.disabled).active{
        background-color: $themeColor;
    }
}
</style>

<style scoped lang="scss">
.big{
    width: 100%;
    height: 100%;
    background-color: #fff;
}
.nav{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 20px;
    .big{
        width: 25%; 
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px; 
        .small{
            width: 185px;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            .imgbox{
                width: 185px;
                height: 138px;
                background-color: skyblue;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                .bgimg{
                    width: 100%;
                    height: 100%;
                }
                .play{	
                    width: 74px;
                    height: 28px;
                    border-radius: 2px;
                    background-color: rgba($color: #000000, $alpha: 0.6);
                    position: absolute;
                    left: 10px;
                    bottom: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    font-family: MicrosoftYaHei;
                    font-size: 14px;
                    color: #ffffff;
                }
            }
            .text{
                width:100%;
                p{
                    font-family: MicrosoftYaHei;
                    font-size: 14px;
                    line-height: 23px;
                    color: #202021;
                    overflow : hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;  //2行
                    -webkit-box-orient: vertical;
                }
            }
        }
    }
}
//分页
.paging{
    width: 850px;
	height: 60px;
	background-color: #fcfcfc;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>

