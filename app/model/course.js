/*
 * @Author: bgg 
 * @Date: 2018-04-16 08:59:14  模型 - 课程
*/
'use strict';

module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE
  } = app.Sequelize;
  const Course = app.model.define('Course', {
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
    file: {
      type: STRING(300),
    },
    score: {
      type: INTEGER,
    },
    create_time: DATE,
    update_time: DATE,
  }, {
    freezeTableName: true,
    tableName: 'de_course',
    timestamps: false,
  });
  return Course;
}