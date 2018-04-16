/*
 * @Author: bgg 
 * @Date: 2018-04-16 08:59:58  模型 - 测评结果
 */
'use strict';

module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE
  } = app.Sequelize;
  const TestResult = app.model.define('TestResult', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    by_id: {
      type: INTEGER,
    },
    to_id: {
      type: INTEGER,
    },
    type_id: {
      type: INTEGER,
    },
    score: {
      type: INTEGER,
    },
    remake: {
      type: STRING(300),
    },
    create_time: DATE,
    update_time: DATE,
  }, {
    freezeTableName: true,
    tableName: 'de_test_result',
    timestamps: false,
  });
  return TestResult;
}