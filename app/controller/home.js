'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // const serviceRes = await this.ctx.service.test.index();
    // const result = await this.app.model.FeedBack.findAll();
    // console.log(result);
    // this.ctx.body = 'hi, egg' + JSON.stringify(result);
  }
}

module.exports = HomeController;