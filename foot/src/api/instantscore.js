import request from '@/utils/request'

// ---------------------------------------- 即时比分列表数据 --------------------------------------

// 比分模块首页列表
export function getscoreList(data) {
    return request({
        url: '/v1/gameInfo/getListView',
        method: 'POST',
        data: data
    })
}

// 比分模块赛程数据
export function getScheduleList(data) {
    return request({
        url: '/v1/against/gameStroke',
        method: 'POST',
        data: data
    })
}

// 比分模块关注列表数据
export function getFollowList(data) {
    return request({
        url: '/v1/gameFollow/getList',
        method: 'POST',
        data: data
    })
}

// 初始化首页球队对比信息
export function getLeagueTitle(data) {
    return request({
        url: '/v1/against/gameView',
        method: 'GET',
        params: data
    })
}


//  ------------------------------对阵分析模块-----------------------------------

// 获取情报数据列表
export function getIntelligenceList(data) {
    return request({
        url: '/v1/gameIntelligence/search',
        method: 'POST',
        data: data
    })
}


// ---------------------------------- 百家欧赔模块 -------------------------------------

// 获取欧赔公司列表
export function ouindemnityCompany(data) {
    return request({
        url: '/v1/europeanIndex/allCompany',
        method: 'GET',
        params: data
    })
}

// 获取欧赔数据列表
export function ouindemnityList(data) {
    return request({
        url: '/v1/europeanIndex/scoreIndex',
        method: 'POST',
        data: data
    })
}


// -------------------------------------- 同赔指数模块----------------------------------



// 获取同赔列表数据
export function sameOddsList(data) {
    return request({
        url: '/v1/bigSmallBallIndex/sameOddsList',
        method: 'POST',
        data: data
    })
}

// ----------------------------------- 指数数据 ----------------------------------

// 必发大额交易数据
export function getBiFaData(data) {
    return request({
        url: '/v1/against/getBiFaData',
        method: 'GET',
        params: data
    })
}

// 大小球盘口统计数据

export function gameListByBigSmallPlate(data) {
    return request({
        url: '/v1/gameInfo/selectGameListByBigSmallPlate',
        method: 'POST',
        data: data
    })
}