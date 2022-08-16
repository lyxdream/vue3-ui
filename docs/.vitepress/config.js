module.exports = {
    title: 'v-ui', // 设置网站标题
    description: 'ui 库', //描述
    dest: './build', // 设置输出目录
    themeConfig: { //主题配置
        nav: [
            { text: '主页', link: '/' },
            { text: "Button 按钮", link: "/button/" },
            { text: 'icon', link: "/icon/" },
        ],
        //   // 为以下路由添加侧边栏
        sidebar: {
            '/button/': [
                {
                    text: 'Button 按钮', // 必要的
                    // collapsable: false, // 可选的, 默认值是 true,
                    items: [
                        {
                            text: "Button244",
                            link: "/button/index",
                        },
                        {
                            text: "Button的使用",
                            link: "/button/Button的使用"
                        }
                    ]
                }
            ],
            '/icon/': [
                {
                    text: 'icon', // 必要的
                    link: "/icon/index",
                    collapsable: false, // 可选的, 默认值是 true,
                    items: []
                }
            ]
        }
    }
}