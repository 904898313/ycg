<template>
    <div class="list">
        <div class="conents" v-for="index in 4" :key="index">
            <div class="imgbox"><img src="" alt=""></div>
            <div class="textbox">
                <p>足球战争是怎么回事？足球为什么是和平年代的战争？</p>
                <p>受到疫情的影响，NBA无限期停赛。对于勇士勇士球迷来说，这个赛季打不打其实无所谓了。勇士主教练科尔在接表示：勇士这个赛季是几乎结束了，
                    球队的目标的目标的目标是准备下一个赛季。对于勇士队来说...<span>[全文]</span>
                </p>
                <p>
                    <span>发布于2020-01-06 16:23:45</span>
                    <span><img src="@/assets/images/college/browse_i@2x.png" alt="">763</span>
                    <span><img src="@/assets/images/college/comment_i@2x.png" alt="">7</span>
                </p>
            </div>
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

.list{
    width: 100%;
    height: 100%;
    padding: 0 20px;
    .conents{
        width: 100%;
        height: 140px;
        padding: 20px 0;
        border-bottom: 1px dashed #eee;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .imgbox{
            width: 180px;
            height: 100px;
            background-color: skyblue;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .textbox{
            flex: 1;
            height: 100%;
            margin-left: 18px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            p:nth-child(1){
                font-family: MicrosoftYaHei-Bold;
                font-size: 16px;
                color: #333333;
                font-weight: 900;
            }
            p:nth-child(2){
                font-family: MicrosoftYaHei;
                font-size: 12px;
                color: #333333;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                word-break: break-all;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                span{
                    font-family: MicrosoftYaHei;
                    font-size: 12px;
                    color: #0066c0;
                    cursor: pointer;
                }
            }
            p:nth-child(3){
                font-family: MicrosoftYaHei;
                font-size: 12px;
                color: #999999;
                display: flex;
                span{
                    margin-right: 20px;
                    display: flex;
                    align-items: center;
                    img{
                        margin-right: 3px;
                    }
                }
            }
        }
    }
}
</style>

