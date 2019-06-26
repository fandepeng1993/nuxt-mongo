<template>
    <div id="app">
        <div v-if="$nuxt.isOffline">You are offline</div>
        <nuxt/>
    </div>
</template>

<style type="text/scss" lang="scss" scoped>
#app{
    width: 100%;
    height: 100vh;
    overflow: hidden;
}
</style>
