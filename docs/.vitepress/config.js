// https://vitepress.vuejs.org/config/theme-configs.html
module.exports={
    title:'blog',
    description:'vue js node html css',
    base:'/blog-site/',
    themeConfig: {
        outlineTitle:'当前页面',
        nav:[
            { text: '项目地址', link: 'https://mao-118.github.io/fast-vue-admin/' }
        ],
        sidebar:[
            {
                text:'技术博客',
                items:[
                    {text:'github actions自动部署gitee',link:'/'}
                ]
            }
        ]
    
    }
}