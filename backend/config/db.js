const mongoose = require('mongoose')

const connectToDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo DB connected ")
    } catch (error) {
        console.log('error ',error)
        process.exit(1)
    }
}

module.exports = {connectToDB}