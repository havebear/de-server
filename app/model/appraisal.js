/*
 * @Author: bgg 
 * @Date: 2018-04-16 08:58:27  模型 - 评价
*/
'use strict';
module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE
  } = app.Sequelize;
  const Appraisal = app.model.define('Appraisal', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type:{
      type: INTEGER,
    },
    by_id: {
      type: INTEGER,
    },
    to_id: {
      type: INTEGER,
    },
    score: {
      type: INTEGER,
    },
    content: {
      type: STRING(300),
    },
    approve: {
      type: INTEGER,
    },
    create_time: DATE,
    update_time: DATE,
  }, {
    freezeTableName: true,
    tableName: 'de_appraisal',
    timestamps: false,
  });
  return Appraisal;
};