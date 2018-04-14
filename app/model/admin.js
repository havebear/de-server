'use strict';
module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE
  } = app.Sequelize;
  const Admin = app.model.define('Admin', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nickname: {
      type: STRING(20),
    },
    nickname: {
      type: STRING(20),
    },
    email: {
      type: STRING(40),
      primaryKey: true,
    },
    create_time: DATE,
    update_time: DATE,
  }, {
    freezeTableName: true,
    tableName: 'de_admin',
    timestamps: false,
  });
  return Admin;
};