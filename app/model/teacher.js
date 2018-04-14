'use strict';
module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE
  } = app.Sequelize;
  const Teacher = app.model.define('Teacher', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    isavailable: {
      type: INTEGER,
    },
    file: {
      type: STRING(300),
    },
    nickname: {
      type: STRING(20),
    },
    actual_name: {
      type: STRING(10),
    },
    idc_number: {
      type: STRING(20),
    },
    phone: {
      type: STRING(20),
      primaryKey: true,
    },
    create_time: DATE,
    update_time: DATE,
  }, {
    freezeTableName: true,
    tableName: 'de_teacher',
    timestamps: false,
  });
  return Teacher;
};