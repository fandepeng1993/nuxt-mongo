<template>
    <div class="layout">
       <!-- <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">Nuxt</div>
                    <div class="layout-nav">
                        <Button type="default" @click="logout" size="small" ghost>退出</Button>
                        &lt;!&ndash;<MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            <button @click="logout">退出登录</button>
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>&ndash;&gt;
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider class="nuxt-slider" collapsible :collapsed-width="78" v-model="isCollapsed">
                    <div class="user-show">
                        <span v-show="!isCollapsed">Hello,</span>
                        <strong style="color: red">{{$auth.user}}</strong>
                        <span v-show="!isCollapsed">!</span>
                    </div>
                    <Menu class="nuxt-menu-left" :class="menuitemClasses"  @on-select="changeActive" :active-name="menu.active" theme="light" width="auto">
                        <MenuItem name="1-1" to="/">
                            <Icon type="md-home" />
                            <span>
                                首页内容
                            </span>
                        </MenuItem>
                        <MenuItem name="1-2" to="/person">
                            <Icon type="md-person"/>
                            <span>
                                个人资料
                            </span>
                        </MenuItem>
                        <MenuItem name="1-3" to="/devlang">
                            <Icon type="logo-javascript"/>
                            <span>开发语言</span>
                        </MenuItem>
                        <MenuItem name="1-4"  to="/devtools">
                            <Icon type="ios-construct"/>
                            <span>开发工具</span>
                        </MenuItem>
                        <MenuItem name="1-5"  to="/comments">
                            <Icon type="ios-construct"/>
                            <span>留言评论</span>
                        </MenuItem>
                    </Menu>
                </Sider>
                <Layout>
                    <Header :style="{padding: 0}" class="layout-header-bar">
                        &lt;!&ndash;<Icon  type="md-menu" size="24"></Icon>&ndash;&gt;
                        <h3 style="text-align: center">nuxt&express&ivew$echats管理平台</h3>
                    </Header>
                    <Content class="layout-content">
                        <div class="layout-wrapper">
                            &lt;!&ndash;<nuxt-child  keep-alive :keep-alive-props="{exclude:'index'}"/>&ndash;&gt;
                            <nuxt-child  keep-alive :keep-alive-props="{exclude:''}"/>
                        </div>

                    </Content>
                    <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
                </Layout>
            </Layout>
        </Layout>-->
        <a-layout class="warpper">
            <a-layout-header  class="nuxt-header">
                <!--<a-button type="primary" ghost size="small" @click="logout" style="float: right;margin: 20px">退出登录</a-button>-->
                <div class="nuxt-header-tool">
                    <div class="logo">Nuxt/Reseme</div>
                    <user></user>
                </div>
                <div class="nuxt-header-weather">
                    <weather></weather>
                </div>
            </a-layout-header>
            <a-layout class="wrapper-content" :hasSider="true">
                 <!--v-model="menuCollapsed"-->
                <!-- :collapsed="menu.collapsed"-->
                <no-ssr>
                    <a-layout-sider
                        style="user-select:none"
                        v-cloak
                        class="nuxt-sider"
                        collapsible
                        :collapsed="menuCollapsed"
                        :defaultCollapsed="menuCollapsed"
                        @collapse="collapseMenu">
                        <div class="user-show">
                            <span v-show="!menu.collapsed">Hello,</span>
                            <strong style="color: red">{{$auth.user}}</strong>
                            <span v-show="!menu.collapsed">!</span>
                        </div>
                        <a-menu  theme="dark" class="nuxt-menu" @select="changeActive"  :defaultSelectedKeys="[menuActive]" mode="inline">
                            <a-menu-item key="/">
                                <a-icon type="home" />
                                <span>首页内容</span>
                            </a-menu-item>
                            <a-menu-item key="/person">
                                <a-icon type="user" />
                                <span>个人资料</span>
                            </a-menu-item>
                            <a-menu-item key="/devlang">
                                <a-icon type="html5" />
                                <span>开发语言</span>
                            </a-menu-item>
                            <a-menu-item key="/devtools">
                                <a-icon type="tool" />
                                <span>开发工具</span>
                            </a-menu-item>
                            <!--<a-sub-menu key="1-7">
                                <span slot="title">
                                    <a-icon type="setting" />
                                    <span>个人设置</span>
                                </span>
                                <a-sub-menu key="1-7-1">
                                    <span slot="title">
                                        <a-icon type="tool" />
                                        <span>工具配置</span>
                                    </span>
                                    <a-menu-item key="1-7-1-1">Webstrom</a-menu-item>
                                    <a-menu-item key="1-7-1-2">Mysql</a-menu-item>
                                </a-sub-menu>
                                <a-menu-item key="1-7-2">环境搭建</a-menu-item>
                                <a-menu-item key="1-7-3">线上部署</a-menu-item>
                            </a-sub-menu>-->
                            <!--<a-sub-menu key="1-8">
                                <span slot="title">
                                    <a-icon type="github" theme="filled" />
                                    <span>作品展示</span>
                                </span>
                                <a-menu-item key="1-8-1">前端项目</a-menu-item>
                                <a-menu-item key="1-8-2">后端项目</a-menu-item>
                            </a-sub-menu>-->
                            <a-menu-item key="/comments">
                                <a-icon type="message" />
                                <span>留言评论</span>
                            </a-menu-item>
                            <!--<a-menu-item key="/">
                                <a-icon type="mobile" />
                                <span>联系方式</span>
                            </a-menu-item>-->
                        </a-menu>
                    </a-layout-sider>
                    <!-- loading indicator -->
                    <a-spin class="nuxt-loading" size="large" tip="Loading..." slot="placeholder" />
                </no-ssr>
                <a-layout class="wrapper-right">
                    <div>
                        <a-breadcrumb class="nuxt-breadcrumb">
                            <a-breadcrumb-item  v-for="item in $route.path.split('/')" :key="item">{{item}}</a-breadcrumb-item>
                        </a-breadcrumb>
                    </div>
                    <a-layout-content class="nuxt-content">
                        <div class="layout-wrapper">
                           <!-- <nuxt-child  keep-alive :keep-alive-props="{exclude:'index'}"/>-->
                           <!-- <no-ssr>

                            </no-ssr>-->
                            <nuxt-child keep-alive :keep-alive-props="{exclude:''}"/>
                        </div>
                    </a-layout-content>
                    <a-layout-footer class="nuxt-footer">2011-2016 &copy; TalkingData</a-layout-footer>
                </a-layout>
            </a-layout>
        </a-layout>
    </div>
