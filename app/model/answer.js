/*
 * @Author: bgg 
 * @Date: 2018-04-16 08:58:43  模型 - 答案
*/
'use strict';

module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE
  } = app.Sequelize;
  const Answer = app.model.define('Answer', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    top_id: {
      type: INTEGER,
    },
    content: {
      type: STRING(300),
    },
    create_time: DATE,
    update_time: DATE,
  }, {
    freezeTableName: true,
    tableName: 'de_answer',
    timestamps: false,
  });
  return Answer;
}