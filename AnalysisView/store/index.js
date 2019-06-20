export const state = () => ({
    time: null
})

export const mutations = {
    SET_TIME(state, time) {
        state.time = time
    }
}

export const actions = {
    nuxtServerInit() {},
    ASYNC_SET_TIME({commit,time}){
        commit('SET_TIME',time)
    }
}

/*import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        strict: false,
        state: () => ({
            time: null
        }),
        mutations: {
            SET_TIME(state, time) {
                state.time = time
            }
        },
        actions:{
            ASYNC_SET_TIME({commit,time}){
                commit('SET_TIME',time)
            }
        }
    })
}

export default createStore*/
