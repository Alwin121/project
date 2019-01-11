const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/users', { 
  	target: 'http://10.2.153.176:9999', 
  	changeOrigin:true
  }));

  app.use(proxy('/shopcars', { 
  	target: 'http://10.2.153.176:9999', 
  	changeOrigin:true
  }));
};