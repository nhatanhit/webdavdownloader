var EventEmiiter = require('events').EventEmitter;
var util = require('util');
module.exports = Downloader;
function WebDavDownloader() {
    this.observerList = [];
}
util.inherits(WebDavDownloader,EventEmiiter);

WedbDavDownloader.prototype.addListener = function(listener) {
    return this.observerList.push(listener);
}
WebDavDownloader.prototype.onFinishedReadDirInfo = function() {
    for(var i = 0; i < this.observerList.length;i++) {
        this.on('finished_read_dir_info', this.observerList[i].onReadDirInfo);   
    }
    this.emit('finished_read_dir_info');
}

