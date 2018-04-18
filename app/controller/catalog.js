'use strict';

const Controller = require('egg').Controller;

class CataLogController extends Controller {
  async list() {
    const {
      ctx
    } = this;
    ctx.body = await ctx.service.catalog.findAll(ctx.params.pageIndex, ctx.params.pageSize);
  }
}

module.exports = CataLogController;