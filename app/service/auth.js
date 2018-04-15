'use strict';

const Service = require('egg').Service;
const {
  ERROR,
  SUCCESS,
} = require('../util/util');

class AuthService extends Service {
  async clear(token = "") {
    const {
      ctx,
      app
    } = this;
    try {
      const user = await app.redis.get(token);
      if (user) {
        await app.redis.del(token)
        return Object.assign(SUCCESS, {
          mag: '退出登录成功',
        });
      }
    } catch (error) {
      ctx.status = 500;
      throw (error);
    }
  }
}