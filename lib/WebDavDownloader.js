var EventEmiiter = require('events').EventEmitter;
var util = require('util');

function WebDavDownloader() {
    this.observerList = [];
    //init subscribe events
    this.handleSubscriberEvents();
}
WebDavDownloader.prototype.handleSubscriberEvents = function() {
    var observerList = this.observerList;
    this.on('listener_data_received',function() {
        for(var i = 0; i < observerList.length;i++) {
            observerList[i].saveIntoFileManager();
        }
    });
    this.on('finished_read_dir_info',function(data) {
        for(var i = 0; i < observerList.length;i++) {
            observerList[i].readDirInfo(data);
        }
        this.emit('listener_data_received');
    });
}
util.inherits(WebDavDownloader,EventEmiiter);
WebDavDownloader.prototype.addListener = function(listener) {
    return this.observerList.push(listener);
}

WebDavDownloader.prototype.onFinishedReadDirInfo = function(data) {
    this.emit('finished_read_dir_info',data);
}
module.exports = WebDavDownloader;
