'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async list() {
    const {
      ctx
    } = this;
    ctx.body = await ctx.service.admin.findAll();
  }

  async token() {
    const {
      ctx
    } = this;
    // console.log(ctx.request.body.username);
    ctx.body = await this.service.admin.token(ctx.request.body);
  }
}

module.exports = AdminController;