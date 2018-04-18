'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async list() {
    const {
      ctx
    } = this;
    ctx.body = await ctx.service.test.findAll(ctx.params.pageIndex, ctx.params.pageSize);
  }

  async find() {
    const {
      ctx
    } = this;
    const id = ctx.params.id;
    ctx.body = await ctx.service.test.findOne(id);
  }
}

module.exports = TestController;