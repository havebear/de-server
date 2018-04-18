'use strict';

const Controller = require('egg').Controller;

class CourseController extends Controller {
  async list() {
    const {
      ctx
    } = this;
    ctx.body = await ctx.service.course.findAll(ctx.params.pageIndex, ctx.params.pageSize);
  }

  async find() {
    const {
      ctx
    } = this;
    const id = ctx.params.id;
    ctx.body = await ctx.service.course.findOne(id);
  }
}

module.exports = CourseController;