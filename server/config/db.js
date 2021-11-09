const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/sk8', { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = mongoose

/*
const main = async () => {
    // Conecta la base de datos
    await mongoose.connect('mongodb://localhost:27017/sk8', { useNewUrlParser: true, useUnifiedTopology: true })

    // Definir schema
    const userSchema = new mongoose.Schema({
        name: String,
        age: Number
    })

    // Añadir metodos al schema
    userSchema.methods.greeting = function (data = "anonimo") {
        console.log(`Hola ${data} me llamo ${this.name} y tengo ${this.age} años!`)
    }


    // Compilar schema a un modelo
    const User = mongoose.model('User', userSchema)

    // Crear un user
    const pato = new User({
        name: "pato",
        age: 19
    })
    const otro = new User({
        name: "otro",
        age: 999
    })

    // Invocar metodos
    pato.greeting("persona")

    // Save a la db
    await pato.save()
    await otro.save()

    // Find
    const users = await User.find()
    console.log(users, "ea")
}

main()
*/