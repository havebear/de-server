/*
 * @Author: bgg 
 * @Date: 2018-04-16 08:59:58  模型 - 题目
 */
'use strict';

module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE
  } = app.Sequelize;
  const Toppic = app.model.define('Toppic', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    test_id: {
      type: INTEGER,
    },
    answer_id: {
      type: INTEGER,
    },
    content: {
      type: STRING(300),
    },
    remack: {
      type: STRING(300),
    },
    create_time: DATE,
    update_time: DATE,
  }, {
    freezeTableName: true,
    tableName: 'de_toppic',
    timestamps: false,
  });
  return Toppic;
}