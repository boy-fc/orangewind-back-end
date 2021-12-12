/**
 * 路由总配置
 */

// 加载express
const express = require('express')
// 创建路由对象
const router = express.Router()

// 测试路由
router.use(require('./test'))

// 4. 导出路由模块
module.exports = router
