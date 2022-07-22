const express = require("express") 
const router = express.Router()

router.get("/list",(req, res)=>{
    res.send("User list")
})

router.get("/add",(req, res)=>{
    res.render("register",{"text":"I love it"})
})

module.exports = router