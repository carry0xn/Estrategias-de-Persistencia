const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { usuario, estudiante} = require('../models');
const config = require('../config/config')[process.env.NODE_ENV || 'production'];

const hashedPassword  = async (password) => bcrypt.hash(password, 10)
const isValidPassword = async (password, user) => bcrypt.compare(password, user.password)

exports.signUp = (req, res) => {
  const { dni, nombre, email, picture, password } = req.body
  console.log(req.body)
  usuario.create({
    dni,
    nombre,
    email,
    picture,
    password,//: hashedPassword(password)
    estudiante: {

    }
  }, {include: [estudiante]})
  .then((estudianteCreado) => {
    const payload = {
      role: 'admin',
      dni: estudianteCreado.usuario.dni,
      nombre: estudianteCreado.usuario.nombre,
    }

    const token = jwt.sign(payload, config.secret, { expiresIn: '3s' })

    res.json({ auth: true, token }); 
  }).catch(error => { res.status(500).send(error) })
};

exports.signIn = (req, res) => {
  if (!req.body.nombre || !req.body.password) return res.status(404).send('Credenciales no proporcionadas')
  
  const { dni, password } = req.body
  usuario.findOne({ where: { dni } })
    .then(user => {
      if (!isValidPassword(password, user)) return res.status(401).send({ auth: false, token: null })
      
      const payload = {
        userType: 'admin',
        dni: user.dni,
        nombre: user.nombre
      }

      const token = jwt.sign(payload, config.secret, { expiresIn: '3s' })

      res.status(200).json({ auth: true, token })
    })
    .catch((error) => res.status(404).send(error))
};

exports.signOut = (_, res) => {
  res.status(200).send({ auth: false, token: null })
};
