const { default: mongoose } = require("mongoose")
const env = require("dotenv").config()

const db = {
    connect: async () => {
        try {
            await mongoose.connect(process.env.connection)
        } catch (error) {
            console.log("Connection error", error);
        }
    }
}

module.exports = { db }