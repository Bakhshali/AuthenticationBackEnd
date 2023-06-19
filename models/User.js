const { default: mongoose } = require("mongoose")

const userScheme = new mongoose.Schema({
    email: String,
    code: String
})

const User = new mongoose.model("AuthUser", userScheme)

module.exports = { User }