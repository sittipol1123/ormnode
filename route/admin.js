const express = require('express');
const router = express.Router();
const {register, login} = require('../controller/auth/authen');
const { verifytoken } = require("../middleware/authmiddleware");

router.post('/login', login);

router.use(verifytoken);
router.post('/users', register);
router.get('/aaaa', (req, res) => {
    res.json({message: 'test'});
})
router.get('/protectedRoute', (req, res) => {
    res.send('This is a protected route');
});
module.exports = router;