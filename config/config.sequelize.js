'use strict';
// egg-sequelize
const sequelize = {
  dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
  dialectOptions: {
    charset: 'utf8mb4',
  },
  database: 'de_study',
  host: 'localhost',
  port: '3306',
  username: 'root',
  password: '616749285',
  timezone: '+08:00',
};
module.exports = sequelize;