'use strict';

const sequelizeConfig = require('./config.sequelize');
const corsConfig = require('./config.cors');
// const mongooseConfig = require('./config.mongoose');
const redisConfig = require('./config.redis');
const jwtConfig = require('./config.jwt');

module.exports = appInfo => {
  const config = exports = {};

  config.keys = '616749285';
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1523085898286_7366';

  // add your config here
  config.middleware = [];

  // egg-sequelize
  config.sequelize = sequelizeConfig;
  // cors
  config.cors = corsConfig;
  // mongoose
  // config.mongoose = mongooseConfig;
  config.redis = redisConfig;
  // jwt
  config.jwt = jwtConfig;

  return config;
};