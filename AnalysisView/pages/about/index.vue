<template>
    <div>公司介绍</div>
</template>

<script>
    export default {
        name: "about",
        auth: false,
        head() {
            return {
                title:'关于',
                meta: [
                    {charset: 'utf-8'},
                    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                    {hid: 'PARA', name: 'PARA', content: '派拉 PARA'}
                ]
            }

        }
    }
</script>

<style scoped>

</style>
