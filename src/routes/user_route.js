const express = require('express');
const router = express.Router();

router.get('/user/:username', (req, res) => {
    res.send(`Hello ${req.params.username}`)
})

router.get('/user/:username/wishlist', (req, res) => {
    res.send(`${req.params.username} Wishlist`)
})

router.post('/user/:username/wishlist', (req, res) => {
    res.send(`Added product to ${req.params.username} Wishlist`)
})

router.post('/user/:username/update', (req, res) => {
    res.send(`Updated ${req.params.username}`)
})

export default router;