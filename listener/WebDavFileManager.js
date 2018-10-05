const Sequelize = require('sequelize');
var config = require("../config");
function WebDavFileManager() {
    this.fileArrays = [];
};
WebDavFileManager.prototype.readDirInfo = function(fileListInfo)  {
    var jsonData = JSON.parse(fileListInfo);
    //change info last modification time , from string to Date
    for(var i = 0 ; i < jsonData.length ; i++) {
        var fileInfo = jsonData[i];
        var parsedDate = Date.parse(fileInfo.lastmod);
        fileInfo.timeStamp = parsedDate;
        this.fileArrays.push(fileInfo);
    }
    
}
WebDavFileManager.prototype.saveIntoFileManager = function() {
    const sequelize = new Sequelize(config.filemanager.db, config.filemanager.username, config.filemanager.password, {
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
}
module.exports = WebDavFileManager;

 