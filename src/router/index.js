const router = require('express').Router();
const authRouter = require('../modules/auth/index.router')

router.use('/auth', authRouter)

module.exports = router