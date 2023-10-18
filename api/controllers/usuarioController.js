const models = require("../models");

const findUsuario = (id, onSuccess) => {
  models.usuario
    .findOne({
      attributes: ["dni", "nombre"],
      where: { id }
    })
    .then(usuario => (usuario ? onSuccess(usuario) : res.status(404)))
    .catch(err => res.send(err));
};

exports.getUsuarios = (_, res) => {
  models.usuario
    .findAll({
      attributes: ["dni", "nombre"]
    })
    .then(usuarios => res.send(usuarios))
    .catch((err) => res.send(err));
}

exports.getUsuario = (req, res) => {
  findUsuario(req.params.id, usuario => res.send(usuario));
}

exports.createUsuario = (req, res) => {
  models.usuario
    .create({ nombre: req.body.nombre })
    .then(nuevoUser => res.status(201).send(nuevoUser))
    .catch((err) => res.send(err));
}

exports.updateUsuario = (req, res) => {
  const onSuccess = usuario => {
    usuario
      .update({ nombre: req.body.nombre }, { fields: ["nombre"] })
      .then(() => res.status(200))
      .catch((err) => res.send(err));
  }

  findUsuario(req.params.id, onSuccess);
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
