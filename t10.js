// write express js script to print how much time user visit the page  for example if user vist 1st time then print 
// you have visited 1st time. if user visit 2nd then print you have visited 2nd time ans so on . 



const express=require("express")
const app=express()
const session = require("express-session")
app.use(session({resave : true,
    saveUninitialized:true,
    secret:"hello"}))

app.get("/",(req,res)=>{
    if(req.session.page_views){
        req.session.page_views++
        res.send(`<h1 style='color:red'>you have visited page${req.session.page_views}</h1>`)
    }
    else{
        req.session.page_views=1
        res.send(`<h1 style='color:green'>you have visited page${req.session.page_views}</h1>`)
    }
})    

app.listen(2003) 