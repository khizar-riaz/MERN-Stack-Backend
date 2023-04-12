const express = require("express");
require("./db/config");
const User = require("./db/User");
const app = express();

app.use(express.json()); //sending json data in body


app.post("/register", (req, resp) => {
  resp.send(req.body);   //request json data in the http post method body
});
app.listen(5000);
