//使用 require 指令来载入 http 模块
var http = require("http");

//使用 http.createServer() 方法创建服务器,函数通过 request, response 参数来接收和响应数据.
http.createServer(function(request, response) {
    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/html
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hello World!");
    response.end();
}).listen(8080);   //使用listen方法绑定8080端口

//终端打印
console.log("Server running at http://localhost:8080/");