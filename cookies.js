
var express=require("express")
var app=express()
var cp=require("cookie-parser")
app.use(cp())

app.get("/",(req,res)=>{
    res.cookie("mycookie","xyz")
    console.log(req.cookies)
    res.send("cookie set")
})


app.listen(6001)
