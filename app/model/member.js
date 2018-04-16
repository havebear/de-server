/*
 * @Author: bgg 
 * @Date: 2018-04-16 08:59:35  模型 - 小程序用户
*/
'use strict';
module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE
  } = app.Sequelize;
  const Member = app.model.define('Member', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    isavailable: {
      type: INTEGER,
    },
    phone: {
      type: STRING(20),
    },
    nickname: {
      type: STRING(20),
    },
    file: {
      type: STRING(300),
    },
    grade: {
      type: INTEGER,
    },
    level: {
      type: INTEGER,
    },
    integral: {
      type: INTEGER,
    },
    openid: {
      type: STRING(10),
    },
    create_time: DATE,
    update_time: DATE,
  }, {
    freezeTableName: true,
    tableName: 'de_member',
    timestamps: false,
  });
  return Member;
};