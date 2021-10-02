const express = require('express');
const knex = require('../db/client');
const router = express.Router();

router.get('/', (req,res) => {
    knex.select('*').from('bills')
    .then(data => {
        console.log(data);
        res.render('./bills/index', {
            bills: data
        })
    });
});

router.get('/new', (req, res) => {
    res.render('./bills/new');
})

router.post('/', (req, res) => {
    const newBill = {
        billTotal: parseFloat(req.body.billTotal),
        tipPercentage: parseFloat(req.body.tipPercentage),
        taxPercent: parseFloat(req.body.taxPercent),
        numberOfPeople: parseInt(req.body.numberOfPeople)
    }
    knex('bills').insert(newBill).then( data => {
        // res.redirect(`/bills/${data[0].id}`)
    })
})

router.get('/:id', (req, res)=> {
    const id = req.params.id;
    knex('bills').where('id', id).first().then(data => {
        res.render('./bills/show', {
            bill: data
        });
    })
})

module.exports = router;