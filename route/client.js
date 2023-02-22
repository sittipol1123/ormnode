const express = require('express');
const clientrouter = express.Router();
const { Post, User } = require('../models');


clientrouter.post('/posts', async (req, res) => {
    const { userUuid, body } = req.body;

    try {
        const user = await User.findOne({ where: { uuid: userUuid } });
        const post = await Post.create({ body, userId: user.id });
        return res.json(post);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

clientrouter.get('/posts', async (req, res) => {
    try {
        const post = await Post.findAll({ include: 'user' });
        return res.json(post);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

clientrouter.get('/client', (req, res) => {
    res.send('client router');
});

module.exports = clientrouter;