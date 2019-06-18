export const state = () => ({
    time: null
})

export const mutations = {
    SET_TIME(state, time) {
        state.time = time
    }
}

export const actions = {
    ASYNC_SET_TIME({commit,time}){
        commit('SET_TIME',time)
    }
}
