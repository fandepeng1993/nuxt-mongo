<template>
    <div>
        <comment></comment>
    </div>
</template>

<script>
    import comment from '~/components/comment/index.vue'
    export default {
        name: "comments",
        head(){
            return {
                title:'留言评论'
            }
        },
        components:{
            comment
        }
    }
</script>

<style scoped>

</style>
