const path = require('path')
// 加载 express 模块
const express = require('express')
// 创建 express 服务器
const app = express()
// body-parser是非常常用的一个express中间件，作用是对http请求体进行解析
const bodyParser = require('body-parser')
// 路由挂载
const router = require('./router')

/** 中间件*/

// 处理 ‘x-www-form-urlencoded’ 编码格式的POST请求体 （把浏览器提交的数据放到 req.body中）
app.use(bodyParser.urlencoded({ extended: false }))
// json请求
app.use(bodyParser.json())
//默认静态文件地址
app.use(express['static'](path.join(__dirname, 'public')))
// 路由挂载
app.use(router)

// 启动服务器
app.listen(3000, () =>{
  console.log('Express 服务器启动，端口port: 3000')
})

