const express = require('express')
const { engine } = require('express-handlebars')
const mongoose = require('mongoose');
const app = express()
const port = 3000
const hostname = '127.0.0.1';
const bodyParser = require('body-parser')

mongoose.connect('mongodb://127.0.0.1/nodeblog_db');


app.use(express.static('public'))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
//app.set('views', './views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const main = require('./routes/main')
const posts = require('./routes/posts')
const users = require('./routes/users')


app.use('/', main)
app.use('/posts', posts)
app.use('/users', users)



app.listen(port, hostname, () => {
  console.log(`Server Çalışıyor, http://${hostname}:${port}/`)
})


