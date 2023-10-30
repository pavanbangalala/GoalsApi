const mongoose = require('mongoose')


const goalSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add text value']
    }
},{timestamps:true})

module.exports = mongoose.model('Goals',goalSchema)