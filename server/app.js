
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 3001;


require('dotenv').config()
require('./DB/conn');

const app = express();
app.use(cors({ origin:true, credentials:true }));
app.use(express.json());

// console.log(process.env.DATABASE);

app.get('/',(req,res) => {
    res.send(`Hello world from home`);
});

app.listen(port || process.env.port, ()=> {
    console.log(`server is running on port no ${port}`);   
})
