const express = require('express')
const app = express()
const port = 3100
const cors = require('cors')
const bodyParser = require('body-parser')
const regisRoute = require('./api/routes/regisRoute')
const checkoutRoute = require('./api/routes/checkoutRoute')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())


app.use('', regisRoute)
app.use('', checkoutRoute)
app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found`})
})

app.listen(port, () => {
  console.log(`ExceljpMail is listening at http://localhost:${port}`)
})