"use strict";
var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs');

var mimeTypes = {
    "html": "text/html",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"
};

http.createServer(staticServer).listen(3000);

function staticServer(req, res) {
    var pathname = url.parse(req.url).pathname;
    if (pathname === "/") {
        pathname = "index.html";
    }
    fileServer(res, pathname);
}

function fileServer(res, pathname) {
    var filename = path.join(process.cwd(), pathname);
    var extension = path.extname(filename).split(".")[1];
    if (!extension) {
        extension = "html";
        filename += "." + extension;
    }
    fs.exists(filename, function (exists) {
        if (!exists) {
            notFound(res);
        } else {
            res.writeHead(200, {
                'Content-Type': mimeTypes[extension]
            });
            fs.createReadStream(filename).pipe(res);
        }
    });
}

function notFound(res) {
    res.writeHead(404, {
        'Content-Type': 'text/html'
    });
    res.write("<html><head><meta charset='utf-8'></head><body><h1>404</h1> Nada por aquí</body></html>");
    res.end();
}
