export default ({store, error, req, res, route, app}) => {
    // store.dispatch('ASYNC_SET_TIME',new Date());
    store.commit('SET_TIME',new Date());
    console.log(store.state,'vuex-state');
    // console.log(app.$auth,'app.$auth');
}
