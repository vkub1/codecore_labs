const express = require('express');
const router = express.Router();

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7;

router.post('/sign_in', (req, res) => {
    const user = { 
        username: req.body.username || '',
        name: req.cookies.name || '',
        tasks: req.cookies.tasks || [],
        language: req.cookies.language || 'English'
    }
    res.cookie('user', user, {maxAge: COOKIE_MAX_AGE})
    res.redirect('/')
})

router.post('/sign_out', (req, res) => {
    res.clearCookie('user');
    res.redirect('/');
})


module.exports = router;