const express=require("express")
const path=require("path")
const app=express()

const bodyParser=require("body-parser")

app.use(bodyParser.urlencoded({extended:false}))

const staticPath=path.join(__dirname,"../frontend")

app.use(express.static(staticPath,{index:"post.html"}))

app.post("/process",(req,res)=>{
    const response={u:req.body.username,p:req.body.password}
    res.send(response)
})

app.listen(5080,()=>{
    console.log("server running")
})