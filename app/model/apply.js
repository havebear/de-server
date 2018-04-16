/*
 * @Author: bgg 
 * @Date: 2018-04-16 08:58:34  模型 - 申请
*/
'use strict';

module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE
  } = app.Sequelize;
  const Apply = app.model.define('Apply', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    by_id: {
      type: INTEGER,
    },
    file: {
      type: STRING(300),
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
    tableName: 'de_apply',
    timestamps: false,
  });
  return Apply;
}