import Vue from "vue";
import html2canvas from 'html2canvas';

html2canvas.install = (Vue) => {
    Vue.prototype.$html2canvas = html2canvas
}
export default () => {
    Vue.use(html2canvas);
}
