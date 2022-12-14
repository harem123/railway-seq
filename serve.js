
const express = require("express");
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000
app.get('/', async (req, res) => {
    
    res.json(`Running at port:${PORT}`)
  })


app.listen(PORT, () => {
  console.log(`Running at localhost:${PORT}`);
});
