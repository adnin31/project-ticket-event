const express = require ('express');
const app = express ();
const path = require('path');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
var path_name = path.join(__dirname, 'public');
var express_static = express.static(path_name);
app.use(express_static);

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());


const index = require ('./routers/index');
const buy = require('./routers/buy')
const register= require('./routers/register')
const music= require('./routers/music')
const sport= require('./routers/sport')
const seminar = require('./routers/seminar')

app.use('/', index);
app.use('/buy',buy);
app.use('/register',register)
app.use('/music',music)
app.use('/sport',sport)
app.use('/seminar',seminar)





app.listen(process.env.PORT || 3000);
