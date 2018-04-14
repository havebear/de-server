'use strict';

const Controller = require('egg').Controller;

class CataLogController extends Controller {
  async list() {
    const {
      ctx
    } = this;
    ctx.body = await ctx.service.catalog.findAll();
  }
}

module.exports = CataLogController;