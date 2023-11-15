const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { usuario } = require('../models');
const config = require('../config/config')[process.env.NODE_ENV || 'production'];

const hashedPassword  = async (password) => bcrypt.hash(password, 10)
const isValidPassword = async (password, user) => bcrypt.compare(password, user.password)

exports.signUp = async (req, res) => {
  try{
    console.log(req.body)
    const { dni, nombre, email, picture, password } = req.body
    
    const usuarioCreado = await usuario.create({
      dni,
      nombre,
      email,
      picture,
      password, //hashedPassword(password),
      role: 'estudiante'
    })

    const payload = {
      ...usuarioCreado.dataValues
    }

    const token = jwt.sign(payload, config.secret, { expiresIn: '10m' })

    res.status(201).json({ auth: true, token }); 
  }
  catch(error) { res.status(500).send(error); console.log(error) }
};

exports.signIn = (req, res) => {
  if (!req.body.dni || !req.body.password) return res.status(404).send('Credenciales no proporcionadas')
  
  const { dni, password } = req.body
  usuario.findOne({ where: { dni } })
    .then(user => {
      if (!isValidPassword(password, user)) return res.status(401).send({ auth: false, token: null })
      
      const payload = {
        dni: user.dni,
        nombre: user.nombre,
        role: user.role
      }

      const token = jwt.sign(payload, config.secret, { expiresIn: '1w' })

      res.status(200).json({ auth: true, token })
    })
    .catch((error) => res.status(500).send(error))
};

exports.signOut = (_, res) => {
  res.status(200).send({ auth: false, token: null })
};
