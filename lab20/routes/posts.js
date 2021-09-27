const express = require('express');
const knex = require('../db/client');
const router = express.Router();

router.get('/posts', (request , response) => {
    knex.select('*').from('posts').orderBy('createdAt', 'desc').then(data => {
        console.log(data);
        response.render('./posts/index', {
            posts: data
        })
    })
})

router.get('/new_post', (req, res) => {
    res.render('./posts/new')
})

router.post('/posts', (req, res) => {
    knex('posts')
    .insert({
        title: req.body.title,
        body: req.body.body,
        imageUrl: req.body.imageUrl
    }).returning('*')
    .then(data => {
        res.redirect(`/posts/${data[0].id}`)
    })
})

router.get('/posts/:id', (req,res) => {
    const id = req.params.id;
    knex('posts').where("id", id)
    .first()
    .then(data => {
        res.render('./posts/show', {
            post: data
        })
    })  
})

router.delete('/posts/:id', (req,res) => {
    const id = req.params.id;
    knex('posts').where('id', id)
    .del()
    .then(() =>
        res.redirect('/posts')
    );
})

router.get('/posts/:id/edit', (req, res) => {
    const id = req.params.id;
    knex('posts').where('id', id).first()
    .then(data => {
        console.log(data);
        res.render(`posts/edit`, {
            post: data
        })
    })
})

router.patch('/posts/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    knex('posts').where('id', id).update({
        title: req.body.title,
        body: req.body.body,
        imageUrl: req.body.imageUrl
    })
    .then(
        res.redirect(`/posts`)
    )
    
})

module.exports = router;