import request from '@/utils/request'
//get
// 栏目列表
export function getrecordsList() {
    return request({
        url: '/v1/classify/selectClassifyList',
        method: 'GET'
    })
}
// 分类获取
export function gitclass(params) {
    return request({
        url: '/v1/question/selectQuestionList',
        method: 'GET',
        params:params
    })
}
//问答列表//全部获取
export function questionsList() {
    return request({
        url: '/v1/question/selectQuestionList',
        method: 'GET'
    })
}
//回答详情
export function questionsdetails(params) {
    return request({
        url: '/v1/answer/answerAndQuestionDetails',
        method: 'GET',
        params,
    })
}   
//举报list
export function informlist() {
    return request({
        url: '/v1/inform',
        method: 'GET'
    })
}

//推荐问答
export function recommendQuestion(params) {
    return request({
        url: '/v1/question/recommendQuestion',
        method: 'GET',
        params:params,
    })
}
//热门回答
export function hotQuestion() {
    return request({
        url: '/v1/question/hotQuestion',
        method: 'GET'
    })
}

//问答标签列表
export function labellist(params) {
    return request({
        url: '/v1/labelInformation/getList',
        method: 'GET',
        params
    })
}

// ----------------------------------------------------------------------------------------
//post
//提出问题
export function question(datas) {
    return request({
        url: '/v1/question',
        method: 'POST',
        data:datas,
    })
} 
//回答问题
export function answer(datas) {
    return request({
        url: '/v1/answer',
        method: 'POST',
        data:datas,
    })
}
//回复评论
export function replyAnswer(datas) {
    return request({
        url: '/v1/answer/replyAnswer',
        method: 'POST',
        data:datas,
    })
}
//点赞点踩
export function goodBadRecord(datas) {
    return request({
        url: '/v1/goodBadRecord',
        method: 'POST',
        data:datas,
    })
}
//提交举报
export function inform(datas) {
    return request({
        url: '/v1/inform',
        method: 'POST',
        data:datas,
    })
}


// ---------------------------------------------------------------------------
//上传图片
export function uploadImageAndCrtThumbImages(datas) {
    return request({
        url: '/file/uploadImageAndCrtThumbImages',
        method: 'POST',
        data:datas,
    })
}
