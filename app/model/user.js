/*
 * @Author: bgg 
 * @Date: 2018-04-16 09:00:12  模型 - 基础用户
 */
'use strict';
module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE
  } = app.Sequelize;
  const User = app.model.define('User', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: STRING(20),
    },
    password: {
      type: STRING(40),
    },
    salt: {
      type: STRING(40),
    },
    create_time: DATE,
    update_time: DATE,
  }, {
    freezeTableName: true,
    tableName: 'de_user',
    timestamps: false,
  });
  return User;
};