const { User } = require("../models/User")
const { confirmCodeEmail } = require("../utils/emailService")

const userController = {
    auth: (req, resp) => {
        const randomCode = Math.floor(Math.random() * 100000)
        User.findOne({ email: req.body.email })
            .then(data => {
                if (data) {
                    data.code = randomCode
                    data.save()
                    confirmCodeEmail(req.body.email, randomCode)
                    resp.send("Login Success!")
                }
                else {
                    confirmCodeEmail(req.body.email, randomCode)
                    const newUser = new User({
                        email: req.body.email,
                        code: randomCode
                    })
                    newUser.save()
                    resp.send("Register Success!")
                }
            })
    },
    confirmCode: (req, resp) => {
        User.findOne({email:req.body.email})
        .then(data=>{
            
        })
    }
}

module.exports = { userController }