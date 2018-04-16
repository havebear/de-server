/*
 * @Author: bgg 
 * @Date: 2018-04-16 08:56:37  模型 - 收藏
*/

'use strict';

module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE
  } = app.Sequelize;
  const Collection = app.model.define('Collection', {
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
    tableName: 'de_collection',
    timestamps: false,
  });
  return Collection;
}