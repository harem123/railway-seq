const express = require("express")
const router =  express.Router()

const v1UserController = require('../controllers/userController.js')

require('dotenv').config();
const PORT = process.env.PORT || 3000

const db = require("./models/index.js");
const userModel = db.user;

router.get('/', async (req, res) => {
    res.json(`Running at port:${PORT}`)
  })
router.get("/user", v1UserController.listUsers);
 

// exporting modules
module.exports = router
