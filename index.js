const express = require('express');
const app = express();
require ('dotenv').config();
require('./models/db');
const TaskRouter = require('./routes/TaskRouter')
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use('/tasks', TaskRouter);

app.listen(PORT, ()=>{
    console.log(`server is running on port = ${PORT}`);
})

app.get('/', (req,res)=>{
    res.send("helelo from the server")
})
