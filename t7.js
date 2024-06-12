// to create two cookies fname and lname . print on console then after delete one cookie and finally print the message one 
// cookie is deleted.

var express=require("express")
var app=express()
var cp=require("cookie-parser")
app.use(cp())


app.get("/",(req,res,next)=>{
    res.cookie("fname","abc")
    res.cookie("lname","qrs")
    next()
})

app.get("/",(req,res,next)=>{
    console.log(req.cookies)
    next() 
})

app.get("/",(req,res)=>{
    res.clearCookie("fname")
    res.send("cookie deleted")
})

app.listen(6004) 