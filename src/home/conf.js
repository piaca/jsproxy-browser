jsproxy_config({
  // 当前配置的版本（记录在日志中，用于排查问题）
  ver: '53',

  // 节点配置
  node_map: {
    'aliyun-hk': {
      label: '轻量云-香港',
      lines: [
        // 多条线路，负载均衡会从其中选一条
        'node-aliyun-hk-0.etherdream.com:8443',
        'node-aliyun-hk-1.etherdream.com:8443',
        'node-aliyun-hk-2.etherdream.com:8443',
      ]
    },
    'aliyun-sg': {
      label: '轻量云-新加坡',
      lines: [
        'node-aliyun-sg.etherdream.com:8443'
      ]
    },
    'bwh-la': {
      label: '搬瓦工-洛杉矶',
      lines: [
        'node-bwh-la.etherdream.com:8443'
      ]
    },
    'cfworker': {
      label: 'Cloudflare Worker',
      hidden: true,
      lines: [
        // 实验中...
        // 参考 https://github.com/EtherDream/jsproxy/tree/master/cf-worker
        'node-cfworker.etherdream.com:8443'
      ]
    }
  },

  /**
   * 默认节点  
   */
  node_default: 'aliyun-hk',

  /**
   * 加速节点
   */
  node_acc: 'cfworker',

  /**
   * 静态资源 CDN 地址
   * 用于加速 `assets` 目录中的资源访问
   */
  assets_cdn: 'assets/',

  /**
   * 自定义注入页面的 HTML
   */
  inject_html: '<!-- custom html -->',

  /**
   * URL 自定义处理（设计中）
   */
  url_handler: {
    'https://www.baidu.com/img/baidu_resultlogo@2.png': {
      replace: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
    },
    'https://www.pornhub.com/': {
      redir: 'https://php.net/'
    },
    'http://haha.com/': {
      content: 'Hello World'
    },
  }
})