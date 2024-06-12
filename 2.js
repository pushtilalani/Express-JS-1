
const express=require("express")

const path=require("path")

const app=express();

const staticPath=path.join(__dirname,"../frontend")

app.use(express.static(staticPath))

app.listen(5004,()=>{
    console.log("server running")
})