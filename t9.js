// write a script to create index.html page and open it on local host which contains uname,pname and submit button 
// after clicking but it should jump to /save session page. store uname in session after saving the session it should jump to save 
// session name after saving ses redirect to /ses page and read se value . logout buton desry ses page and redirect to index.html



const express=require("express")
const app=express()
const session = require("express-session")
app.use(session({resave : true,
    saveUninitialized:true,
    secret:"hello"}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/t9.html")
})    

app.get("/savesession",(req,res)=>{
    if(!req.session.x){
        req.session.x =req.query.uname
        res.redirect("/fetchsession")
    }
    else{
        console.log("session created")
    }
})

app.get("/fetchsession",(req,res)=>{
    res.write(`<h1>Welcome${req.session.x}</h1>`)
    res.write(`<button><a href='/delete'>Delete Session</a></button>`)
    res.send()
})

app.get("/delete",(req,res)=>{
    req.session.destroy()
    res.send("Session destroyed")
})

app.listen(200) 