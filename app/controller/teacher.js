'use strict';

const Controller = require('egg').Controller;

class TeacherController extends Controller {
  async list() {
    const {
      ctx
    } = this;
    ctx.body = await ctx.service.teacher.findAll(ctx.params.pageIndex, ctx.params.pageSize);
  }

  async find() {
    const {
      ctx
    } = this;
    const id = ctx.params.id;
    ctx.body = await ctx.service.teacher.findOne(id);
  }
}

module.exports = TeacherController;