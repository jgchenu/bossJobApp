const Koa = require('koa')
const cookie = require('koa-cookie')
const app = new Koa();
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const home = require('./api/home')
const user = require('./api/user')
const router = new Router();
router.use(cookie.default())
router.use('/data', home.routes())
router.use('/user', user.routes())
app.use(cors())
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())
app.use(async (ctx) => {
    ctx.body = `<h1>Hello world</h1>`
})
// var server = require('http').Server(app.callback()),
//     io = require('socket.io')(server);
app.listen(8080, () => {
    console.log('listen 8080')
})