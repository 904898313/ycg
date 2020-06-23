import request from '@/utils/request'

// 热门资讯
export function getHotnews(params, data) {
    return request({
        url: '/v1/hotInformation/find',
        method: 'POST',
        params: params,
        data: data
    })
}

// 最新资讯
export function getnewsInfo(params, data) {
    return request({
        url: '/v1/hotInformation/find/new',
        methods: 'GET',
        params: params,
        data: data
    })
}


// 获取标签列表
export function getTagsList(data) {
    return request({
        url: '/v1/labelInformation/getList',
        methods: 'GET',
        data: data
    })
}