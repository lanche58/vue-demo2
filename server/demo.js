const http = require('http');
const url = require('url');
const util = require('util');
const fs = require('fs'); // 文件系统

const server = http.createServer((req, res) => {
    const urlStr = req.url;
    const urlObj = url.parse(urlStr);
    // 读取文件
    // 加载index.html
    fs.readFile(urlObj.pathname.slice(1), (err, data) => {
       if (err) {
           res.writeHead(404, {'Content-Type': 'text/html'});
       } else {
           res.writeHead(200, {'Content-Type': 'text/html'});
           res.write(data.toString());
       }
       res.end();
    });
    
    //res.end(util.inspect(url.parse(urlStr))); // util.inspect将obj转化为string
});

server.listen(8000, () => {
    console.log('服务器已经启动');
});