// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/.netlify/functions',
    createProxyMiddleware({
      target: 'https://chipper-piroshki-43ccc4.netlify.app',
      changeOrigin: true,
    })
  );
};
