'use strict';

module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE
  } = app.Sequelize;
  const CataLog = app.model.define('CataLog', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: STRING(10),
    },
    create_time: DATE,
    update_time: DATE,
  }, {
    freezeTableName: true,
    tableName: 'de_catalog',
    timestamps: false,
  });
  return CataLog;
}