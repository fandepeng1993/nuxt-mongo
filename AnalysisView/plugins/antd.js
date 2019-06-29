import Vue from 'vue'
//按需加载
/*import Row from 'ant-design-vue/lib/row'
import Col from 'ant-design-vue/lib/Col'
import Dropdown from 'ant-design-vue/lib/dropdown'
import Icon from 'ant-design-vue/lib/icon'
import Menu from 'ant-design-vue/lib/menu'
import Table from 'ant-design-vue/lib/table'
Vue.use(Row)
Vue.use(Col)
Vue.use(Dropdown)
Vue.use(Icon)
Vue.use(Menu)
Vue.use(Table)*/

import Antd from 'ant-design-vue'
import "~/assets/style/theme/ant-design-vue-theme.less";

export default () => {
    Vue.use(Antd);
}

