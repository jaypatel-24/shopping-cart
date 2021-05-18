const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Item = require('../models/Item')


router.post('/create-item',
  [
    check('name' , 'Name is required').not().isEmpty(),
    check('price' , 'Price is required').not().isEmpty(),
    check('description' , 'Description is required').not().isEmpty()
  ] , async (req,res) => {
      
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors : errors.array() });
    }

    const { name, price, description, image } = req.body;
    try {
        const newItem =  new Item ({
            name,
            price,
            description,
            image
        })
        const item = await newItem.save();
        res.json(item);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


module.exports = router;