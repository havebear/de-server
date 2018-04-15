'use strict';

const Service = require('egg').Service;
const {
  ERROR,
  SUCCESS,
} = require('../util/util');

class TeacherService extends Service {
  async findAll(pageIndex = 1, pageSize = 10) {
    let index = parseInt(pageIndex);
    let size = parseInt(pageSize);
    const {
      ctx,
    } = this;
    const option = {
      offset: (index - 1) * size,
      limit: size
    };
    try {
      console.log(option);
      let res = [];
      if (index === 0 && size === 0) {
        res = await this.app.model.Teacher.findAll();
      } else {
        res = await this.app.model.Teacher.findAll(option);
      }
      return Object.assign(SUCCESS, {
        data: res,
      });
    } catch (error) {
      ctx.status = 500;
      throw (error);
    }
  }

  async findOne(id) {
    const {
      ctx,
    } = this;
    try {
      const res = await this.app.model.Teacher.findById(id);
      if (res) {
        return Object.assign(SUCCESS, {
          data: res,
        });
      } else {
        return Object.assign(ERROR, {
          msg: '无数据',
        });
      }
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
        const teacher = await app.model.Teacher.findAll({
          limit: 1,
          where: {
            phone: username,
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
            user: teacher[0]
          },
        });
      }
    } catch (error) {
      ctx.status = 500;
      throw (error);
    }
  }
}

module.exports = TeacherService;