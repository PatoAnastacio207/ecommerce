const { User, Product, Category } = require('./models')

const data = [
    {
        name: "producto1",
        price: 23
    },
    {
        name: "producto2",
        price: 50
    },
    {
        name: "producto3",
        price: 17
    },
    {
        name: "producto4",
        price: 45
    },
    {
        name: "producto5",
        price: 60
    },
]

data.forEach(async item => {
    await Product.create(item)
})