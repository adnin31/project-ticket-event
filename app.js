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
const buyer = require ('./routers/buyer')

app.use('/', index);
app.use('/buyer',buyer)




app.listen(process.env.PORT || 3000);
