const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'All orders fetched'
    })
});

router.get('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: 'Order details', 
        orderID: req.params.orderID
    })
});

router.post('/:orderID', (req, res, next) => {
    res.status(201).json({
        message: 'Order created', 
        orderID: req.params.orderID
    })
});
router.delete('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: 'Order deleted', 
        orderID: req.params.orderID
    })
});

module.exports = router;
