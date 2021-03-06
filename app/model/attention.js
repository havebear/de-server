/*
 * @Author: bgg 
 * @Date: 2018-04-16 08:56:37  模型 - 关注
*/

'use strict';

module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE
  } = app.Sequelize;
  const Attention = app.model.define('Attention', {
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
    create_time: DATE,
    update_time: DATE,
  }, {
    freezeTableName: true,
    tableName: 'de_attention',
    timestamps: false,
  });
  return Attention;
}