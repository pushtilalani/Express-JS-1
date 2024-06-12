
// <!-- Write Express JS Script to perform following task:- create one html file which contain first name,last name,
// mobile number and gender(male,female) for sender take radio and submit button. html and js file should be in 
// same folder. -->


var express=require("express")
var bodyParser=require("body-parser")
var app=express()
var staticPath=__dirname

app.use(bodyParser.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.sendFile(staticPath+"/t4.html")
})

app.post("/post",(req,res)=>{
    res.send(req.body)
})

app.listen(7002)
