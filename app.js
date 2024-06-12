const express=require("express")
const path=require("path")
const app=express()

const staticPath=path.join(__dirname,"../frontend")

app.use(express.static(staticPath,{index:"other.html"}))

app.listen(5002,()=>{
    console.log("server running")
})