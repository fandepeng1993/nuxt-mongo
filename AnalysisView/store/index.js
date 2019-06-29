export const state = () => ({
    time: null,
})

export const mutations = {
    SET_TIME(state, time) {
        state.time = time
    },
}

export const actions = {
    nuxtServerInit() {},
    ASYNC_SET_TIME({commit,time}){
        commit('SET_TIME',time)
    },

}

export const getters = {
    time: state => state.time,
}

