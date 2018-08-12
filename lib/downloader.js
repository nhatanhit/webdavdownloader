var createClient = require("webdav");
var config = require("../config");


var downloader = module.exports = {};

var client = createClient(
    config.host,
    config.username,
    config.password
);
var dataContents = '';
downloader.downloadFiles = function() {
    client.getDirectoryContents("/").then(function(contents){
        dataContents = JSON.stringify(contents, undefined, 4);
        var fileArrays = JSON.parse(dataContents);    
        console.log(fileArrays[fileArrays.length - 1]);
    });
    
}

