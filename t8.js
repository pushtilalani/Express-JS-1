// write a script to create login form on index.html file after clicking submit button it should jump to /next page and value 
// of uname should be shown inside cookie . perform task using get method observe and check inside browser that the cookie
// is store perfectly or not .


var express=require("express")
var app=express()
var cp=require("cookie-parser")
app.use(cp())

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/t8.html")
})

app.get("/next",(req,res,next)=>{
    const response={u:req.query.uname, p:req.query.psw}
     res.cookie("username",response.u)     
     next()          
})

app.get("/next",(req,res)=> {
    console.log(req.cookies)
    res.send("cookie send")
})

app.listen(6005)