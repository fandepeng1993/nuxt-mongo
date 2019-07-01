<template>
    <div>
        <h1>关于</h1>
        <icon-font type="iconai-ios"  theme="outlined" twoToneColor="#eb2f96"></icon-font>
        <a-icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
        <a-button type="primary">Primary</a-button>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "about",
        auth: false,
        head() {
            return {
                title:'关于'
            }
        },
        created() {
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>
