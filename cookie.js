
var express=require("express")
var app=express()
var cp=require("cookie-parser")
app.use(cp())


app.get("/",(req,res)=>{
    res.cookie("ABC","express",{expires:new Date(Date.now()+3000)})
    // res.cookie("ABC",'express',{maxAge:3000})
    res.send("cookie set")
})

app.listen(6002)
