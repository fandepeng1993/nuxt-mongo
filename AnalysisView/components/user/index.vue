<template>
    <div class="user">
        <a-dropdown class="dropdown">
            <a-avatar icon="user"  style="backgroundColor:#1890ff"/>
            <a-menu slot="overlay">
                <a-menu-item>
                    <a href="javascript:void(0);" @click.stop.prevent="logout()">退出登录</a>
                </a-menu-item>
            </a-menu>
        </a-dropdown>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods:{
            logout() {
                console.log('123123');
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
        }
    }
</script>

<style scoped lang="scss">
    .user{
        color: white;
        float: right;
        .dropdown:hover{
            cursor: pointer;
        }
    }

</style>
