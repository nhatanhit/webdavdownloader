var createClient = require("webdav");
var config = require("../config");
var WebDavDownloader = require("./WebDavDownloader");
var WebDavFileManager = require("../listener/WebDavFileManager");

var downloader = module.exports = {};

var client = createClient(
    config.webdav.host,
    config.webdav.username,
    config.webdav.password
);
var dataContents = '';
var webDownloader = new WebDavDownloader();
var webDavFileManager = new WebDavFileManager();
webDownloader.addListener(webDavFileManager);
downloader.downloadFiles = function() {
    client.getDirectoryContents("/").then(function(contents){
        dataContents = JSON.stringify(contents, undefined, 4);
        webDownloader.onFinishedReadDirInfo(dataContents);
    });
    
}

