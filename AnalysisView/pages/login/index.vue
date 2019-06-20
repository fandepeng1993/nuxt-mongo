<template>
    <div class="login">
        <div class="loginbg">
            <div class="loginForm">
                <home-login></home-login>
            </div>
            <vue-particles
                class="bgcanvas"
                color="#dedede"
                :particleOpacity="0.4"
                :particlesNumber="100"
                shapeType="circle"
                :particleSize="4"
                linesColor="#dedede"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="150"
                :moveSpeed="4"
                :hoverEffect="false"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
            >
            </vue-particles>
        </div>
    </div>
</template>

<script>
    import homeLogin from '~/components/login/index.vue'
    export default {
        name: "login",
        head() {
            return {
                title:'登录'
            }

        },
        components:{
            homeLogin
        }
    }
</script>

<style scoped type="text/scss" lang="scss" rel="stylesheet/scss">
    .login{
        height: 100%;
        .loginbg{
            height: 100%;
            position: relative;
            // static
            background: url("/img/bg.png") no-repeat;
            background-size: cover;
            background-position: center;
            .loginForm{
                height: 100%;
                width: 100%;
                display: flex;
                flex: 1;
                flex-direction:row;
                justify-content: center;
                align-items: center;

            }
        }

    }

</style>
