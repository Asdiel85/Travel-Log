const router = require('express').Router();
const postManager = require('../managers/postManager');
const {routeGuard} = require('../middlewares/authMiddleware')

router.get('/create', routeGuard, (req, res) => {
  res.status(200).send('Create post get')
})

router.post('/create', routeGuard, async (req, res) => {
  const { country, city, imageUrl, cost, description } = req.body;

  try {
    const post = await postManager.create({
      country,
      city,
      imageUrl,
      cost,
      description,
      owner: req.user._id
    });
    res.status(201).json(post)
  } catch (error) {
    res.status(401).json(error.message)
  }
});

module.exports = router;
