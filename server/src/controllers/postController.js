const router = require('express').Router();
const postManager = require('../managers/postManager');

router.post('/create', async (req, res) => {
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
