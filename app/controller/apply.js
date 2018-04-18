'use strict';

const Controller = require('egg').Controller;

class ApplyController extends Controller {
  async list() {
    const {
      ctx
    } = this;
    ctx.body = await ctx.service.apply.findAll(ctx.params.pageIndex, ctx.params.pageSize);
  }

  async find() {
    const {
      ctx
    } = this;
    const id = ctx.params.id;
    ctx.body = await ctx.service.apply.findOne(id);
  }
}

module.exports = ApplyController;