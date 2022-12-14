
const express = require("express");
const app = express();

const db = require("./models/index.js");
const userModel = db.user;

require('dotenv').config();
const PORT = process.env.PORT || 3000

app.get('/', async (req, res) => {
    
    res.json(`Running at port:${PORT}`)
  })

  app.get('/data', async (req, res) => {
    const data = await userModel.findAll()
    console.log(data)
    res.json(data)
    
  })
  

app.listen(PORT, () => {
  console.log(`Running at localhost:${PORT}`);
});
