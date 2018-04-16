/*
 * @Author: bgg 
 * @Date: 2018-04-16 08:59:58  模型 - 测评
*/
'use strict';

module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE
  } = app.Sequelize;
  const Test = app.model.define('Test', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: STRING(100),
    },
    description: {
      type: STRING(300),
    },
    by_id: {
      type: INTEGER,
    },
    type_id: {
      type: INTEGER,
    },
    grade: {
      type: INTEGER,
    },
    remake: {
      type: STRING(300),
    },
    score: {
      type: INTEGER,
    },
    create_time: DATE,
    update_time: DATE,
  }, {
    freezeTableName: true,
    tableName: 'de_test',
    timestamps: false,
  });
  return Test;
}