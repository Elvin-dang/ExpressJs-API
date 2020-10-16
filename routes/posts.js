const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', (req, res) => {
    res.send("this is a post");
});

router.post('/', (req, res) => {
    cons
})

module.exports = router;