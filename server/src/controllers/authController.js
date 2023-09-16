const router = require('express').Router();
const userManager = require('../managers/userManager')

router.get('/login', (req, res) => {
res.send('Login page')
})

router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    try {
        const token = await userManager.login(email, password)
        res.status(200).json(token)
    } catch (error) {
        res.status(400).send(error.message);
    }

})

module.exports = router