// <!-- create one html file  which contains two number type input . then one dropdown list which conatin option like 
// addition,substraction,multiplication and division.The input field must cont val gre than zero else it will give 
// mess enter valid number. now also user must sele form from the dropdown else give a mess you have not selected 
// any form, mess will disp on -calcy page.if formula is selected and numbers are entered then respective calculatio 
// will be perform on -calcy page . use post method. -->



var express=require("express")
var bodyParser=require("body-parser")
var app=express()
var staticPath=__dirname
app.use(express.static(staticPath,{index:"t5.html"}))
app.use(bodyParser.urlencoded({extended:false}))

app.post("/calcy",(req,res)=>{
    res.set("content-type","text/html")
    var n1=parseInt(req.body.n1)
    var n2=parseInt(req.body.n2)
    if((n1>0)&&(n2>0)) {
        if(req.body.formula=="add") {
            a=n1+n2
            res.write("<h1 style='color:red'>Add is : " +a+"</h1>")
        }
        else if(req.body.formula=="sub"){
            a=n1-n2
            res.write("<h1>Sub is: "+a+"</h1>")
        }
        else if(req.body.formula=="mul"){
            a=n1*n2
            res.write("<h1>Mul is: "+a+"</h1>")
        }
        else if(req.body.formula=="div"){
            a=n1/n2
            res.write("<h1>Div is: "+a+"</h1>")
        }
    }
})
app.listen(7003) 