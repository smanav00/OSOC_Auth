const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const md5 = require("md5")

// node config
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myAuthData",
{useNewUrlParser:true,
useUnifiedTopology: true
},(err) => { if(err){console.log(err)}else{console.log("DB Connected")}
})
console.log(mongoose.connection.readyState)

// creating user schema

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

// creating model
const User = new mongoose.model("User", userSchema)

// Creating Routes

app.get("/", (req, res)=>{
    res.send("My API")
})

app.post("/login", (req, res)=>{
    const {email, password} = req.body
    const pass = md5(password)
    User.findOne({ email, pass}, (err, user)=>{
        if(user){
            if(pass === user.password){
                res.send({message: "Login Successful", user: user})
            } else {
                res.send({message: "Invalid Password"})
            }
        } else {
            res.send({message:"You're not registered, Please register yourself!"})
        }
    })

})

app.post("/register", (req, res)=>{
    const {name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({ message: "This email is already registered!"})
        } else {
            const user = new User({
                name,
                email,
                password:md5(req.body.password)
            })
            user.save( err => {
                if(err){
                    res.send(err)
                } else {
                    // console.log("in save")
                    res.send({ message: "Successfully Registered, Please login now."})
                }
            })
        }
    })
   
})

app.listen(5000, ()=>{
    console.log("Backend server running at 5000")
})