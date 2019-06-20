<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">Nuxt</div>
                    <div class="layout-nav">
                        <Button type="default" @click="logout" size="small" ghost>退出</Button>
                        <!--<MenuItem name="1">
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
                        </MenuItem>-->
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider class="nuxt-slider" collapsible :collapsed-width="78" v-model="isCollapsed">
                    <div class="user-show">
                        <span v-show="!isCollapsed">Hello,</span>
                        <strong style="color: red">管理员</strong>
                        <span v-show="!isCollapsed">!</span>
                    </div>
                    <Menu class="nuxt-menu-left" :class="menuitemClasses" active-name="1-2" theme="light" width="auto">
                        <MenuItem name="1-1">
                            <Icon type="ios-navigate"></Icon>
                            <span>Option 1</span>
                        </MenuItem>
                        <MenuItem name="1-2">
                            <Icon type="ios-search"></Icon>
                            <span>Option 2</span>
                        </MenuItem>
                        <MenuItem name="1-3">
                            <Icon type="ios-settings"></Icon>
                            <span>Option 3</span>
                        </MenuItem>
                    </Menu>
                </Sider>
                <Layout>
                    <Header :style="{padding: 0}" class="layout-header-bar">
                        <!--<Icon  type="md-menu" size="24"></Icon>-->
                        <h3 style="text-align: center">nuxt&express&ivew$echats管理平台</h3>
                    </Header>
                    <Content class="layout-content">
                        Content
                    </Content>
                    <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script>
    export default {
        name: "layout",
        data() {
            return {
                isCollapsed: false
            };
        },
        methods: {
            logout() {
                this.$axios.$post('/api/logout').then((res) => {
                    window.location.href = 'http://localhost:5288'
                })
            }
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            },
        }
    }
</script>

<style scoped type="text/scss" rel="stylesheet/scss" lang="scss">
    .layout {
        .layout-logo {
            width: 100px;
            height: 30px;
            background: #5b6270;
            border-radius: 3px;
            float: left;
            position: relative;
            top: 15px;
            left: 20px;
            line-height: 30px;
            text-align: center;
            color: white;
        }
        .layout-nav {
            width: 420px;
            margin: 0 auto;
            margin-right: 20px;
            text-align: right;
        }
        .nuxt-slider {
            height: calc(100vh - 64px);
            padding-bottom: 48px;
            .user-show {
                text-align: center;
                color: white;
                height: 64px;
                line-height: 64px;
                background: #363e4f;
                border-right: 1px solid rgba(0, 0, 0, 0.1);
            }
            .nuxt-menu-left {
                height: calc(100% - 64px);
                overflow: scroll
            }
        }
        .layout-header-bar {
            background: #fff;
            box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
        }
        .layouyt-content{
            margin:24px  24px 0 24px;
            min-height: 280px;
            background: #fff;
        }
        .layout-footer-center {
            text-align: center;
        }
        .menu-item span{
            display: inline-block;
            overflow: hidden;
            width: 69px;
            text-overflow: ellipsis;
            white-space: nowrap;
            vertical-align: bottom;
            transition: width .2s ease .2s;
        }
        .menu-item i{
            transform: translateX(0px);
            transition: font-size .2s ease, transform .2s ease;
            vertical-align: middle;
            font-size: 16px;
        }
        .collapsed-menu {
            span {
                width: 0px;
                transition: width .2s ease;
            }
        }
        .collapsed-menu {
            i {
                transform: translateX(5px);
                transition: font-size .2s ease .2s, transform .2s ease .2s;
                vertical-align: middle;
                font-size: 22px;
            }
        }
    }


</style>
