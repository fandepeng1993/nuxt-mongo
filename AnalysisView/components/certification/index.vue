<template>
    <div class="certification" ref="certification">
        <div id="sc"></div>
    </div>
</template>

<script>
    import NVC_OPT from '~/assets/js/certification.js';
    export default {
        name: "index",
        head:{
            meta:[
                { charset: 'utf-8' },
                { hid: 'certification', name: 'certification', content: 'certification' }
            ],
            script: [
                { src: 'https://g.alicdn.com/sd/smartCaptcha/0.0.4/index.js', async: true, defer: true },
                { src: 'https://g.alicdn.com/sd/quizCaptcha/0.0.1/index.js', async: true, defer: true },
                // { src: '//g.alicdn.com/sd/nvc/1.1.112/guide.js', async: true, defer: true },
            ]
        },
        data(){
            return{
                ic: null
            }
        },
        mounted() {
            setTimeout(()=>{
                this.certification();
                window.NVC_Opt  = NVC_OPT;
                let scriptxx  = window.document.createElement('script');
                scriptxx.src  = 'https://g.alicdn.com/sd/nvc/1.1.112/guide.js';
                this.$refs.certification.append(scriptxx);
                this.ic.init();
            })
        },
        methods:{
            certification(){
                const that = this;
                this.ic = new smartCaptcha({
                    //声明智能验证需要渲染的目标元素ID。
                    renderTo: '#sc',
                    //智能验证组件的宽度。
                    width: 300,
                    //智能验证组件的高度。
                    height: 42,
                    //智能验证组件初始状态文案。
                    default_txt: '点击按钮开始智能验证',
                    //智能验证组件验证通过状态文案。
                    success_txt: '验证成功',
                    //智能验证组件验证失败（拦截）状态文案。
                    fail_txt: '验证失败，请在此点击按钮刷新',
                    //智能验证组件验证中状态文案。
                    scaning_txt: '智能检测中',
                    //前端智能验证通过时会触发该回调参数。您可以在该回调参数中将请求标识（token）、会话ID（sessionid）、签名串（sig）字段记录下来，随业务请求一同发送至您的服务端调用验签。
                    success: function(data) {
                        /*console.log(window.NVC_Opt.token);
                        console.log(data.sessionId);
                        console.log(data.sig);*/
                        // 验证成功回调函数
                        that.$emit('success',{status:200,suceess:true})
                    },
                });
            }
        }
    }


</script>
<style scoped>
    .certification>>>#sc{
        margin: 0;
        padding: 0;
    }
</style>
