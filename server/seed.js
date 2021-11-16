const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ecommerce:ecommerce@ecommerce.6slhp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

const User = require('./models/User')
const Product = require('./models/Product')

const data = [
    {
        name: "Skate magenta",
        price: 7500,
        imgUrl: "http://cdn.shopify.com/s/files/1/0421/9165/0983/products/a578692c-0190-4aef-a252-38f7524582bf_1200x1200.jpg?v=1618486858",
        inventory: 15,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacinia lorem. Nullam sollicitudin, arcu non ornare placerat, metus quam varius lacus, nec venenatis odio leo a orci. Curabitur a elit in nisl ultricies dictum vel quis ipsum. Nunc varius velit sit amet velit volutpat, ac eleifend lacus malesuada. Nulla.",
        category: {
            name: "skates",
            type: "calle"
        }
    },
    {
        name: "Shorts skater",
        price: 3250,
        imgUrl: "https://media.endclothing.com/media/catalog/product/1/5/15-04-2021_SI_POL-SQUARECITYSHORT-NVY_1_1.jpg",
        inventory: 7,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacinia lorem. Nullam sollicitudin, arcu non ornare placerat, metus quam varius lacus, nec venenatis odio leo a orci. Curabitur a elit in nisl ultricies dictum vel quis ipsum. Nunc varius velit sit amet velit volutpat, ac eleifend lacus malesuada. Nulla.",
        category: {
            name: "clothes",
            type: "shorts"
        }
    },
    {
        name: "Remera skater",
        price: 1700,
        imgUrl: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/049/128/products/venom-black-frente1-e233cbf7efcd2b036716059068343244-640-0.jpg",
        inventory: 3,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacinia lorem. Nullam sollicitudin, arcu non ornare placerat, metus quam varius lacus, nec venenatis odio leo a orci. Curabitur a elit in nisl ultricies dictum vel quis ipsum. Nunc varius velit sit amet velit volutpat, ac eleifend lacus malesuada. Nulla.",
        category: {
            name: "clothes",
            type: "remera"
        }
    },
    {
        name: "Buzo skater",
        price: 4300,
        imgUrl: "https://www.consortium.co.uk/media/catalog/product/cache/1/image/040ec09b1e35df139433887a97daa66f/p/o/polar-skate-co-square-logo-knit-sweater-green-cat.jpg",
        inventory: 7,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacinia lorem. Nullam sollicitudin, arcu non ornare placerat, metus quam varius lacus, nec venenatis odio leo a orci. Curabitur a elit in nisl ultricies dictum vel quis ipsum. Nunc varius velit sit amet velit volutpat, ac eleifend lacus malesuada. Nulla.",
        category: {
            name: "clothes",
            type: "buzo"
        }
    },
    {
        name: "Skate excentrico",
        price: 7000,
        imgUrl: "https://rlv.zcache.es/monopatin_de_acrilico_del_arte-r74b99d74c11849fc87ea239c7369e566_xw0k0_8byvr_307.jpg",
        inventory: 7,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacinia lorem. Nullam sollicitudin, arcu non ornare placerat, metus quam varius lacus, nec venenatis odio leo a orci. Curabitur a elit in nisl ultricies dictum vel quis ipsum. Nunc varius velit sit amet velit volutpat, ac eleifend lacus malesuada. Nulla.",
        category: {
            name: "skates",
            type: "tabla"
        }
    },
    {
        name: "Longboard piolasa",
        price: 19000,
        imgUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/988/937/products/img_43911-67162b2619b3fbd01216276707547981-1024-1024.jpg",
        inventory: 2,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacinia lorem. Nullam sollicitudin, arcu non ornare placerat, metus quam varius lacus, nec venenatis odio leo a orci. Curabitur a elit in nisl ultricies dictum vel quis ipsum. Nunc varius velit sit amet velit volutpat, ac eleifend lacus malesuada. Nulla.",
        category: {
            name: "longboards",
            type: "tabla"
        }
    },
    {
        name: "Longboard playero",
        price: 23000,
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/41I9R28w8ZL._SX500_SY500_CR,0,0,500,500_.jpg",
        inventory: 9,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacinia lorem. Nullam sollicitudin, arcu non ornare placerat, metus quam varius lacus, nec venenatis odio leo a orci. Curabitur a elit in nisl ultricies dictum vel quis ipsum. Nunc varius velit sit amet velit volutpat, ac eleifend lacus malesuada. Nulla.",
        category: {
            name: "longboards",
            type: "tabla"
        }
    },
    {
        name: "Tabla azul",
        price: 16000,
        imgUrl: "https://www.nativeskatestore.co.uk/images/baker-skateboards-figgy-brand-name-black-blue-b2-squared-skateboard-deck-8-125-p46462-115482_image.jpg",
        inventory: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacinia lorem. Nullam sollicitudin, arcu non ornare placerat, metus quam varius lacus, nec venenatis odio leo a orci. Curabitur a elit in nisl ultricies dictum vel quis ipsum. Nunc varius velit sit amet velit volutpat, ac eleifend lacus malesuada. Nulla.",
        category: {
            name: "skates",
            type: "tabla"
        }
    }
]

data.forEach(async product => {
    var nuevoProducto = new Product(product)
    await nuevoProducto.save()
    console.log(nuevoProducto)
})

//  users.forEach(async usuario => {
//      var nuevoUsuario = new User(usuario)
//      await nuevoUsuario.save()
//      const creado = await User.findOne({ email: usuario.email })
//      await creado.switchAdmin
//  })