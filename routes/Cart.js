const express = require('express');
const router = express.Router();

const Cart = require('../models/Cart')
const Item = require('../models/Item')

router.get('/', async (req,res) => {
    try {
        const cartItems = await Cart.find();
        res.json(cartItems);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }   
});


router.post('/:id', async (req,res) => {
    
    const id = req.params.id;

    await Item.findOne({ _id: id }, async (err,result) => {
        const { name, price, description, image } = result;
        const newCartstatus = 1;
        await Item.findByIdAndUpdate(id, { cartStatus : newCartstatus });

        await Cart.findOne( { itemId: id }, async (err,docs) => {
            
            if(!docs) {
                const newItem =  new Cart ({
                        itemId : id,
                        name,
                        price,
                        description,
                        image,
                        quantity: 1
                    })

                await newItem.save();
                res.status(200).json({msg: "item saved successfully to cart"})

             } else {
                //console.log(docs._id + " " + docs.quantity)
                const newQuantity = docs.quantity + 1;
                await Cart.findByIdAndUpdate(docs._id, { quantity: newQuantity });
                res.send("already in cart, quantity increased")
                    
            }
        })
    })
})

router.put('/increase/:id', async (req, res) => {
    const id  = req.params.id
    //console.log(req.params.id)
    await Cart.findByIdAndUpdate({ _id: id }, { $inc : {  quantity : 1 }});
    res.json({msg:  "Successfully updated quantity"});
})

router.put('/decrease/:id', async (req, res) => {
    const id  = req.params.id
    //console.log(req.params.id)
    await Cart.findByIdAndUpdate({ _id: id }, { $inc : {  quantity : -1 }});
    res.json({msg:  "Successfully updated quantity"});
})

router.delete('/:id', async(req,res) => {
    const id = req.params.id;

    await Item.findOne({ _id: id }, async (err,result) => {
        const newCartstatus = 0;
        await Item.findByIdAndUpdate(id, { cartStatus : newCartstatus }); 
        
        await Cart.findOneAndDelete({itemId: id});
        res.sendStatus(200);
    })
})

module.exports = router;