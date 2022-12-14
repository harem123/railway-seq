
const express = require("express");
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000
app.get('/', async (req, res) => {
    
    res.json("we are online")
  })


app.listen(PORT, () => {
  console.log(`Running at localhost:${PORT}`);
});
