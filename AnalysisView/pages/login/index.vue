<template>
    <div class="warap">
        <div class="loginbg">
            <div class="loginForm">
                <home-login></home-login>
            </div>
        </div>
    </div>
</template>

<script>
    import homeLogin from '~/components/login/index.vue'
    export default {
        name: "login",
        head() {
            return {
                title:'登录',
                meta: [
                    {charset: 'utf-8'},
                    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                    {hid: 'PARA', name: 'PARA', content: '派拉 PARA'}
                ]
            }

        },
        components:{
            homeLogin
        }
    }
</script>

<style scoped type="text/scss" lang="scss" rel="stylesheet/scss">
    .warap{
        .loginbg{
            height: 100vh;
            // static
            background: url("/img/bg.png") no-repeat;
            background-size: cover;
            background-position: center;
            .loginForm{
                height: 100%;
                display: flex;
                flex: 1;
                flex-direction:row;
                justify-content: center;
                align-items: center;

            }
        }

    }

</style>
