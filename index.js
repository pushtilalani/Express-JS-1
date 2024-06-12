const express = require("express")

const app=express()

const bp=require("body-parser")

const url=bp.urlencoded({extended:false})

const staticPath = __dirname

app.use(express.static(staticPath))

app.post("/check",url,(req,res,next)=>{
    if(req.body.username=="admin"){
        next()
    }
    else{
        res.send("<h1 style='color:red'>Wrong Username</h1>")
    }
})

app.post("/check",(req,res)=>{
    res.write("<h1>Welcome admin</h1>")
    res.send()
})

app.listen(8008)