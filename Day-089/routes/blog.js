const express = require('express');
const router = express.Router()

//define the home page
router.get('/', (req, res) => {
    res.send('Hello this is Home page')
})

//define the about page
router.get('/about', (req, res) => {
    res.send('This is about page')
})

//define the blog page
router.get('/blogpost/:slug', (req, res) => {
    res.send(`fetching the blogs of ${req.params.slug}`)
})

module.exports = router;