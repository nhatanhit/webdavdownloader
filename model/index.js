'use strict';
const fs = require('fs');
/* Path */
const path = require('path');

/* Sequelize */
const Sequelize = require('sequelize');
const config = require('../config');

global.logFileManagerObj = new Sequelize(config.filemanager.db, config.filemanager.username, config.filemanager.password, {
    host: config.filemanager.host,
    dialect: config.filemanager.db_type,
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
});
const fileManagerDB = {};
fs.readdirSync(__dirname).filter((file) => {
  return (file.indexOf('.') !== 0 && (file !== 'index.js'));
}).forEach((file) => {
  if (!file.indexOf('base') > 0) {
    const model = global.logFileManagerObj.import(path.join(__dirname,file));
    fileManagerDB[model.name] = model;
  }
});
fileManagerDB.sequelize = global.logFileManagerObj;
fileManagerDB.Sequelize = Sequelize;

module.exports = {
  fileManagerDB: fileManagerDB
}

