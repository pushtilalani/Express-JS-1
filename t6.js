// write express js script to request server to display JSON array of objects in table form on the browser. 


var express =require("express")
const app=express()


student=[{name:"xyz",id:1},
         {name:"abc",id:2}]


app.get("/",(req,res)=> {
    res.set("content-type","text/html")
    res.write("<table align='center' text-align='center' border='2px' cellspacing='0' cellpading='0'><tr><th>Name</th><th>id</th></tr>")
    for(i of student) {
        res.write("<tr><td>"+ i.name + "</td>")
        res.write("<td>"+ JSON.stringify(i.id)+"</td></tr>")
    }
    res.write("</table>")
    res.send()
})

app.listen(8007)