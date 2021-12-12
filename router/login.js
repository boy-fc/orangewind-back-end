// 1. 加载express
const express = require('express');
// 2. 创建路由对象
const router = express.Router();

// 3. 将接口挂载到路由对象上
router.post('/login', (req, res) => {
    ....
});

router.get('/reg', (req, res) => {
    ....
});

...


// 4. 导出路由模块
module.exports = router;