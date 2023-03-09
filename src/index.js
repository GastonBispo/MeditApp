const express = require('express');
const morgan = require('morgan');
const path = require('path');

//CORS
const cors = require('cors');



const { mongoose } = require('./database');

const app = express();

//settings
app.set('port', process.env.PORT || 4000);

//middleweres
app.use(morgan('dev'));
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/', require('./routes/server.routes'));
// app.use('/api/users'), require('./routes/user.routes') ;
app.use(cors());


//static files
app.use(express.static(path.join(__dirname, 'public')));

//empezando el server

app.listen(app.get('port') , () => {
    console.log(`Server on port ${app.get('port')}`);
});