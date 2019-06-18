<template>
    <div class="container">
        <div class="charts">
            <chart :option="option" :theme="'dark'" class="chartss"></chart>
        </div>
        <div  class="charts">
            <chart :option="option"  class="chartss"></chart>
        </div>
    </div>
</template>

<script>
    import chart from '../chart/index'
    export default {
        name: "radar-chart",
        data(){
            return {
                option: {  //创建图表配置数据
                    tooltip: {},
                    radar: {
                        indicator: [{name: '体育', max: '100'}, {name: '数学', max: '100'}, {
                            name: '化学',
                            max: '100'
                        }, {name: '劳动', max: '100'}, {name: '物理', max: '100'}],
                        center: ['50%', '51%']
                    },
                    series: [{
                        type: 'radar',
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data: [
                            {
                                value: [58, 56, 78, 64, 98],
                                name: '各项得分',
                                itemStyle: {normal: {color: '#f0ad4e'}}
                            }
                        ]
                    }]
                }
            }
        },
        mounted(){
        },
        components:{
            chart
        }
    }
</script>
<style scoped type="text/scss" lang="scss" rel="stylesheet/scss">
    .container{
        width: 100%;
        display: flex;
        .charts{
            width: 50%;
            height: 300px;
        }
    }
</style>
