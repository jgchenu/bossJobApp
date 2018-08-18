const Router = require('koa-router')
const router = new Router()
const model = require('../model')
const User = model.user;
const utils = require('utility')

function addSalt(pwd) {
    const salt = 'job_boss_pwd';
    return utils.md5(salt + pwd);
}

router.get('/info', async (ctx) => {
    try {
        console.log(ctx.cookie)
        const user = ctx.cookie && ctx.cookie.user || '';
        if (!user) {
            ctx.body = {
                code: 201,
                msg: '没有登录'
            }
        } else {
            let result = await User.findOne({
                where: {
                    user
                },
                attributes: {
                    exclude: ['pwd']
                }
            });
            ctx.body = {
                code: 200,
                data: result
            }
        }

    } catch (error) {
        ctx.body = {
            code: 500,
            msg: error
        }
    }

})
router.post('/login', async (ctx) => {
    const {
        user,
        pwd
    } = ctx.request.body;
    let result = await User.findOne({
        where: {
            user,
            pwd: addSalt(pwd)
        },
        attributes: {
            exclude: ['pwd']
        }
    })
    if (!result) {
        ctx.body = {
            code: 201,
            msg: '用户名或者密码错误'
        }
    } else {
        ctx.cookies.set(
            'user', user
        )
        ctx.body = {
            code: 200,
            data: result
        }
    }
})
router.post('/register', async (ctx) => {
    try {
        const {
            user,
            pwd,
            type
        } = ctx.request.body;
        let result = await User.findOne({
            where: {
                user: user
            },

        })
        console.log(JSON.stringify(result))
        if (result) {
            ctx.body = {
                code: 201,
                msg: '用户已经存在'
            }
        } else {
            await User.create({
                user,
                pwd: addSalt(pwd),
                type
            }).then(() => {
                ctx.body = {
                    code: 200,
                    msg: '注册成功'
                }
            })
        }

    } catch (error) {
        ctx.body = {
            code: 500,
            msg: error
        }
    }

})
router.get('/list', async (ctx) => {
    try {
        let result = await User.findAll();
        ctx.body = {
            code: 200,
            msg: result
        }
    } catch (error) {
        console.log(error);
        ctx.body = {
            code: 500,
            msg: error
        }
    }
})
module.exports = router;