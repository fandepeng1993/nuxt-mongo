<template>
    <div>
        <h3>主页</h3>
    </div>
</template>

<script>
    export default {
        name: "home",
        auth: true,
        head() {
            return {
                title:'主页',
                meta: [
                    {charset: 'utf-8'},
                    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                    {hid: 'PARA', name: 'PARA', content: '派拉 PARA'}
                ]
            }

        },

    }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss"></style>
