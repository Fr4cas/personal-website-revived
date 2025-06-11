var http = require("http"); 
var fs = require("fs");
const port = 8000; 


http.createServer(function(req, res) { 
    res.writeHead(200, { "Content-Type": "text/html" });
    var readStream = fs.createReadStream(__dirname + "/index.html")
    readStream.pipe(res);

    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
}); 

