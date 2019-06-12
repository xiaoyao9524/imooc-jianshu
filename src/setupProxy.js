const proxy = require('http-proxy-middleware');
 
module.exports = function (app) {
  app.use(
      proxy(
          '/trending_search',
          {
            target: 'https://www.jianshu.com',
            changeOrigin: true
          }
      )
  );
};