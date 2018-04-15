'use strict';

const {
  ERROR_TOKEN,
} = require('../util/util');

module.exports = (options, app) => {
  return async function auth(ctx, next) {
    try {
      await next();
      const url = ctx.request.url;
      // 接口token验证白名单
      if (app.config.nonFilter.indexOf(url) === -1) {
        const token = ctx.request.header.token || "";
        // console.log("------------------start--------------------");
        // console.log('验证token中间件');
        // console.log(ctx.request.url);
        // console.log(await app.redis.get(token));
        // console.log(app.jwt.verify(token, app.config.jwt.secret));
        // console.log("-------------------end---------------------");
        if (!token || !(await app.redis.get(token)) || !app.jwt.verify(token, app.config.jwt.secret)) {
          ctx.body = ERROR_TOKEN;
        }
      }
    } catch (error) {
      ctx.status = 500;
      throw (error);
    }
  }
}