const express=require("express")
const app=express()

app.get("/",(req,res,next)=>{
    res.write("Requests received")
    next();
})

app.get("/",(req,res,next)=>{
    res.write(" Hello")
    next();
})

app.get("/",(req,res)=>{
    res.send()
})

app.listen(8009)



