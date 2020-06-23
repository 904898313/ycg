import request from '@/utils/request'

//获取球队资料
export function getdata(params) {
    return request({
        url: '/v1/teamInfo/getAttack',
        methods: 'GET',
        params
    })
}


// 趣味统计 --- 攻击力
export function getAttack(data) {
    return request({
        url: '/v1/teamInfo/getAttack',
        methods: 'GET',
        params: data
    })
}

// 趣味统计 --- 失球
export function getLost(data) {
    return request({
        url: '/v1/teamInfo/getLost',
        methods: 'GET',
        params: data
    })
}

// 趣味统计 --- 红黄牌
export function getRedYellow(data) {
    return request({
        url: '/v1/teamInfo/getRedYellow',
        methods: 'GET',
        params: data
    })
}

// 积分榜数据
export function getIntegral(data) {
    return request({
        url: '/v1/teamInfo/getIntegral',
        methods: 'GET',
        params: data
    })
}

// 热门球队
export function getHotteams(data) {
    return request({
        url: '/v1/teamInfo/getHotTeam',
        methods: 'GET',
        params: data
    })
}