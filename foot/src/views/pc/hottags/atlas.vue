<template>
    <div>
        <div class="nav">
            <div 
                class="big"
                v-for="(v,i) in 15"
                :key="i"
            >
                <div class="small">
                    <div class="imgbox">
                        <img src="" alt="" class="bgimg">
                        <div class="bottom">
                            <div>哈雷车U19</div>
                            <div><img src="@/assets/images/college/tu-icon@2x.png" alt="">15张</div>
                        </div>
                    </div>
                    <div class="text">
                        <p>德甲联赛即将启动 那些巨星们都准备好了吗</p>
                        <p><span>2019-10-28</span><span><img src="" alt="">1999</span></p>
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
<style scoped lang="scss">
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
            width: 192px;
            height: 185px;
            border-radius: 4px;
            border: solid 1px #eeeeee;
            background-color: skyblue;
            display: flex;
            flex-direction: column;
            align-items: center;
            .imgbox{
                width: 100%;
                height: 108px;
                background-color: #3094dd;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                .bgimg{
                    width: 100%;
                    height: 100%;
                }
                .bottom{
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 26px;
                    background-color: rgba($color: #000000, $alpha: 0.4);
                    width: 100%;
                    height: 26px;
                    padding: 0 10px;
                    position: absolute;
                    bottom: 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-family: MicrosoftYaHei;
                    font-size: 13px;
                    color: #ffffff;
                    div:nth-child(2){
                        display: flex;
                        align-items: center;
                        img{
                             margin: 0 3px;
                        }
                    }
                }
            }
            .text{
                width:100%;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                padding: 5px 10px;
                p:nth-child(1){
                    font-family: MicrosoftYaHei;
                    font-size: 14px;
                    color: #333333;
                }
                p:nth-child(2){
                    font-family: MicrosoftYaHei;
                    font-size: 14px;
                    color: #999999;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
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

