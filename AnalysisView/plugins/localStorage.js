import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
    createPersistedState({
        key: 'vuex',
        paths: ['menu'],
        storage: window.localStorage,  //sessionStorage、cookie
        reducer: (state) => {
            return {
                // 只储存state中的menu
                menu: state.menu
            }
        }
    })(store)
}
