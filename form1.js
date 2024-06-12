
const express=require("express")
const path=require("path")
const app = express()

const staticPath=path.join(__dirname,"../frontend")

app.use(express.static(staticPath,{index:"form1.html"}))

app.get("/login",(req,res)=>{
    const response={e:req.query.email,p:req.query.password,s:req.query.formula}
    console.log(response)
    res.send(response)

    //  res.send(`<h1> e:${req.query.email} </h1> <h2>p:${req.query.password}</h2>`)

})

app.listen(3010)
