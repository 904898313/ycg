const score = {
    state: {
        gameId: '' // 球队比赛id
    },
    action: {

    },
    mutations: {
        // 根据球队赛事变更gameId
        getGameId(state, id) {
            state.gameId = id
            console.log(state.gameId)
        }
    }
}

export default score