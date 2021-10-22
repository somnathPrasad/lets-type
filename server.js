const express = require("express")
const mongoose = require("mongoose")
const app = express()

const port = process.env.PORT || 3001
app.use(express.json())
app.use(express.static("client/build"))

app.listen(port, ()=> console.log("Cloud Cuisine backend started on Port "+port))
