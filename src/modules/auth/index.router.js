const router = require('express').Router();

const userController = require('./index.controller')

router.get('/user', userController.user)

router.post('/register', userController.register)

router.post('/login', userController.login)

module.exports = router