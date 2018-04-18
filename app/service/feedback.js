'use strict';

const Service = require('egg').Service;
const {
  ERROR,
  SUCCESS,
} = require('../util/util');

class FeedbackService extends Service {
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
        res = await this.app.model.Feedback.findAll();
      } else {
        res = await this.app.model.Feedback.findAll(option);
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
      const res = await this.app.model.Feedback.findById(id);
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
}

module.exports = FeedbackService;