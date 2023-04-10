const express = require("express");

const app = express();

app.get("/",(req,resp)=>{
    resp.send("App is working justto check the working.....")
});

app.listen(5000)