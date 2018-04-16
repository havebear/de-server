/*
 * @Author: bgg 
 * @Date: 2018-04-16 08:59:00  模型 - 课程目录
*/
'use strict';

module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE
  } = app.Sequelize;
  const CourseDirectory = app.model.define('CourseDirectory', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: STRING(100),
    },
    course_id: {
      type: INTEGER,
    },
    file: {
      type: STRING(300),
    },
    create_time: DATE,
    update_time: DATE,
  }, {
    freezeTableName: true,
    tableName: 'de_course_directory',
    timestamps: false,
  });
  return CourseDirectory;
}