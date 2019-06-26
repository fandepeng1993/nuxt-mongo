<template>
  <div class="home">
    <nuxt-layout></nuxt-layout>
  </div>
</template>

<script>
  import nuxtLayout from '@/components/layout/index'
  export default {
    name: "home",
    auth: true,
    head() {
      return {
        title:'首页'
      }
    },
    async asyncData({$axios,store}){
      /* $axios.setHeader('Authorization', '123');
       $axios.setHeader('Content-Type','text/plain');
       $axios.setToken('123', 'Bearer');*/
      console.log(store.state)
      /*const posts = await $axios.$get('/api/posts');
      return {posts}*/
    },
    fetch(){

    },
    created() {
      // console.log(this.$store.state);
      // this.$axios.$get('/api/posts')
      // console.log(this.$axios.$get('/api/posts'))
      /*this.getData().then(data=>{
          console.log(data)
      })*/
    },
    mounted(){
      console.log(this.getData())
    },
    methods:{
      async getData(){
        return await this.$axios.$get('/api/posts');
      },
      logout(){
        // 退出登录
        this.$axios.$post('/api/logout').then((data)=>{
          console.log(data,'logout');
          console.log(this);
          this.$router.push('/login')
          // localStorage.removeItem('auth._token.local')
        })
      }

    },
    components:{
      nuxtLayout
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  // 不换行
  /*@mixin no-wrap(){
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
  }*/
  .home{

  }
  .testCss {
    width: 30%;
    color: $border-color-1;
    @include no-wrap();
  }

</style>
