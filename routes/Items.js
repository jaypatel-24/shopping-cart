const express = require('express');
const router = express.Router();

const Item = require('../models/Item')


router.get('/items', async (req,res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }   
});

module.exports = router;