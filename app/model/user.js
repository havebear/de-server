'use strict';
module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE
  } = app.Sequelize;
  const User = app.model.define('User', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: STRING(20),
    },
    password: {
      type: STRING(40),
    },
    salt: {
      type: STRING(40),
    },
    create_time: DATE,
    update_time: DATE,
  }, {
    freezeTableName: true,
    tableName: 'de_user',
    timestamps: false,
  });
  return User;
};