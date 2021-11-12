const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send(req.session.cart)
})
router.post('/add', (req, res, next) => {
    if (!req.body.id) return res.sendStatus(500)
    const product = { id: req.body.id, quantity: req.body.quantity ? req.body.quantity : 1 }
    if (req.session.cart) req.session.cart.push(product)
    else req.session.cart = [product]
    res.sendStatus(200)
})
router.delete('/remove', (req, res, next) => {
    if (req.session.cart) req.session.cart = req.session.cart.filter(item => item.id != req.body.id)
    res.sendStatus(204)
})
router.put('/edit', (req, res, next) => {
    if (req.session.cart) req.session.cart = req.session.cart.map(item => {
        if (item.id === req.body.id) return { quantity: req.body.quantity, id: item.id }
        return { item }
    })
    res.sendStatus(201)
})

module.exports = router;