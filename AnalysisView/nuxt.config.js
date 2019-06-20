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
        middleware: 'auth'
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: 'pink'},

    /*
    ** Global CSS
    */
    css: [
        'iview/dist/styles/iview.css',
        'assets/style/main.css'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        {src: '@/plugins/iview', ssr: true},
        {src: '@/plugins/echarts', ssr: true},
        {src: '@/plugins/axios', ssr: true},
        {src: '@/plugins/vueParticles', ssr: false},
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
        // proxyHeaders: false
        proxy: true
    },
    proxy: {
        /*'/api/!*':{
            target: 'http://localhost:5199',
            pathRewrite: {'^/api/': '/'},
            ws:true,
            changeOrigin:true,
        },*/
        '/api/posts': {target: 'https://jsonplaceholder.typicode.com', pathRewrite: {'^/api/': '/'}},
        // '/api/users': {target: 'https://jsonplaceholder.typicode.com', pathRewrite: {'^/api/': '/'}},
        '/api/login': {target: 'http://localhost:5199', pathRewrite: {'^/api/': '/'}},
        '/api/video': {target: 'http://localhost:5199', pathRewrite: {'^/api/': '/'}},
        '/api/signup': {target: 'http://localhost:5199', pathRewrite: {'^/api/': '/'}},
        '/api/users/user': {target: 'http://localhost:5199', pathRewrite: {'^/api/': '/'}},
        '/api/logout': {target: 'http://localhost:5199', pathRewrite: {'^/api/': '/'}},
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
            // './assets/style/theme/index.less'
        ],
        stylus: []
    },
    build: {
        /*
        ** You can extend webpack config here
        */
        /*less: {
            javascriptEnabled: true
        },
        extend(config, ctx) {
            //less & sass &scss
            const sassResourcesLoader = {
                loader: 'sass-resources-loader',
                options: {
                    resources: [
                        '~/assets/style/variables.scss',
                        '~/assets/style/mixins.scss',
                        '~/assets/style/theme/index.less'
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
