/*
 * @Author: bgg 
 * @Date: 2018-04-16 08:59:21  模型 - 反馈
*/
'use strict';
module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE
  } = app.Sequelize;
  const FeedBack = app.model.define('FeedBack', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    by_id: {
      type: INTEGER,
    },
    content: {
      type: STRING(300),
    },
    isready: {
      type: INTEGER,
    },
    create_time: DATE,
    update_time: DATE,
  }, {
    freezeTableName: true,
    tableName: 'de_feedback',
    timestamps: false,
  });
  return FeedBack;
};