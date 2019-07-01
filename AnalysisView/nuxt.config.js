const pkg = require('./package');


module.exports = {
    mode: 'universal',
    server: {
        port: 5288, // default: 3000
        host: '0.0.0.0', // default: localhost,
    },
    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    router: {
        base: '/',
        middleware: 'auth',
        fallback:false,
        //增加路由
        extendRoutes (routes, resolve) {
            routes.push({
                name: 'custom',
                path: '/abouts',
                component: resolve(__dirname, 'pages/about/index.vue')
            })
        }
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: 'blue'},

    /*
    ** Global CSS
    */
    css: [
        /*'iview/dist/styles/iview.css',*/
        "ant-design-vue/dist/antd.css",
        'assets/style/main.css'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        // mode client server
        /*{src: '@/plugins/iview', ssr: true},*/
        {src: '@/plugins/antd', ssr: true},
        {src: '@/plugins/echarts', ssr: false},
        {src: '@/plugins/axios', ssr: true},
        {src: '@/plugins/vueParticles', ssr: false},
        {src: '@/plugins/html2canvas', ssr: false},
        {src: '@/plugins/html2svg', ssr: false},
        { src: '~/plugins/localStorage.js', ssr: false },
        { src: '~/plugins/iconfont.js', ssr: true }
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/auth',
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        '@nuxtjs/style-resources',
        ['@/modules/simple', {token: 'PARA'}],
    ],
    auth: {
        localStorage: false,
        redirect: {
            login: '/login',
            logout: '/',
            callback: '/login',
            home: '/'
        },
        strategies: {
            local: {
                endpoints: {
                    login: { url: '/api/login', method: 'post', propertyName: 'token' },
                    logout: { url: '/api/logout', method: 'post' },
                    user: { url: '/api/users/user', method: 'get', propertyName: 'user' }
                },
                // tokenRequired: true,
                // tokenType: 'bearer'
            }
        },
        plugins: [ '~/plugins/auth.js' ]
    },
    axios: {
        proxyHeaders: true,
        prefix: '/fdp',
        credentials: true,
        proxy: true,
        https: true,
    },
    proxy: {
        '/fdp/api/':{
            /*服务端数据库接口*/
            /*login vedio signup  users/user  logout
            *
            * */
            target: 'http://localhost:5199',
            pathRewrite: {'^/fdp/api/': '/'},
            ws:true,
            changeOrigin:true,
        },
        '/fdp/weather/':{
            /*天气接口*/
            target: 'https://www.tianqiapi.com',
            pathRewrite: {'^/fdp/weather/': '/api/'},
            ws:true,
            changeOrigin:true,

        },
        '/fdp/ip':{
            /*IP地址接口*/
            target: 'http://icanhazip.com',
            pathRewrite: {'^/fdp/ip': '/'},
            ws:true,
            changeOrigin:true,
        },
        '/fdp/test/':{
            /*测试接口 posts/users*/
            target: 'https://jsonplaceholder.typicode.com',
            pathRewrite: {'^/fdp/test/': '/'},
            ws:true,
            changeOrigin:true,
        }
    },
    /*
    ** Build configuration
    */
    styleResources: {
        scss: [
            './assets/style/variables.scss', // 自己项目中的样式文件的路径
            './assets/style/mixins.scss', // use underscore "_" & also file extension ".scss"
            './assets/style/public.scss'
        ],
        less: [
            // './assets/style/theme/iview-theme.less'
        ],
        stylus: []
    },
    build: {
       //  transpile: ['html2canvas']
        /*
        ** You can extend webpack config here
        */
        /*less: {
            javascriptEnabled: true
        }，
        extend(config, ctx) {
            //less & sass &scss
            const sassResourcesLoader = {
                loader: 'sass-resources-loader',
                options: {
                    resources: [
                        '~/assets/style/variables.scss',
                        '~/assets/style/mixins.scss',
                        '~/assets/style/theme/iview-theme.less'
                    ]
                }
            };
            config.module.rules.forEach(rule => {
                if (rule.test.toString() === '/\\.vue$/') {
                    rule.options.loaders.sass.push(sassResourcesLoader);
                    rule.options.loaders.scss.push(sassResourcesLoader);
                }
                if (['/\\.sass$/', '/\\.scss$/', '/\\.less$/'].indexOf(rule.test.toString()) !== -1) {
                    rule.use.push(sassResourcesLoader)
                }
            })
        }*/
    }
};
