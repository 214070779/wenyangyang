module.exports = {
  title: '洋仔的个人主页',
  description: '用心总结，专心做事',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/photo.jpg' }],
    ['link', { rel: 'manifest', href: '/images/photo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/photo.jpg' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate' }],
    ['meta', { 'http-quiv': 'expires', cotent: '0' }]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav: [ // 导航栏配置
      { text: '前端总结', link: '/H5/' },
      { text: '算法总结', link: '/algorithm/' },
      { text: 'iOS总结', link: '/iOS-Summary/' },
      { text: 'git总结', link: '/git/' },
      { text: '设计模式', link: '/design-Patterns/' },
      { text: '理财体系', link: '/investment/' },
    ],
    sidebar: {
      '/H5/': [
        {
          title: '前端总结',
          collapsable: true,
          children: [
            'brower',
            'beike',
            'browerStudy',
            'bytedance',
            'alibaba',
            'Angular',
            'baidu',
            'bigo',
            'cmbchina',
            'CS',
            'css',
            'designStudy',
            'es6Study',
            'ESsix',
            'gauzi',
            'horizon',
            'html',
            'kuangshi',
            'megvii',
            'meituan',
            'microsoft',
            'MobileWeb',
            'mycode',
            'network',
            'Node',
            'Other',
            'performance',
            'pinduoduo',
            'project',
            'SQL',
            'tencent',
            'tusimple',
            'vivo',
            'wangyi',
            'webpack',
            'webSecurity',
            'xinghuan',
            'yuanfudao',
            'zuoyebang',
          ]
        }
      ],

      '/algorithm/': [
        {
          title: '算法题库',
          children: [
            '链表',
            '数组',
            '字典',
          ]
        }
      ],
      '/iOS-Summary/': [
        {
          title: 'iOS总结',
          children: [
            'Arithmetic',
            'Code-management',
            'Component-based',
            'Continuous-integration',
            'Data-encryption',
            'Data-storage',
            'Data-structure',
            'Debug-tips',
            'Design-patterns',
            'Foundation',
            'Image-processing',
            'Memory-management',
            'Message-passing',
            'Multi-thread',
            'Network',
            'Performance-optimization',
            'Project-organization',
            'Runloop',
            'Runtime',
            'Source-code',
            'UIKit',
            'WebView',
          ]
        }
      ],
      '/git/': [
        {
          title: 'git命令',
          children: [
            'gitStudy',
            'Git',
          ]
        }
      ],
      '/design-Patterns/': [
        {
          title: '设计模式',
          children: [
            '概述',
            '创建型模式',
            '结构型模式',
            '行为型模式',
          ]
        }
      ],
      '/investment/': [
        {
          title: '投资体系',
          children: [
            '财富算法',
            '三大定理',
            '投资武器',
            '公司分析',
          ]
        }
      ],
    },
    // sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 3,
    // displayAllHeaders: true
  }
};
