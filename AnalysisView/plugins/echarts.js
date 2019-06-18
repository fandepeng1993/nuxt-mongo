import Vue from "vue";
import echarts from "echarts";

echarts.install = (Vue) => {
    Vue.prototype.$echarts = echarts
}

export default () => {
    Vue.use(echarts);
}
