<template>
    <div class="chart"></div>
</template>

<script>
    import ResizeObserver from 'resize-observer-polyfill';
    const loadingOption = {
        text: '努力加载中',
        color: '#c23531',
        textColor: '#04beb4',
        maskColor: 'rgba(255, 255, 255, 0.8)',
        zlevel: 0
    };
    export default {
        name: "chart",
        props: {
            option: Object,
            theme: String,
            groupId: String,
        },
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            this.refreshChart();
            this.ro = new ResizeObserver(([ entry ]) => {
                if (entry.contentRect.width && entry.contentRect.height && this.chart && !this.resizing) {
                    this.resizing = true;
                    requestAnimationFrame(() => {
                        if (this.chart) this.chart.resize();
                        this.resizing = false;
                    });
                }
            });
            this.ro.observe(this.$el);
        },
        destoryed() {
            if (this.chart) {
                this.chart.dispose();
                this.chart = undefined;
            }
            if (this.ro) {
                this.ro.disconnect();
                this.ro = undefined;
            }
        },

        watch: {
            theme(value, oldValue) {
                if (oldValue === undefined && value !== undefined) {
                    this.refreshChart();
                }
            },
            option(value, oldValue) {
                if (oldValue === undefined && value !== undefined) {
                    this.refreshOption();
                }
            },
        },

        methods: {
            startWait(){
               this.chart.showLoading('default', loadingOption);
            },
            refreshOption() {
                if (!this.chart) return;
                if (this.option && Object.keys(this.option).length) {
                    this.chart.setOption(this.option, true);
                    if (this.$el.clientHeight) this.chart.resize();
                    this.chart.hideLoading();
                } else {
                    this.chart.showLoading('default', loadingOption);
                }
            },

            refreshChart() {
                if (this.chart) {
                    this.chart.dispose();
                    this.chart = undefined;
                }
                this.chart = this.$echarts.init(this.$el, this.theme || 'shine');
                /*this.chart.group = this.groupId;

                this.$echarts.connect('b2c');
                this.$echarts.connect('b2t');
                this.$echarts.connect('cba');
                this.$echarts.connect('clk');*/

                this.refreshOption();

                // http://echarts.baidu.com/api.html#events
                [
                    'click',
                    'dblclick',
                    'mousedown',
                    'mouseup',
                    'mouseover',
                    'mouseout',
                    'globalout',

                    'legendselectchanged',
                    'legendselected',
                    'legendunselected',
                    'legendscroll',
                    'datazoom',
                    'datarangeselected',
                    'timelinechanged',
                    'timelineplaychanged',
                    'restore',
                    'dataviewchanged',
                    'magictypechanged',
                    'geoselectchanged',
                    'geoselected',
                    'geounselected',
                    'pieselectchanged',
                    'pieselected',
                    'pieunselected',
                    'mapselectchanged',
                    'mapselected',
                    'mapunselected',
                    'axisareaselected',
                    'focusnodeadjacency',
                    'unfocusnodeadjacency',
                    'brush',
                    'brushselected',
                ].forEach(x => this.chart.on(x, event => this.$emit(x, event, this)));
            },
        },
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
    .chart {
        width: 100%;
        height: 100%;
    }
</style>
