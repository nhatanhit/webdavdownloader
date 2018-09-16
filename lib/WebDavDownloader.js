var EventEmiiter = require('events').EventEmitter;
var util = require('util');

function WebDavDownloader() {
    this.observerList = [];
}
util.inherits(WebDavDownloader,EventEmiiter);

WebDavDownloader.prototype.addListener = function(listener) {
    return this.observerList.push(listener);
}
WebDavDownloader.prototype.onFinishedReadDirInfo = function(data) {
    for(var i = 0; i < this.observerList.length;i++) {
        
        this.on('finished_read_dir_info', this.observerList[i].readDirInfo);   
    }
    this.emit('finished_read_dir_info',data);
}
module.exports = WebDavDownloader;
