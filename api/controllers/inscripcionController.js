const models = require("../models");

const findInscripcion = (id, onSuccess) => {
  models.inscripcion
    .findOne({
      where: { id }
    })
    .then(inscripcion => (inscripcion ? onSuccess(inscripcion) : res.status(404)))
    .catch(err => res.send(err));
};

exports.getInscripciones = (req, res) => {
  const page = req.query.page || 1;
  const pageSize = parseInt(req.query.pageSize) || 5;

  const offset = (page - 1) * pageSize;

  models.inscripcion
    .findAndCountAll({
      limit: pageSize,
      offset,
    })
    .then(inscripcion => res.send(inscripcion))
    .catch((err) => res.send(err));
}

exports.getInscripcion = (req, res) => {
  findInscripcion(req.params.id, inscripcion => res.send(inscripcion));
}

exports.createInscripcion = (req, res) => {
  models.inscripcion
    .create(req.body)
    .then(nuevaInscripcion => res.status(201).send(nuevaInscripcion))
    .catch((err) => res.send(err));
}

exports.updateInscripcion = (req, res) => {
  const onSuccess = inscripcion => {
    inscripcion
      .update(req.body)
      .then(() => res.status(200))
      .catch((err) => res.send(err));
  }

  findInscripcion(req.params.id, onSuccess);
}

exports.deleteInscripcion = (req, res) => {
  const onSuccess = inscripcion => {
    inscripcion
      .destroy()
      .then(() => res.status(200))
      .catch((err) => res.send(err));
  }

  findInscripcion(req.params.id, onSuccess);
}
