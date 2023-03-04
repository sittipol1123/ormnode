const express = require('express');
const router = express.Router();
const {register, login} = require('../controller/auth/authen');
const { verifytoken } = require("../middleware/authmiddleware");
const news = require('../controller/admin/NewsController');

router.post('/login', login);

// router.use(verifytoken);
router.post('/users', register);
router.get('/aaaa', (req, res) => {
    res.json({message: 'test'});
})
router.get('/protectedRoute', (req, res) => {
    res.send('This is a protected route');
});

// news route
router.get('/news', news.index);
router.post('/news/create', news.create);
router.get('/news/:id', news.find);
router.put('/news/update/:id', news.update);
router.delete('/news/destroy/:id', news.destroy);

module.exports = router;