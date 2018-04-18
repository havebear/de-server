'use strict';

const Controller = require('egg').Controller;

class FeedbackController extends Controller {
  async list() {
    const {
      ctx
    } = this;
    ctx.body = await ctx.service.feedback.findAll(ctx.params.pageIndex, ctx.params.pageSize);
  }

  async find() {
    const {
      ctx
    } = this;
    ctx.body = await ctx.service.feedback.findOne(ctx.params.id);
  }
}

module.exports = FeedbackController;