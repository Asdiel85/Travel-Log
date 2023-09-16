const router = require('express').Router();
const homeController = require('./controllers/homeController')
const postController = require('./controllers/postController')


router.use(homeController)
router.use('/posts', postController)

module.exports = router