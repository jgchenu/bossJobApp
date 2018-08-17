const Koa = require('koa')
const app = new Koa;
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const home = require('./api/home')
const router = new Router;
router.use('/data', home.routes())
app.use(bodyParser())
app.use(cors())
app.use(router.routes())
app.use(router.allowedMethods())
app.use(async (ctx) => {
    ctx.body = `<h1>Hello world</h1>`
})
app.listen(8080, () => {
    console.log('listen 8080')
})