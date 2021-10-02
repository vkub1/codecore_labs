const express = require('express');
const knex = require('../db/client');
const router = express.Router();

router.get('/', (req, res) => {
    knex.select('*').from('tasks').then(data => {
        res.render('./tasks/index', {
            tasks: data
        })
    });
});

router.get('/new', (req, res) => {
    res.render('tasks/new')
});

router.post('/', (req, res) => {
    const task = {
        body: req.body.body,
        completed: req.body.completed === ''
    }
    console.log(task);
    knex('tasks').insert(task).returning('*')
    .then(data =>{
        res.redirect(`./tasks/${data[0].id}`)
    }
    )
})

router.get('/:id', (req,res) => {
    const id = req.params.id;
    knex('tasks').where('id', id).first()
    .then(data => {
        res.render('./tasks/show', {
            task: data
        })
    })
})



module.exports = router;