<template>
    <div>
        <div>
            <Button type="primary" ghost long @click="saveImage">保存图片</Button>
        </div>

        <div class="htmlToImage"  ref="htmlImage">
            <readar-chart></readar-chart>
            <div>
                <ul>
                    <li v-for="(item,index) in posts" :key="item.id">
                        <h3>{{item.title}}</h3>
                        <p>{{item.body}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import readarChart from '../../components/radar-chart/index'
    export default {
        name: "index",
        head() {
            return {
                title:'个人资料'
            }
        },
        async asyncData({$axios}){
            // console.log('asyncData',conttext);
            const posts = await $axios.$get('/api/posts');
            // console.log(posts)
            return {
                name:'index',
                posts
            }
        },
        fetch(){
            console.log('fetch');
        },
        data(){
            return {
                name:'dataIndex'
            }
        },
        created(){

            console.log('created')
        },
        mounted(){
            console.log('mounted',this.name,process.server,process.client,process.static,this)
        },
        methods:{
            saveImage(){
                let el = this.$refs.htmlImage;
                this.$html2svg(el,{
                    backgroundColor: '#F6F5F4',
                    padding: '8px 16px',
                }, {
                    width: el.scrollWidth + 32,
                    height: el.scrollHeight + 16,
                }).then(svg =>{
                    const svgContent = new XMLSerializer().serializeToString(svg);
                    return  new Promise((resolve, reject) => {
                        let img = new Image();
                        img.src = 'data:image/svg+xml,' + window.encodeURIComponent(svgContent);
                        img.onload = () => {
                            resolve(img)
                        };
                        img.onerror = e => reject(e);
                    });
                }).then(img => {
                    const canvas = document.createElement('canvas');
                    const devicePixelRatio = window.devicePixelRatio || 1;
                    canvas.width = img.naturalWidth * devicePixelRatio;
                    canvas.height = img.naturalHeight * devicePixelRatio;

                    const ctx = canvas.getContext('2d');
                    ctx.scale(devicePixelRatio, devicePixelRatio);
                    ctx.drawImage(img, 0, 0);
                    return new Promise(resolve => canvas.toBlob(resolve));
                }).then(blob => {
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.download = '个人资料' + '.png';
                        a.href = url;
                        a.click();
                        URL.revokeObjectURL(url);
                    })
                    .catch(e => console.error(e));
            }
        },
        activated(){
            console.log('activated')
        },
        deactivated(){
            console.log('deactivated')
        },
        updated(){
            console.log('updated')
        },
        components:{
            readarChart
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
    p{
        width: 100%;
        @include no-wrap()
    }
</style>
