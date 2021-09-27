const express = require('express');
const router = express.Router();

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7;

router.get('/new_task', (request, response) => {
    // Render the newTask view as a response
    response.render('new_task');
});

router.post('/new_task', (request, response) => {
    const user = request.cookies.user || {};
    let tasks = user.tasks || [];
    if (!tasks) {
        tasks = [];
    }
    let title = request.body.title || '';
    let body = request.body.body || '';
    tasks.push({
        title: title,
        body: body
    })
    response.cookie('user', user, {maxAge: COOKIE_MAX_AGE});
    response.redirect('/');
});

// The callback for this route is executed when a get request is made to '/tasks'
// In the case of this project, it is when the link in the nav bar is clicked,
// or when the browser is redirected here after creating a task
router.get('/all_tasks', (request, response) => {
    response.render('all_tasks');
});

module.exports = router;