const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UsersModel = require('./models/Users')


const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/Users");

app.post("/isaies",(req, res) => {
    const {EmailId,Password} =req.body;
    UsersModel.findOne({EmailId:EmailId})
    .then(User => {
        if(User) {
            if(User.Password === Password){
                res.json("Success")
            }else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})

app.post('/Register',(req,res) =>{
    UsersModel.create(req.body)
    .then(Users => res.json(Users))
    .catch(err => res.json(err))

})

app.listen(2001, () => {
    console.log("server is running")
})