const express = require('express')
const { engine } = require('express-handlebars')

require('./config/mongoose')

const routes = require('./routes')
const app = express()
const port = 3000

app.engine('hbs', engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(routes)

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})