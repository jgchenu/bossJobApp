const Router = require('koa-router')
const router = new Router()
router.get('/info', async (ctx) => {
    ctx.body = {
        code: 200,
        msg: '登录成功'
    }
})
router.post('/register', async (ctx) => {
    ctx.body = {
        code: 200,
        msg: '注册成功'
    }
})
module.exports = router;