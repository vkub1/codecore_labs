const express = require('express');
const knex = require('../db/client');
const router = express.Router();

router.get('/', (req,res) => {
    knex.select('*').from('notes').orderBy('createdAt', 'desc')
    .then(data => {
        res.render('./notes/index', {
            notes: data
        })
    });
});

router.get('/new', (req, res) => {
    res.render('./notes/new')
})

router.post('/', (req, res) => {
    console.log(req.body);
    knex('notes')
    .insert({
        content: req.body.content
    }).returning('*')
    .then(data => {
        res.redirect(`/notes/${data[0].id}`)
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    knex('notes').where('id', id)
    .first()
    .then(data => {
        res.render('./notes/show', {
            note: data
        })
    })
});


router.delete('/:id', (req, res) => {
    const id = req.params.id;
    knex('notes').where('id', id)
    .del()
    .then(() => {
        res.redirect('/notes')
    })
});

router.get('/:id/edit', (req, res) => {
    const id = req.params.id;
    knex('notes').where('id', id)
    .first()
    .then(data => {
        console.log(data);
        res.render(`notes/edit`, {
            note: data
        })
    })
})

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    knex('notes').where('id', id).update({
        content: req.body.content
    }).then(() =>{
        res.redirect(`/notes`)
    })
})





module.exports = router;