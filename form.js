
const express=require("express")
const path=require("path")
const app = express()

const staticPath=path.join(__dirname,"../frontend")

app.use(express.static(staticPath,{index:"form.html"}))

app.get("/process",(req,res)=>{
    const response={u:req.query.username,p:req.query.password}
    console.log(response)
    res.send(response)
})

app.listen(4001)
