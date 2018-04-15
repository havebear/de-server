'use strict';

// had enabled by egg
// exports.static = true;

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

// exports.oauth2Server = {
//   enable: true,
//   package: 'egg-oauth2-server',
// };

exports.security = {
  enable: false,
  csrf: {
    ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
  },
};

exports.cors = {
  enable: true,
  package: 'egg-cors',
};

// exports.mongoose = {
//   enable: true,
//   package: 'egg-mongoose',
// };

exports.redis = {
  enable: true,
  package: 'egg-redis',
};

exports.jwt = {
  enable: true,
  package: "egg-jwt"
};