const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  // app.use(
  //   "/api/flask",
  //   createProxyMiddleware({
  //     target: "http://127.0.0.1:80",
  //     changeOrigin: true,
  //     pathRewrite: {
  //       "^/api/flask": "",
  //     },
  //   })
  // );

  app.use(
    "/api/v1",
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api/v1": "",
      },
    })
  );
};
