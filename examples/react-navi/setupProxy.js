

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/apiBackEnd',
        createProxyMiddleware({
            // target: 'http://localhost:8081',
            target: process.env.REACT_APP_BACKEND_SERVER,
            changeOrigin: true,
        })
    );
};