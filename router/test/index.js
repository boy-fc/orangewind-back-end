/**
 * 测试接口
 */
const express = require('express')
const router = express.Router()
const test = require('../../controller/test')

router.get('/test', test.testApi)

module.exports = router
