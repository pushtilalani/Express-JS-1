

// app.use(session(resave : false,   // do not save session if not modify.
//     saveUninitialized : false,    // do not create session if something is not store.
//      secret:"hello"               // secret key-> unique in form of string.
// ))


const express=require("express")
const app=express()
const session = require("express-session");
app.use(session({resave : true,
    saveUninitialized:true,
    secret:"hello"}))

app.get("/",(req,res)=>{
    if(!req.session.fname){
        req.session.fname ="xyz"
        res.redirect("/fetchsession")
    }
    else{
        console.log("session already created")
    }
})

app.get("/fetchsession",(req,res)=>{
    res.write(`<h1>Welcome${req.session.fname}</h1>`)
    res.write(`<button><a href='/delete'>Delete Session</a></button>`)
    res.send()
})

app.get("/delete",(req,res)=>{
    req.session.destroy()
    res.send("Session destroyed")
})

app.listen(202)