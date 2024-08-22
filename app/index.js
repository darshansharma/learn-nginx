const express = require("express");
const app = express()
const appid = process.env.APPID;

app.get("/", (req,res) => 
res.send(`AppId: ${appid} It's working, testing loadbalancing using nginx`));
app.get("/admin", (req,res) => 
res.send(`appid: ${appid} ADMIN page: very few people should see this`));
app.listen(9000, console.log("app is running at port 9000"));