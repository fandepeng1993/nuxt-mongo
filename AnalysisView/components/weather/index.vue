<template>
    <div class="weather">
        <a-skeleton active :loading="!weather"  :paragraph="{rows: 1}" :title="false">
            <p v-if="weather">
                当前位置:{{weather.country}}-{{weather.city}}，
                <!--当前日期:{{weather.data[0].date}};{{weather.data[0].week}}
                预报上次更新时间:{{weather.data[0].update_time}}-->
                今日气候:
                {{weather.data[0].wea}}，
                空气湿度:{{weather.data[0].humidity}}，
                风向:{{weather.data[0].win[0]}}/{{weather.data[0].win[1]}}，
               <!-- 风速:{{weather.data[0].win_speed}}
                当前温度:{{weather.data[0].tem}}
                最低温度:{{weather.data[0].tem2}}
                最高温度:{{weather.data[0].tem1}}
                空气质量:{{weather.data[0].air_tips}}
                空气指数:{{weather.data[0].air}}
                污染等级:{{weather.data[0].air_level}}-->
            </p>
        </a-skeleton>

    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                ip:'',
                weather: null
            }
        },
        created() {
            let promise = Promise.all([this.$axios.$get('/weather/',{params:{version:'v1'}}),this.$axios.$get('/ip')]);
            promise.then((result)=>{
                this.weather = result[0];
                this.ip = result[1]
            });
           // console.log(this.weather)
        },
        mounted() {

        }
    }
</script>
<style  lang="css" scoped>
    .weather >>> .ant-skeleton-paragraph{

    }
</style>
<style scoped lang="scss">
    .weather{
        height: 100%;
        display: flex;
        flex-direction:column ;
        justify-content: center;
        /deep/ .ant-skeleton-paragraph{
            display: flex;
            justify-content: center;
            margin: 0;
        }
        p{
            @include no-wrap();
            text-align: center;
        }
    }

</style>
