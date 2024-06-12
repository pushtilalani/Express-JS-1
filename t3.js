// write express js script to print a message in next line and use the get method to submit the data .html file 
// contain a form of text area for the message and submit button .


const express=require("express")
const path=require("path")
const app = express()

const staticPath=path.join(__dirname,"../frontend")

app.use(express.static(staticPath,{index:"t3.html"}))

app.get("/data",(req,res)=>{
    res.set("content-type","text/html")
    const response=(req.query.textarea).split(".")
    for(var i in response){
        res.write(response[i]+"</br>")
     
    }
    res.end()
})

app.listen(3019)
