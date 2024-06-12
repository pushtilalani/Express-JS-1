// write express JS script to perform following task :-
// 1. create html file ljform.html which contain uname ,pass ,submit button . data should be submitted by  
// sub meth is of black color with white text on the home page on home form sho be dis . while sub the form on
//  the next page /login if the username is a admin then it will displ wel admin with green color else displ
//   please dis admin with red col. 


var express=require("express")
var bodyParser=require("body-parser")
var app=express()
var staticPath=__dirname

app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(staticPath,{index:"/ljform.html"}))

app.post("/login",(req,res)=>{
    if(req.body.uname=="admin"){
        res.write("<h1 style='color:green'>Welcome admin</h1>")
    }
    else{
        res.write("<h1 style='color:red'>Please login with admin</h1>")
    }
})

app.listen(7001)

