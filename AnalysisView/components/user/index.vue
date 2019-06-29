<template>
    <div class="user">
        <a-dropdown>
            <a-avatar icon="user"  style="backgroundColor:#1890ff"/>
            <a-menu slot="overlay">
                <a-menu-item>
                    <a href="javascript:void(0);">退出登录</a>
                </a-menu-item>
            </a-menu>
        </a-dropdown>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="scss">
    .user{
        color: white;
        float: right;
    }

</style>
