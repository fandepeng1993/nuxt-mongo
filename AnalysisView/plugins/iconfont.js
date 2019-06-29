import Vue from 'vue'
import { Icon } from 'ant-design-vue';

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1265989_kuowvm6yrct.js',
})
IconFont.install = function (Vue) {
    Vue.component('IconFont',IconFont)
}

export default ()=>{
    Vue.use(IconFont)
}
