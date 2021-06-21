const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST request to /products'
    });
});

router.get('/:productID', (req, res, next) => {
    const id = req.params.productID;
    if (id === 'special') {
        res.status(200).json({
            message: 'you have discover the special ID', 
            id: id 
        })
    }else{
        res.status(200).json({
            message: 'You did not passed the special ID'
        })
    }
})

router.patch('/:productID', (req, res, next) => {
    const id = req.params.productID;
    if (id === 'special') {
        res.status(200).json({
            message: 'you have updated the special ID', 
            id: id 
        })
    }else{
        res.status(200).json({
            message: 'You did not passed the special ID'
        })
    }
})

router.delete('/:productID', (req, res, next) => {
    const id = req.params.productID;
    if (id === 'special') {
        res.status(200).json({
            message: 'you have deleted the special ID', 
            id: id 
        })
    }else{
        res.status(200).json({
            message: 'You did not passed the special ID'
        })
    }
})

module.exports = router;

