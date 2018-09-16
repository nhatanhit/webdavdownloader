function WebDavFileManager() {
    this.fileArrays = [];
};
WebDavFileManager.prototype.readDirInfo = function(fileListInfo)  {
    //change info last modification time , from string to Date
    for(var i = 0 ; i < fileListInfo.length ; i++) {
        var fileInfo = fileListInfo[i];
        var parsedDate = Date.parse(fileInfo.lastmod);
        fileInfo.timeStamp = parsedDate;
        
        //this.fileArrays.push(fileInfo);
    }
}
WebDavFileManager.prototype.returnFileArray = function() {
    return this.fileArrays;
}
module.exports = WebDavFileManager;

 