module.exports = {
  title: '洋仔的个人主页',
  description: '用心总结，专心做事',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/photo.jpg' }],
    ['link', { rel: 'manifest', href: '/images/photo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/photo.jpg' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '前端总结', link: '/H5/vue/' },
      {text: '算法总结', link: '/algorithm/'},
      {text: 'iOS总结', link: '/iOS-Summary/Animation/'},
      {text: '工作总结', link: '/job-Summary/Arithmetic/'},
    ],
    sidebar:{
      '/H5/': [
          {
            title: '前端总结',
            children: [
              '/H5/vue.html',
            ]
          }
        ],
        '/algorithm/': [
          {
            title: '算法题库',
            children: [
              '/algorithm/',
            ]
          }
        ],
      '/iOS-Summary/': [
        {
          title: 'iOS总结',
          children: [
            '/iOS-Summary/Animation.html',
            '/iOS-Summary/Arithmetic.html',
            '/iOS-Summary/Code-management.html',
            '/iOS-Summary/Component-based.html',
            '/iOS-Summary/Continuous-integration.html',
            '/iOS-Summary/Data-encryption.html',
            '/iOS-Summary/Data-storage.html',
            '/iOS-Summary/Data-structure.html',
            '/iOS-Summary/Debug-tips.html',
            '/iOS-Summary/Design-patterns.html',
            '/iOS-Summary/Foundation.html',
            '/iOS-Summary/Image-processing.html',
            '/iOS-Summary/Memory-management.html',
            '/iOS-Summary/Message-passing.html',
            '/iOS-Summary/Multi-thread.html',
            '/iOS-Summary/Network.html',
            '/iOS-Summary/Performance-optimization.html',
            '/iOS-Summary/Project-organization.html',
            '/iOS-Summary/Runloop.html',
            '/iOS-Summary/Runtime.html',
            '/iOS-Summary/Source-code.html',
            '/iOS-Summary/UIKit.html',
            '/iOS-Summary/WebView.html',
          ]
        }
      ],
      '/job-Summary/': [
        {
          title: '工作总结',
          children: [
            '/job-Summary/Arithmetic.html',
            '/job-Summary/Animation.html',

          ],
        }
      ]
    },
    // sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2,
    displayAllHeaders: true
  }
};
