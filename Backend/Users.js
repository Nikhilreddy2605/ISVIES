const mongoose = require("mongoose")

const UsersSchema = new mongoose.Schema({
    EmailId: String,
    Password: String,
    ConfirmPassword: String
})

const UsersModel = mongoose.model("Users", UsersSchema)
module.exports = UsersModel