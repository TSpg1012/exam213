const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const router = require("./router/router")

require("dotenv").config()
require("./config/db")

const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
app.use("/", router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})