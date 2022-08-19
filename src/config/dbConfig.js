const mongoose = require('mongoose')

const dbConfig= 'mongodb+srv://root:admin@cluster0.ticsq.mongodb.net/mydb?retryWrites=true&w=majority'

const connection = mongoose.connect(dbConfig, {useNewUrlParser:true, useUnifiedTopology:true})


module.exports = connection