
var express=require("express")
var app=express();

app.get("/",(req,res)=>{
    res.set("content-type","text/html")
    res.send("<h1 style='color:red'>Welcome Home</h1>")
})

app.get("/about",(req,res)=>{
    res.set("content-type","text/plain")
    res.send("<h2>Welcome about us</h2>")
})

app.listen(3001,()=>{
    console.log("server running")
})