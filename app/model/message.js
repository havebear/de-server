/*
 * @Author: bgg 
 * @Date: 2018-04-16 08:59:43  模型 - 消息
*/
'use strict';
module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE
  } = app.Sequelize;
  const Message = app.model.define('Message', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    isready: {
      type: INTEGER,
    },
    by_id: {
      type: INTEGER,
    },
    to_id: {
      type: INTEGER,
    },
    content: {
      type: STRING(300),
    },
    create_time: DATE,
    update_time: DATE,
  }, {
    freezeTableName: true,
    tableName: 'de_message',
    timestamps: false,
  });
  return Message;
};