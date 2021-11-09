const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/sk8', { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = mongoose