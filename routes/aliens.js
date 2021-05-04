const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

router.get('/', async(req,res) => {
    try {
        const aliens = await Alien.find()
        res.json() 
    } catch(err) {
        res.send('Error' + err)
    }
})

router.get('/', async(req,res) => {
    try {
        const aliens = await Alien.find()
        res.json() 
    } catch(err) {
        res.send('Error' + err)
    }
})  

router.post('/', async(req,res) => {
    const alien = new Alien( {
        name: req.body.name,
        tech:rq.body.tech,
        sub: rq.body.sub
    })

    try{
        const a1 = await alien.save()
        res.json(a1)
    } catch(err) {
        res.send('Error' + err  )
    }
})

module.exports = router