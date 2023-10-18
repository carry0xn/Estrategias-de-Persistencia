const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const { swaggerUI, swaggerSpec } = require('./swagger');
const carrerasRoutes = require('./routes/Carreras');
const materiasRoutes = require('./routes/Materias');
const usuariosRoutes = require('./routes/Usuarios');

const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));

// Pug
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');
// Vue
// app.use(express.static(path.join(__dirname, 'public')));

// Swagger
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

// Routes
app.use('/api/carreras', carrerasRoutes);
app.use('/api/materias', materiasRoutes);
app.use('/api/usuarios', usuariosRoutes);

// Handle Error
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = err;

  // render the error page
  //res.render('error');
  console.log('Something went wrong:', err.stack)
  res.status(err.status || 500);
  next(err)
});

app.listen(PORT, () => {
  console.log('Server listening on port:', PORT)
});

module.exports = app;
