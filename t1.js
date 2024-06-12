// create a web page using express json which the home page display welcome home in big blue Font. student 
// page show welcome student and about page show about welcome about in blue render resp and routine .



var express=require("express")
var app=express();

app.get("/",(req,res)=>{
    res.set("content-type","text/html")
    res.send("<h1 style='color:blue'>Welcome Home</h1>")
})

app.get("/about",(req,res)=>{
    res.send("<h2>Welcome about</h2>")
})

app.listen(3022,()=>{
    console.log("server running")
})