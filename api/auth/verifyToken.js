const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = function verifyToken(req, res, next) {
  // Verificar si nos encontramos en un entorno de prueba
  const isTesting = config.testEnv === 'true';
  if (isTesting) {
    // En caso de estar en un entorno de prueba, continuar sin verificar el token
    next();
  } else {
    // Obtener el token desde los encabezados de la solicitud
    const token = req.headers['x-access-token'];

    // Si no existe el token
    if (!token) {
      return res
        .status(401)
        .json({ auth: false, message: 'Token no proporcionado' });
    }
    // Verificar y decodificar el token
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ auth: false, message: 'Token inválido' });
      }

      // Almacenar el ID del usuario decodificado en req.userId
      req.userId = decoded.id;

      // Continuar con la siguiente función
      next();
    });
  }
};


