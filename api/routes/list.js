const express = require('express');
const router = express.Router();
const Item = require('../model/items');

//  Get todo list
router.get('/', async (req, res, next) => {

    //  Try to get all items
    try {
        const items = await Item.find({});
        res.status(200).json(items);
    } catch (error) {
        return error;
    }

});

//  Add item to list
router.post('/:item', async (req, res, next) => {
    //  Grab item from form and create new item

    const item = new Item({item: req.params.item});
    //  Try to save it
    try {
        const pushItem = await item.save();
        res.status(200).json(item);
    } catch (error) {
        return error;
    }

});

//  Remove item from list
router.delete('/:id', async (req, res, next) => {
    try {
        const deleteItem = await Item.findByIdAndRemove({_id: req.params.id});
        res.status(200).json({
            message: "Item was removed",
        })
    } catch (error) {
        return error;
    }
});

module.exports = router;