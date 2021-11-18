const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    price: { 
        type: Number,
        required: true
    },
    description: { type: String },
    imgUrl: { type: String },
    inventory: { type: Number, default: 1 },
    category: {
        name: { type: String },
        type: { type: String }
    },
    reviews: [
        {
            valoration: { type: Number },
            message: { type: String },
            authorName: { type: String },
            authorId: { type: String },
            orderId: { type: String }
        }
    ]
}, { 
    versionKey: false,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
})

// Devuelve el promedio de las valoraciones de un producto
productSchema.virtual('valoration').get(function () {
    var valoration = this.reviews.reduce((previo, current) => {
        return previo ? current.valoration + previo : current.valoration
      }, 0)
    return valoration / this.reviews.length
})

// Añade review individual al producto
productSchema.methods.addReview = async function ({ valoration, message = "", authorId }) {
    try {
        const review = { valoration, message, authorId }
        const product = await Product.updateOne({ _id: this._id }, { $push: { reviews: review }})    
    } catch (err) {
        return err
    }
}

const Product = mongoose.model('Product', productSchema)

module.exports = Product