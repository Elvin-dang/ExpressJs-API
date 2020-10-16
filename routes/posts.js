const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Get all post
router.get('/', async (req, res) => {
    try {
        const allPost = await Post.find();
        res.json(allPost);
    } catch(err) {
        res.json({message : err});
    };
});

// Summit post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch(err) {
        res.json({message : err});
    }
});

// Get specific post
router.get ('/:id', async (req, res) => {
    try {
        const specificPost = await Post.findById(req.params.id);
        res.json(specificPost);
    } catch(err) {
        res.json({message : err});
    }
})

// Delete post
router.delete('/:id', async (req, res) => {
    try {
        const deletedPost = await Post.deleteOne({_id: req.params.id});
        res.json(deletedPost);
    } catch(err) {
        res.json({message : err});
    }
})

// Update post
router.patch('/:id', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.id},
            {$set: {title: req.body.title}});
        res.json(updatedPost);
    } catch(err) {
        res.json({message : err});
    }
})

module.exports = router;