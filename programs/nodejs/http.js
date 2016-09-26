/**
 * Created by zhangpengfei8987 on 16.9.26.
 */
var http=require('http');

http.createServer(function (request , response) {
    response.writeHead(200,{"Content-Type":"text-plain"});
    response.end('hello world\n');
}).listen(8888);
console.log('Sever running at http://127.0.0.1:8888');