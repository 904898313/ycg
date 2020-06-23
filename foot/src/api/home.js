import request from '@/utils/request'

/********************************************* PC******************************************/
// 热门资讯
export function hotInformation(data) {
  return request({
    url: '/v1/hotInformation/find',
    method: 'POST',
    params: data,
    data:{}
  })
}
// 赛事列表
export function getEventList(data) {
  return request({
    url: '/v1/matchCategory/getHotList',
    method: 'POST',
    params: data,
    data: {}
  })
}
// 球队列表
export function getTeamList(data) {
  return request({
    url: '/v1/teamInfo',
    method: 'GET',
    params: data
  })
}
// 比赛列表
export function gameInfoList(data) {
  return request({
    url: '/v1/gameInfo/find',
    method: 'POST',
    params: data,
    data: {}
  })
}
// 积分榜
export function getIntegralInfo(params,data) {
  return request({
    url: '/v1/integralInfo/find',
    method: 'POST',
    params: params,
    data: data
  })
}
// 彩经学院图文
export function getCollegeList(params) {
  return request({
    url: '/v1/collegeArticle/find',
    method: 'POST',
    params: params,
    data: {}
  })
}
// 足球问答
export function getHotQuestionList() {
  return request({
    url: '/v1/question/selectQuestionList',
    method: 'GET'
  })
}
// 彩经学院视频
export function getCollegeVidelList(params) {
  return request({
    url: '/v1/collegeVideo/find',
    method: 'POST',
    params: params,
    data: {}
  })
}
