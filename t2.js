// write an express js script to define one json array of three object,having members name and age .sort these 
// object according  to age  and name must be sorted.if user request sorted name to url then all name should be 
// printed according to asscending order of age . 


var express=require("express")
var app=express();

app.get("/",(req,res)=>{
   const jao=[{name:"Ram",age:20},{name:"Ram",age:22},{name:"Shyam",age:24}]
   var sortedNames=jao.sort((a,b)=>a.age-b.age)    
})

app.get("/sorted-name",(req,res)=>{
    res.send(sortedNames)
})

app.listen(5031)