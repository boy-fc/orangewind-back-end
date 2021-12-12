/**
 * 公共连接池
 */

// 引入db配置
const models = require('./db')
// mysql模块
const mysql = require('mysql')
// 连接数据库
const conn = mysql.createConnection(models.mysql)

conn.connect(error => {
  if (error) {
    console.error('连接数据库失败:- ' + error.stack)
    return
  }
  console.log('连接数据库成功 Id:- ' + conn.threadId)
})

module.exports = conn

