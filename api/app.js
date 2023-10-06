const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const jwt = require('jsonwebtoken')
const swaggerUI = require('swagger-ui-express')
const carrerasRouter = require('./routes/carreras');
const { swaggerSpec } = require('./swagger');
const swaggerJSDoc = require('swagger-jsdoc');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/car', carrerasRouter);

app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/*
const payload = {
  userType: 'admin',
  name: 'Caro'
}

const token = jwt.sign(payload, 'secretoSuperSecreto', { expiresIn: '3s' })

tokenClient = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVHlwZSI6ImFkbWluIiwibmFtZSI6IkNhcm8iLCJpYXQiOjE2OTYzODkyMTB9.RR54cjdN0qTY_dIlBVtjLicobbx_jC5UKPepqef55NY0'

jwt.verify(token, 'secretoSuperSecreto', (err, decoded) => {
  console.log('VALIDO', err)
})

setTimeout(() => {
jwt.verify(token, 'secretoSuperSecreto', (err, decoded) => {
  console.log('4 segundos', err)
})
}, 4000);*/


app.listen(3000, (req, res) => {
  console.log('Server on port 3000!')
})

module.exports = app;
