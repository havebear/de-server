'use strict';

const Service = require('egg').Service;
const {
  ERROR,
  SUCCESS,
} = require('../util/util');

class UserService extends Service {

  async findOne() {
    const {
      ctx,
    } = this;
    try {
      const res = await this.app.model.User.findAll({
        where: {
          username: ctx.request.body.username,
          password: ctx.request.body.password,
        }
      });

      if (res) {
        return Object.assign(SUCCESS, {
          data: {
            token: res
          },
        });
      } else {
        return Object.assign(ERROR, {
          msg: '用户名或密码错误',
        });
      }

      // if (res) {
      //   return Object.assign(SUCCESS, {
      //     data: res,
      //   });
      // } else {
      //   return Object.assign(ERROR, {
      //     msg: '无数据',
      //   });
      // }
    } catch (error) {
      ctx.status = 500;
      throw (error);
    }
  }
}

module.exports = UserService;