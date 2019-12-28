const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'GK黎光',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: '问题',
        link: '/problems/'
      },
      {
        text: '学习',
        link: '/study/'
      },
      {
        text: '个人',
        link: '/myself',
      }
    ],
    siderbar: [
      {
        title: '首页',
        path: '/'
      },
      {
        title: '问题',
        path: '/problems/',
        children: [
            '',
            ['20191228', '20191228']
        ]
      },
      {
        title: '学习',
        path: '/study/',
        children: [
          ''
        ]
      },
      {
        title: '个人',
        path: '/myself'
      },
    ]
    // sidebar: {
    //   '/problems/': [
    //     {
    //       title: '问题',
    //       collapsable: false,
    //       children: [
    //         '',
    //       ]
    //     }
    //   ],
    //   '/study/': [
    //     {
    //       title: '学习',
    //       collapsable: false,
    //       children: [
    //         '',
    //       ]
    //     }
    //   ],
    // }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
