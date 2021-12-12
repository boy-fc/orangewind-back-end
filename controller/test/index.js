/**
 * 测试实例
 */
const conn = require('../../conn')

// 测试接口
exports.testApi = async(req, res, next) => {
  try {
    res.send({
      name:'test',
      id: 1,
      number: 100
    })
  } catch (error) {
    next(error)
  }
}
