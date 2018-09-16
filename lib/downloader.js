var createClient = require("webdav");
var config = require("../config");
var WebDavDownloader = require("./WebDavDownloader");
var WebDavFileManager = require("../listener/WebDavFileManager");

var downloader = module.exports = {};

var client = createClient(
    config.host,
    config.username,
    config.password
);
var dataContents = '';
var webDownloaer = new WebDavDownloader();
var webDavFileManager = new WebDavFileManager();
webDownloaer.addListener(webDavFileManager);
downloader.downloadFiles = function() {
    client.getDirectoryContents("/").then(function(contents){
        dataContents = JSON.stringify(contents, undefined, 4);
        webDownloaer.onFinishedReadDirInfo(dataContents);
    });
    
}

