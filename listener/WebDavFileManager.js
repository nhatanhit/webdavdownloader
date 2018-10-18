var config = require("../config");
var RecordList = require("../model/record_list");
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
    RecordList.bulkCreate(this.fileArrays,true);
}
module.exports = WebDavFileManager;

 