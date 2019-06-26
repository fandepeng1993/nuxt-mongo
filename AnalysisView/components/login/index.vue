<template>
    <div class="nuxt-login" >
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
            <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="formInline.password"
                       @on-enter="handleSubmit('formInline',1)"  placeholder="Password">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <!--style="text-align-last: justify;"-->
            <FormItem >
                <!--long-->
                <Button  type="primary" long  @click="handleSubmit('formInline',1)">Signin</Button>
               <!-- <Button  type="primary" @click="handleSubmit('formInline',0)">Signup</Button>-->
            </FormItem>
        </Form>
        <!--  <video src="http://localhost:5199/video/video.mp4" autoplay="autoplay" controls></video>-->
    </div>
</template>

<script>
    export default {
        name: "home-login",
        data() {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        {required: true, message: 'Please fill in the user name', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: 'Please fill in the password.', trigger: 'blur'},
                        {
                            type: 'string',
                            min: 6,
                            message: 'The password length cannot be less than 6 bits',
                            trigger: 'blur'
                        }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name,status) {
                const _this = this;
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        if(status){
                            _this.login();
                        }else {
                            _this.signup();
                        }

                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            login() {
                this.$Spin.show({
                    render: (h) => {
                        return h('div', [
                            h('Icon', {
                                'class': 'demo-spin-icon-load',
                                props: {
                                    type: 'ios-loading',
                                    size: 18
                                }
                            }),
                            h('div', 'Loading')
                        ])
                    }
                });
                this.$auth.loginWith('local', {
                    data: {
                        user: {
                            username: this.formInline.user,
                            password: this.formInline.password,
                        }
                    }
                }).then((res)=>{
                    this.$Message.success('登录成功!');
                    this.$Spin.hide();
                    //.this.$router.replace('/')
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
            signup(){
                this.$axios.$post('/api/signup', {
                    user: {
                        username: this.formInline.user,
                        password: this.formInline.password,
                    }
                }).then((res) => {
                    this.$Message.error('注册成功!');
                    // this.$router.replace('/home')
                })
            },
            createVideoDomAppend(src) {
                //预加载video
                let video = document.createElement('video');
                this.$el.append(video);
                video.src = src;
                video.controls = true;
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
        }
    }
</script>

<style scoped type="text/scss" rel="stylesheet/scss" lang="scss">
    .nuxt-login {
        position: fixed;
        z-index: 1;

    }

</style>
