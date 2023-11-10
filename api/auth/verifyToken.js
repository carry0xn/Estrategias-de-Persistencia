const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = function verifyToken(req, res, next) {
  const token = req.headers['x-access-token'];

  if (!token) return res.status(401).json({ auth: false, message: 'Token no proporcionado' });

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) return res.status(401).json({ auth: false, message: 'Token inválido' });

    // Almacenar el ID del usuario decodificado en req.userId
    req.userId = decoded.id;

    next();
  });
};


