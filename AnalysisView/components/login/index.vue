<template>
    <div class="nuxt-login" >
        <a-spin tip="Loading..."  :spinning="spinning">
            <a-form  id="components-form-demo-normal-login" :form="form"
                     class="login-form"
                     >
                <!--@submit="anthandleSubmit"-->
                <a-form-item>
                    <a-input
                        v-decorator="['username',{ rules: [{ required: true, message: 'Please input your username!' }]}]"
                        placeholder="Username"
                    >
                        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-input
                        v-decorator="['password', { rules: [
                    { required: true, message: 'Please input your Password!' },
                    { message: 'The password length cannot be less than 6 bits!',min:6,}]
                    }]"
                        type="password"
                        placeholder="Password">
                        <a-icon  slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
                    </a-input>
                </a-form-item>
                <certification  class="validation" @success="success"></certification>
                <a-form-item v-if="showLogin">
                    <!--<a-checkbox  v-decorator="['remember',{valuePropName: 'checked',initialValue: true,}]">
                        Remember me
                    </a-checkbox>
                    <a  class="login-form-forgot"
                        href="">
                        Forgot password
                    </a>-->
                    <a-button  type="primary"  @click="anthandleSubmit($event,1)" class="login-form-button" >
                        Log in
                    </a-button>
                    <!--<a-button  type="primary" @click="anthandleSubmit($event,2)" class="login-form-button" >
                        Sign up
                    </a-button>-->
                    <!--Or <a href="">register now! </a>-->
                </a-form-item>

            </a-form>
        </a-spin>
        <!--  <video src="http://localhost:5199/video/video.mp4" autoplay="autoplay" controls></video>-->
    </div>
</template>

<script>
    import certification from '~/components/certification/index.vue'
    export default {
        name: "home-login",
        data() {
            return {
                spinning: false,
                showLogin: false
            }
        },
        beforeCreate () {
            this.form = this.$form.createForm(this);
        },
        methods: {
            anthandleSubmit (e,num) {
                const _this = this;
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        _this.spinning  = true;
                        if(num==1){
                            _this.login(values);
                        }else if(num==2){
                            _this.signup(values);
                        }else {
                            _this.spinning  = false;
                            return
                        }
                    }else {
                        this.$message.error('Fail!');
                        this.spinning = false
                    }
                });
            },
            login(values) {
                this.$auth.loginWith('local', {
                    data: {
                        user:values
                    }
                }).then((res)=>{
                    this.$message.success('登录成功!');
                    setTimeout(()=>{
                        this.spinning = false
                    },500)
                }).catch(err=>{
                    this.$message.error('登录失败!');
                    setTimeout(()=>{
                        this.spinning = false
                    },500)
                })
                /*this.$axios.$post('/api/login', {
                    user: {
                        username: this.formInline.user,
                        password: this.formInline.password,
                    }
                }).then((res) => {
                    console.log(res);
                    // this.$router.replace('/home')
                })*/
            },
            signup(values){
                this.$axios.$post('/api/signup', {
                    user: values
                }).then((res) => {
                    this.$message.success('注册成功!');
                    setTimeout(()=>{
                        this.spinning = false
                    },500)
                    // this.$router.replace('/home')
                })
            },
            createVideoDomAppend(src) {
                //预加载video
                let video = document.createElement('video');
                this.$el.append(video);
                video.src = src;
                video.controls = true;
            },
            success(data){
                console.log(data.suceess);
                if(data.suceess){
                    this.showLogin  = true
                }
            }
        },
        mounted() {
            /*let config = {
                responseType: 'blob', // 默认的
                // `onDownloadProgress` 允许为下载处理进度事件
                onDownloadProgress: function (progressEvent) {
                    // 对原生进度事件的处理
                    console.log(progressEvent, 'progressEvent')

                },
            };
            this.$axios.$get('/api/video/video.mp4', config).then((res) => {
                console.log(res);
                this.videoSrc = URL.createObjectURL(res);
                this.createVideoDomAppend(this.videoSrc)
            })*/
        },
        destroyed() {
            URL.revokeObjectURL(this.videoSrc);
        },
        components:{
            certification
        }
    }
</script>

<style scoped type="text/scss" rel="stylesheet/scss" lang="scss">
    .nuxt-login {
        position: fixed;
        z-index: 1;
        .login-form {
            max-width: 300px;
            .validation{
                margin-bottom:4px;
            }
        }
        .login-form-forgot {
            float: right;
        }
        .login-form-button {
            width: 100%;
        }
    }


</style>
