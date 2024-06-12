const express = require("express")

const app=express()
const staticPath=__dirname

app.use(express.static(staticPath,{index:"ipe.html"}))

app.get("/login",(req,res,next)=>{
    res.set("content-type","text/html")
    res.write("<h1>"+req.query.e+"</h1>")
    res.write("<h1 style='color:red'>Welcome LJU </h1>")
    next()
})

app.get("/login",(req,res,next)=>{
    if(req.query.check=="on") {
        res.write("<h3>Thank you for Subscription</h3><a href='/'>logout</a>")
    }
    else{
        res.write("<h3>You can subscribe to daily update</h3><a href='/sub'>subcribe</a>") 
        next() 
    }
})

app.get("/sub",(req,res)=>{
    res.set("content-type","text/html")
    res.write("<h3>Thank you for Subscription</h3><a href='/'>logout</a>")
    res.send()
})

app.listen(8006) 