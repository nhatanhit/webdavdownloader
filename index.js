var config = require("./config");
var downloader = require("./lib/downloader");
/*var client = createClient(
    config.host,
    config.username,
    config.password
);
client.getDirectoryContents("/").then(function(contents){
    console.log(JSON.stringify(contents, undefined, 4));
});*/
downloader.downloadFiles();