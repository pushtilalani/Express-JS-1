const express=require("express")
const path=require("path")
const app=express()

const bodyParser=require("body-parser")

app.use(bodyParser.urlencoded({extended:false}))

const staticPath=path.join(__dirname,"../frontend")

app.get("/",(req,res)=>{
    res.sendFile(staticPath + "/p.html")
})

app.post("/process",(req,res)=>{
    res.send(req.body)
})

app.listen(5089,()=>{
    console.log("server running")
})