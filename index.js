const express = require('express');
const app = express();
require ('dotenv').config();
require('./models/db');
const PORT = process.env.PORT || 8080;


app.listen(PORT, ()=>{
    console.log(`server is running on port = ${PORT}`);
})

app.get('/', (req,res)=>{
    res.send("helelo from the server")
})
