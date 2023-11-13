const models = require("../models");

const findUsuario = (dni, onSuccess, req, res) => {
  models.usuario
    .findOne({
      where: { dni }
    })
    .then(usuario => (usuario ? onSuccess(usuario, req, res) : res.status(404).send()))
    .catch(err => res.send(err));
};

exports.getUsuarios = (req, res) => {
  const page = req.query.page || 1;
  const pageSize = parseInt(req.query.pageSize) || 5;

  const offset = (page - 1) * pageSize;

  models.usuario
    .findAndCountAll({
      attributes: ["dni", "nombre", "role"],

      limit: pageSize,
      offset,
    })
    .then(usuarios => res.send(usuarios))
    .catch((err) => res.send(err));
}

exports.getUsuario = (req, res) => {
  findUsuario(req.params.id, usuario => res.send(usuario), req, res);
}

exports.createUsuario = (req, res) => {
  models.usuario
    .create({ nombre: req.body.nombre })
    .then(nuevoUser => res.status(201).send(nuevoUser))
    .catch((err) => res.send(err));
}

exports.updateUsuario = (req, res) => {
  const isAdmin = req.user.role === 'administrador'
  if(req.user.dni.toString() !== req.params.id && !isAdmin) res.status(401).send("Not Authorized")

  const onSuccess = (usuario, req, res) => {
    usuario
      .update({
        nombre: req.body.nombre,
        email: req.body.email,
        picture: req.body.picture,
        password: req.body.password,
        role: isAdmin ? req.body.role : usuario.role
      })
      .then(() => res.status(200).send())
      .catch((err) => res.send(err));
  }

  findUsuario(req.params.id, onSuccess, req, res);
}

exports.deleteUsuario = (req, res) => {
  const onSuccess = usuario => {
    usuario
      .destroy()
      .then(() => res.status(200))
      .catch((err) => res.send(err));
  }

  findUsuario(req.params.id, onSuccess);
}
