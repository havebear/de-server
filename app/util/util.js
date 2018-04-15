'use strict';
module.exports = {
  // 请求失败
  ERROR: {
    code: 4200,
    msg: 'failed',
  },
  // token不合法或者token过期了
  ERROR_TOKEN: {
    code: 4100,
    msg: '用户登录信息失效，请重新登录',
  },
  // 请求成功
  SUCCESS: {
    code: 0,
    msg: 'success',
  },
  unique(arr) {
    return arr.filter(function (item, index, arr) {
      return arr.indexOf(item) === index;
    });
  },
};