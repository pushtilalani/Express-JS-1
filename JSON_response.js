
// Method-1

var express=require("express")
var app=express();

app.get("/",(req,res)=>{
   const users=[{id:1,name:"Ram"},{id:2,name:"Ram"}]
   res.set("content-type","application/json")
   res.send(users)         
})

app.listen(2000)



// Method-2

var express=require("express")
var app=express();

app.get("/",(req,res)=>{
   const users=[{id:1,name:"Ram"},{id:2,name:"Ram"}]
   res.set("content-type","application/json")      
   res.write(JSON.stringify(users))
   res.end()
})

app.listen(2001)




// Method-3

var express=require("express")
var app=express();

app.get("/",(req,res)=>{
   const users=[{id:1,name:"Ram"},{id:2,name:"Ram"}]
   res.set("content-type","application/json")
   res.json(users)
})

app.listen(2002)







