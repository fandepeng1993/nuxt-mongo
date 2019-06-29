export const state = () => ({
    menu: {
        active: '/',
        collapsed: false
    }
})

export const mutations = {
    SET_MENU(state, data) {
        state.menu = data
    },
    SET_MENU_ACTIVE(state,data) {
        state.menu.active  = data
    },
    SET_MENU_COLLAPSED(state,data) {
        state.menu.collapsed  = data
    },
}

export const actions = {
    nuxtServerInit() {
        console.log('nuxtServerInit')
    },
    ASYNC_SET_MENU({commit},data){
        commit('SET_MENU',data)
    },
    ASYNC_SET_MENU_ACTIVE({commit},data) {
        commit('SET_MENU_ACTIVE',data)
    },
    ASYNC_SET_MENU_COLLAPSED({commit},data) {
        commit('SET_MENU_COLLAPSED',data)
    },
}

export const getters = {
    menu: state => state.menu,
    menuActive: state  => state.menu.active,
    menuCollapsed: state  => state.menu.collapsed
}
