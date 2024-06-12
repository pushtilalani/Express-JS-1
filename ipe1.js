
var express=require("express")
var app=express()
var cp=require("cookie-parser")
app.use(cp())

app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/ipe1.html')
})

app.get("/fb",(req,res)=>{
    const {name,email,message,rating}=req.query
    const feedback={name,email,message,rating}
    res.cookie("feedback",feedback,{maxAge:10000})
    res.send("Thank you for feedback<br><a href='/feed-details'>show feedback</a>")
})

app.get("/feed-details",(req,res)=>{
    const feedback=req.cookies.feedback
    if(feedback){
        res.send(`<h1>Feedback Details</h1>
            <p><h2>Name:${feedback.name}</h2></p>
            <p><h2>Email:${feedback.email}</h2></p>
            <p><h2>Message:${feedback.message}</h2></p>
            <p><h2>Rating:${feedback.rating}</h2></p>
            <a href="/">logout</a>`)
    }
    else{
        res.send("no-feedback")
    }
})

app.listen(2001) 