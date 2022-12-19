const express = require("express")
const router =  express.Router()

const db = require("./models/index.js");
const userModel = db.user;

app.get('/', async (req, res) => {
    res.json(`Running at port:${PORT}`)
  })

  app.get('/data', async (req, res) => {
    const data = await userModel.findAll()
    console.log(data)
    res.json(data)
    
  })

// exporting modules
module.exports = router
