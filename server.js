const express = require("express");
const app = express(); 
const path = require("path");
app.get("/intro",(req,res)=>{
    res.sendFile(path.join(__dirname,"intro.html"));
})
app.get("/web3",(req,res)=>{
    res.sendFile(path.join(__dirname,"web3.html"));
})
app.get("/hobby",(req,res)=>{
    res.sendFile(path.join(__dirname,"HOBBY.html"));
})
app.listen(3973  ,  ()=>{
    console.log("server running");
})

app.get("/",(req,res)=>{
    res.send("Hello")
})