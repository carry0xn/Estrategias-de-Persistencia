const jwt = require('jsonwebtoken');
const config = require('../config/config')[process.env.NODE_ENV || 'production'];

module.exports = function verifyToken(roles=[]) {
  return function(req, res, next){
    const token = req.headers['x-access-token'];

    if (!token) return res.status(401).json({ auth: false, message: 'Token no proporcionado' });

    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) return res.status(401).json({ auth: false, message: 'Token inválido' });

      if(roles.length !== 0 && !roles.includes(decoded.role)) return res.status(401).json({ auth: false, message: 'No autorizado :(' });
      
      req.user = decoded;
      
      next();
    });
  }
};


