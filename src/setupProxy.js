const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/users', { 
  	target: 'http://localhost:9999', 
  	changeOrigin:true
  }));

  app.use(proxy('/shopcars', { 
  	target: 'http://localhost:9999', 
  	changeOrigin:true
  }));
};