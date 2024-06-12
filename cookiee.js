
var express=require("express")
var app=express()
var cp=require("cookie-parser")
app.use(cp())


app.get("/",(req,res)=>{
    res.cookie("ABC","express",{expires:new Date(Date.now()+15000)})
    res.cookie("xyz","pqr")
    res.clearCookie("xyz")
    res.send("cookie set")
})

app.listen(6003)
