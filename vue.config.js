const path = require('path')
let name = 'dist'
if (process.env.NODE_ENV == 'test') {
  name = 'dist-test'
} else {
  name = 'dist'
}
module.exports = {
  outputDir: name,
  // devServer: {
  //   host: 'act.wxdata.cn', // can be overwritten by process.env.HOST
  //   port: 8080,
  // },
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        'pic': path.resolve(__dirname, 'src/assets/img')
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [],
    },
  },
  // devServer: {
  //   proxy: {
  //     '/book': {
  //       target: 'http://10.200.2.253:20006',
  //       // target: 'http://172.16.1.179:1111',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/book': '',
  //       },
  //     },
  //   },
  // },
};


// //获取基础路由
// function getProcess() {
//   switch (process.env.NODE_ENV) {
//       case 'development':
//           return "http://localhost:57156/" //这里是本地的请求url
//       case 'test': // 注意这里的名字要和步骤二中设置的环境名字对应起来
//           return "http://www.cnblogs.com/XHappyness/" //这里是测试环境中的url
//       case 'production':
//           return "https://www.cnblogs.com/XHappyness/p/7686267.html" //生产环境url
//   }
// }