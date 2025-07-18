const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    console.log(req);
    //res.send ("<h1> Hello World")
    res.json({
        name : "Parisha",
        address:"Mohali",
        isLogin:true
    })
})
app.get("/users/:id",(req,res)=>{
    console.log(req.params.id);
    let id = req.params.id;
    res.send("id")
})
app.get("/blogs",(req,res)=>{
    console.log(req.query.title);
    console.log(req.query.desc);
    res.send("got it")
})


app.listen(2222,()=>{
    console.log("server started");

})