const Router = require('koa-router')
const router = new Router()
router.get('/info', async (ctx) => {
    ctx.body = {
        code: 1,
        messgae: '登录成功'
    }
})
module.exports = router;