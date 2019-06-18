<template>
  <div>
    <h3>主页</h3>
    <radar-chart></radar-chart>
    <button @click="logout">退出登录</button>
    <ul>
      <li v-for="item in posts">{{item.title}}</li>
    </ul>
    <div class="testCss">
      <p>asdaafadsfasdfafasfasdfasdfasdfdsfadfasdfasdfadsfasdfadsfasdfasdfadfadfadfasfdadsfdfsasdfqsdfafdadfafdadfaf</p>
    </div>
    <Button type="primary">Primary</Button>
  </div>
</template>

<script>
  import radarChart from '@/components/radar-chart/index'
  export default {
    name: "home",
    auth: true,
    head() {
      return {
        title:'首页',
        meta: [
          {charset: 'utf-8'},
          {name: 'viewport', content: 'width=device-width, initial-scale=1'},
          {hid: 'PARA', name: 'PARA', content: '派拉 PARA'}
        ]
      }

    },
    async asyncData({$axios}){
      /* $axios.setHeader('Authorization', '123');
       $axios.setHeader('Content-Type','text/plain');
       $axios.setToken('123', 'Bearer');*/
      const posts = await $axios.$get('/api/posts');
      return {posts}
    },
    fetch(){

    },
    created() {
      console.log(this.$store.state);
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
      radarChart
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
  .testCss {
    width: 30%;
    color: $border-color-1;
    @include no-wrap();
  }

</style>
