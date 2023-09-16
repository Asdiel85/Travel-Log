const router = require('express').Router();
const homeController = require('./controllers/homeController')
const postController = require('./controllers/postController')
const authController = require('./controllers/authController')


router.use(homeController)
router.use('/posts', postController)
router.use('/auth', authController)

module.exports = router