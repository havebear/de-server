'use strict';

const Service = require('egg').Service;
const {
  ERROR,
  SUCCESS,
} = require('../util/util');

class CatalogService extends Service {

  async findAll(pageIndex = 1, pageSize = 10) {
    let index = parseInt(pageIndex);
    let size = parseInt(pageSize);
    const {
      ctx,
    } = this;
    const option = {
      offset: (index - 1) * size,
      limit: size
    };
    try {
      let res = [];
      if (index === 0 && size === 0) {
        res = await this.app.model.Catalog.findAll();
      } else {
        res = await this.app.model.Catalog.findAll(option);
      }
      return Object.assign(SUCCESS, {
        data: res,
      });
    } catch (error) {
      ctx.status = 500;
      throw (error);
    }
  }
}

module.exports = CatalogService;