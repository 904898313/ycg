import request from '@/utils/request'



/********************************************* 我的资料******************************************/

// 获取用户信息
export function globaluserInfo() {
    return request({
        url: '/v1/appUser/userDetail',
        method: 'GET',
    })
}

// 修改个人信息
export function edituserInfo(data) {
    return request({
        url: '/v1/appUser',
        method: 'PUT',
        data: data
    })
}


/******************************************** vip 充值 *******************************************/


// vip充值 @微信支付
export function wechatPay(data) {
    return request({
        url: '/v1/order/wxBuyVip',
        method: 'POST',
        data: data
    })
}

// vip充值 @支付宝支付

export function alisPay(data) {
    return request({
        url: '/v1/order/aliBuyVip',
        method: 'pOST',
        data: data
    })
}

// 会员配置列表查询
export function viplistFind(data) {
    return request({
        url: '/v1/vipConfig/find',
        method: 'POST',
        data: data
    })
}

/********************************************球币充值模块***************************************** */

// 球币配置列表查询
export function ballcoinconfigList(data) {
    return request({
        url: '/v1/ballCoinRecharge/find',
        method: 'POST',
        data: data
    })
}

// 球币微信支付
export function ballcoinWxpay(data) {
    return request({
        url: '/v1/order/wxRechargeBallCoin',
        method: 'POST',
        data: data
    })
}

// 球币充值支付宝支付
export function ballcoinAlispay(data) {
    return request({
        url: '/v1/order/aliRechargeBallCoin',
        method: 'post',
        data: data
    })
}


/********************************************** 消费记录模块 ***************************************** */

// 获取消费记录列表
export function getrecordsList(data, params) {
    return request({
        url: '/v1/expensesRecord/find',
        method: 'POST',
        params: params,
        data: data
    })
}

/********************************************* 系统信息列表 *****************************************/

// 获取系统信息列表
export function getnewsList(data, params) {
    return request({
        url: '/v1/sysMessageRecord/myMessage',
        method: 'POST',
        params: params,
        data: data
    })
}


/********************************************* 意见反馈 *****************************************/

// 意见反馈信息提交
export function submitInfo(data) {
    return request({
        url: '/v1/feedback',
        method: 'POST',
        data: data
    })
}


/********************************************* 记账本 *****************************************/

// 添加一条记录信息 
export function addbooks(data) {
    return request({
        url: '/v1/pocketBook',
        method: 'POST',
        data: data
    })
}

//初始化记账本数据
export function initbooksList(params) {
    return request({
        url: '/v1/pocketBook',
        method: 'GET',
        params: params
    })
}

// 获取月支出收入数据
export function getMonthexpend(params) {
    return request({
        url: '/v1/pocketBook/myPocketBookTitle',
        method: 'GET',
        params: params
    })
}

// 批量逻辑删除记事本记录
export function deletesbook(params) {
    return request({
        url: '/v1/pocketBook',
        method: 'DELETE',
        params: params
    })
}

/********************************************* 帮助中心 *****************************************/

// 初始化数据
export function inithelpList(data) {
    return request({
        url: '/v1/helpCenter',
        method: 'GET',
        params: data
    })
}


/************************************ 系统设置 ***************************************************/

// 绑定手机号
export function bindPhone() {
    return request({
        url: '/ignoreAuth/bindPhone',
        method: 'POST',
        data: data
    })
} 
