const Router = require('koa-router')
const router = new Router();
router.get('/', async (ctx) => {
    ctx.body = {
        code: 200,
        age: 23,
        user: 'jgchen'
    }
})
module.exports = router;