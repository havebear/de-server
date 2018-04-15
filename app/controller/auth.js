'use strict';

const Controller = require('egg').Controller;

class AuthController extends Controller {
  async logout() {
    const {
      ctx
    } = this;
    ctx.body = await ctx.service.auth.clear();
  }
}

module.exports = AuthController;