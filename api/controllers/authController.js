const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { usuario } = require('../models');
const config = require('../config');

exports.signUp = async (req, res) => {
  try {
    const { dni, nombre, email, picture, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    await usuario.create({
      dni,
      nombre,
      email,
      picture,
      password: hashedPassword,
    })

    const token = jwt.sign({ nombre }, config.secret, {
      expiresIn: '5s'
    })

    res.json({ auth: true, token }); 
  }
  catch (error){ res.status(500).send('Hubo un problema al registrar su usuario:', error); }
};

exports.signIn = async (req, res) => {
  const { nombre, password } = req.body
  const user = await usuario.findOne({ where: { nombre } }) 
  
  if (!user) return res.status(404).send('El usuario no existe')

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) return res.status(401).send({ auth: false, token: null })

  const token = jwt.sign({ nombre }, config.secret, {
    expiresIn: '2d'
  })

  res.status(200).json({ auth: true, token })
};

exports.singOut = async (req, res) => {
  res.status(200).send({ auth: false, token: null })
};