</template>

<script>
    import {mapGetters,mapActions,mapMutations} from 'vuex';
    import user from '~/components/user/index.vue'
    import weather from '~/components/weather/index.vue'
    export default {
       name: "layout",
        data() {
            return {
            };
        },
        methods: {
            logout() {
                this.$axios.$post('/api/logout').then((res) => {
                    if(res.status){
                        this.$message.success('退出登录成功!');
                        window.location.reload();
                    }else {
                        this.$message.error('退出登录失败!');
                    }
                    // window.location.href = `http://${window.location.host}`
                })
            },
            changeActive({key}){
                this.syncchangeMenuActive(key);
                this.$router.replace(key);
            },
            collapseMenu(collapsed,type){
                this.asyncchangeMenuCollapsed(collapsed);
            },
            ...mapMutations({
                syncchangeMenuCollapsed:'menu/SET_MENU_COLLAPSED',
                syncchangeMenuActive:'menu/SET_MENU_ACTIVE'
            }),
            ...mapActions({
                asyncchangeMenuCollapsed:'menu/ASYNC_SET_MENU_COLLAPSED',
                asyncchangeMenuActive:'menu/ASYNC_SET_MENU_ACTIVE'
            })
        },
        computed: {
            ...mapGetters({menu:'menu/menu',menuActive:'menu/menuActive',menuCollapsed:'menu/menuCollapsed'})
        },
        mounted() {
            this.asyncchangeMenuActive(this.$route.path);
        },
        watch:{

        },
        components:{
            user,
            weather
        }
    }
</script>

<style scoped type="text/scss" rel="stylesheet/scss" lang="scss">
    .layout {
        .warpper{
            .nuxt-header{
                position: relative;
                .nuxt-header-tool{
                    overflow: hidden;
                    position: absolute;
                    z-index: 10;
                    width: 100%;
                    left: 0;
                    padding: 0 50px;
                    .logo{
                        width: 120px;
                        height: 32px;
                        line-height: 32px;
                        text-align: center;
                        color: white;
                        background: rgba(255,255,255,.2);
                        margin: 16px 30px 16px 0;
                        float: left;
                    }
                }
                .nuxt-header-weather{
                    position: absolute;
                    z-index: 1;
                    background: #2db7f5;
                    width: 100%;
                    height: 64px;
                    top: 0;
                    left: 0;
                }
            }
            .wrapper-content{
                height: calc(100vh - 64px);
                .nuxt-loading{
                    min-width: 200px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .nuxt-sider{
                    .nuxt-menu{
                        max-height: calc(100% - 64px);
                        overflow-y: scroll;
                    }
                    .user-show {
                        text-align: center;
                        color: white;
                        height: 64px;
                        line-height: 64px;
                        background: rgba(255,255,255,.2);
                        border-right: 1px solid rgba(0, 0, 0, 0.1);
                    }

                }

                .wrapper-right{
                    .nuxt-breadcrumb{
                        line-height: 64px;
                        background: #fff;
                        padding-left: 16px;
                    }
                    .nuxt-content{
                        padding: 8px;
                        overflow: scroll;
                        .layout-wrapper{
                            background: #fff;
                        }
                    }
                    .nuxt-footer{
                        text-align: center;
                        padding: 0;
                        line-height: 48px;
                    }
                }
            }
        }
    }


</style>
