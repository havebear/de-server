'use strict';

const Service = require('egg').Service;
const {
  ERROR,
  SUCCESS,
} = require('../util/util');

class CatalogService extends Service {
  async findAll() {
    const {
      ctx,
    } = this;
    // const option = {
    //   offset: pageIndex,
    //   limit: pageSize
    // };
    try { 
      const res = await this.app.model.Catalog.findAll();
      return Object.assign(SUCCESS, {
        data: res,
      });
    } catch (eerror) {
      ctx.status = 500;
      throw (error);
    }
  }
}

module.exports = CatalogService;