console.log("Hi")

const express = require("express") 
const app = express();

var https = require('https')
var http = require('http')

http.createServer(app).listen(80)
https.createServer(options, app).listen(443)

app.set('view engine','ejs')

app.get("/", (req,res)=>{
    console.log("in 1st get function")
    //res.send("Hi There!")
    //res.sendStatus(200)
    //res.status(500).send("msg on browser and error code in source")
    //res.download"file path)
    //res.json({"Hello":"You"})
    res.render("index",{"text":"I love it"})
})

const userRouter = require('./routes/users')
app.use("/users", userRouter)

//const server = app.listen(3000) //, "49.36.60.89"
const server = app.listen(89, "49.36.60.89")

PORT = 3000
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})
