
const express = require("express");
const app = express();

const v1Router = require('./src/routes/routerIndex.js')

app.use("/", v1Router)

require('dotenv').config();
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Running at port:${PORT}`);
});
