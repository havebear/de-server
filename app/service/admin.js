'use strict';

const Service = require('egg').Service;
const {
  ERROR,
  SUCCESS,
} = require('../util/util');

class AdminService extends Service {
  async findAll() {
    const {
      ctx,
    } = this;
    try {
      const res = await this.app.model.Admin.findAll();
      return Object.assign(SUCCESS, {
        data: res,
      });
    } catch (error) {
      ctx.status = 500;
      throw (error);
    }
  }

  async finOne(id) {
    const {
      ctx,
    } = this;
    try {
      const res = await this.app.model.Admin.findById(id);
      return Object.assign(SUCCESS, {
        data: res,
      });
    } catch (error) {
      ctx.status = 500;
      throw (error);
    }
  }

  async token({
    username = '',
    password = ''
  }) {
    const {
      ctx,
      app
    } = this;
    try {
      const user = await this.app.model.User.findAll({
        limit: 1,
        where: {
          username: username,
          password: password,
        }
      });
      if (!user.length) {
        return Object.assign(ERROR, {
          msg: '用户名或密码错误',
        });
      } else {
        const admin = await app.model.Admin.findAll({
          limit: 1,
          where: {
            username: username,
          }
        });
        const _token = app.jwt.sign({
          exp: Math.floor(Date.now() / 1000) + (60 * 60 * 1000),
          username: username
        }, app.config.jwt.secret);
        await app.redis.set(_token, username);
        return Object.assign(SUCCESS, {
          data: {
            token: _token,
            user: admin[0]
          },
        });
      }
    } catch (error) {
      ctx.status = 500;
      throw (error);
    }
  }
}

module.exports = AdminService;