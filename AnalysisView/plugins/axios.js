
export default ({$axios, redirect, isDev, env}) => {
    console.log('是否是开发环境', isDev);
    // console.log('项目环境', process.env);
    // let defaultBaseUrl  = 'http://localhost:5288';
    $axios.onRequest(config => {
        //请求拦截
        //  console.log('Making request to ' + config.url);
        /*if(config.url ===  '/weather'){

        }else {
            config.bas
        }*/
       // console.log('请求拦截');

    });
    $axios.onResponse(response => {
        //console.log('请求响应');
    });
    $axios.onError(error => {
        //console.log('请求/响应错误');
        const code = parseInt(error.response && error.response.status);
        if (code === 400) {
            redirect('/400')
        }
    });
    $axios.onRequestError(err => {
        //console.log('请求错误')

    });
    $axios.onResponseError(err => {
        //console.log('响应错误')
    })
}
