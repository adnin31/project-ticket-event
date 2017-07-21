const express = require ('express');
const app = express ();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session')

app.set('view engine', 'ejs');
var path_name = path.join(__dirname, 'public');
var express_static = express.static(path_name);
app.use(express_static);

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(session({
  secret: 'hacktiv',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}))

const index = require ('./routers/index');
const buy = require('./routers/buy')
const register= require('./routers/register')
const music= require('./routers/music')
const sport= require('./routers/sport')
const seminar = require('./routers/seminar')
const promotor = require ('./routers/promotor')
const user = require('./routers/user')

app.use('/', index);
app.use('/register',register)
app.use('/music',music)
app.use('/sport',sport)
app.use('/seminar',seminar)
app.use('/promotor',promotor)
app.use((req,res,next) =>{
  if(req.session.user){
    next()
  }else {
    res.send('Anda Harus login')
  }
})
app.use('/buy',buy);

app.use('/user',user)


app.listen(process.env.PORT || 3001);
