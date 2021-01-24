module.exports = {
    base: '/',

    // 语言
    lang: 'zh-CN',

    // 标题
    title: '洋仔的主页',

    // 描述
    description: '用心总结，专心做事',

    // markdown显示行号
    markdown: {
        lineNumbers: true
    },

    // 自定义favicon
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'google-site-verification', content: 'CKmN6S4eXG3UM1ZtPTtoNFeB7HoPSineeV6N0redyJM' }],
        ['meta', { name: 'baidu-site-verification', content: 'DHMDHUjY45' }]
    ],

    // 设置ga
    plugins: [
        ['@vuepress/google-analytics', {
            ga: 'UA-146806630-1'
        }],
        ['@vuepress/back-to-top'],
        ['@vuepress/medium-zoom']
    ],

    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/214070779',

        // 自定义仓库链接文字。
        repoLabel: 'GitHub',

        // 最后更新时间
        lastUpdated: '更新时间',

        // 刷新弹窗
        serviceWorker: {
            updatePopup: true,// Boolean | Object, 默认值是 undefined.
            // 如果设置为 true, 默认的文本配置将是:
            updatePopup: {
                message: "有新内容",
                buttonText: "刷新"
            }
        },

        // 导航栏
        nav: [
            { text: '投资体系', link: '/投资体系/' },
            { text: '技术相关', link: '/技术/' },
        ],

        // 侧边栏
        sidebar: {
            '/投资体系/': require('../投资体系/sidebar'),
            '/技术/': require('../技术/sidebar')
        }
    }
}