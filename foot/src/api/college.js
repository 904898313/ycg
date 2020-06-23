import request from '@/utils/request'
//彩经学院文章标签
export function getList(params){
    return request({
        url:'/v1/labelInformation/getList',
        method:'GET',
        params
    })
}
//图集
export function picture(params){
    return request({
        url:'/v1/picture/selectPictureByLabel',
        method:'GET',
        params
    })
}
//最新文章 and 获取文章标签
export function newtext(params){
    if(params){//获取当前文章标签
        return request({
            url:'/v1/collegeArticle/newCollege',
            method:'GET',
            params
        })
    }else{//获取最新文章
        return request({
            url:'/v1/collegeArticle/newCollege',
            method:'GET'
        })
    }
}
//彩经学院文章  (文章详情/文章阅读排行/分类获取)
export function collegeArticle(params,data){
    if(data){//文章详情/分类获取
        return request({
            url:'/v1/collegeArticle/find',
            method:'POST',
            params,
            data
        })
    }else{//文章阅读排行
        return request({
            url:'/v1/collegeArticle/find',
            method:'POST',
            params,
            data:{}
        })
    }
}
//相关文章
export function relevanttext(params){
    return request({
        url:'/v1/collegeArticle/aboutCollege',
        method:'GET',
        params,
    })
}

//彩经学院全部视频
export function collegeVideoall(params,data){
    return request({
        url:'/v1/collegeVideo/find',
        method:'POST',
        params,
        data
    })
}
//彩经学院相关视频
export function relevantcollegeVideo(params){
    return request({
        url:'/v1/collegeVideo/selectVideoByLabel',
        method:'GET',
        params
    })
}
//彩经学院分类列表
export function collegeSplendid(params){
    return request({
        url:'/v1/collegeSplendid/find',
        method:'POST',
        params,
        data:{}
    })
}
//彩经学院点赞点踩
export function goodBadRecord(data){
    return request({
        url:'/v1/goodBadRecord/articleGoodBad',
        method:'POST',
        data,
    })
}
//彩经学院文章评论点赞点踩 
export function erjigoodBadRecord(data){
    return request({
        url:'/v1/goodBadRecord/articleCommentGoodBad',
        method:'POST',
        data,
    })
}
//彩经学院文章评论
export function Comment(data){
    return request({
        url:'/v1/collegeArticleComment',
        method:'POST',
        data,
    })
}
//彩经学院文章评论展示 / 获取评论
export function collegeArticleComment(data){
    return request({
        url:'/v1/collegeArticleComment/getList',
        method:'POST',
        data,
    })
}
//彩经学院视频评论展示 / 获取评论
export function GetVideoComment(data){
    return request({
        url:'/v1/collegeArticleComment/getVideoList',
        method:'POST',
        data,
    })
}
//回复文章评论
export function replyComment(data){
    return request({
        url:'/v1/collegeArticleComment/replyComment',
        method:'POST',
        data
    })
}
//彩经学院视频评论
export function commentVideo(data){
    return request({
        url:'/v1/collegeArticleComment/commentVideo',
        method:'POST',
        data
    })
}
//回复视频评论
export function replyCommentVideo(data){
    return request({
        url:'/v1/collegeArticleComment/replyCommentVideo',
        method:'POST',
        data
    })
}
//彩经学院视频评论点赞点踩
export function videoCommentGoodBad(data){
    return request({
        url:'/v1/goodBadRecord/videoCommentGoodBad',
        method:'POST',
        data
    })
}


























//彩经学院文章模糊查询
export function queryArticle(params,data){
    return request({
        url:'/v1/collegeArticle/search',
        method:"POST",
        params,
        data
    })
}
//彩经学院视频模糊查询
export function queryVideo(params,data){
    return request({
        url:'/v1/collegeVideo/search',
        method:"POST",
        params,
        data
    })
}
//文章逆序
export function reverseArticle(params){
    return request({
        url:'/v1/collegeArticle/oldCollege',
        method:'GET',
        params
    })
}
//文章正序
export function ForwardArticle(params){
    return request({
        url:'/v1/collegeArticle/newCollege',
        method:'GET',
        params
    })
}
//视频逆序
export function reverseVideo(params){
    return request({
        url:'/v1/collegeVideo/oldCollege',
        method:'GET',
        params
    })
}
//视频正序
export function ForwardVideo(params){
    return request({
        url:'/v1/collegeVideo/newCollege',
        method:'GET',
        params
    })
}