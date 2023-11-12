const models = require("../models");

const findMateria = (id, onSuccess) => {
  models.materia
    .findOne({
      attributes: ["id", "nombre"],
      where: { id }
    })
    .then(materia => (materia ? onSuccess(materia) : res.status(404)))
    .catch(err => res.send(err));
};

exports.getMaterias = (req, res) => {
  const page = req.query.page || 1;
  const pageSize = parseInt(req.query.pageSize) || 5;

  const offset = (page - 1) * pageSize;
  models.materia
    .findAndCountAll({
      attributes: ["id", "nombre"],

      limit: pageSize,
      offset,
    })
    .then(materias => res.send(materias))
    .catch((err) => res.send(err));
}

exports.getMateria = (req, res) => {
  findMateria(req.params.id, materia => res.send(materia));
}

exports.createMateria = (req, res) => {
  models.materia
    .create({ nombre: req.body.nombre })
    .then(nuevaMateria => res.status(201).send(nuevaMateria))
    .catch((err) => res.send(err));
}

exports.updateMateria = (req, res) => {
  const onSuccess = materia => {
    materia
      .update({ nombre: req.body.nombre }, { fields: ["nombre"] })
      .then(() => res.status(200))
      .catch((err) => res.send(err));
  }

  findMateria(req.params.id, onSuccess);
}

exports.deleteMateria = (req, res) => {
  const onSuccess = materia => {
    materia
      .destroy()
      .then(() => res.status(200))
      .catch((err) => res.send(err));
  }

  findMateria(req.params.id, onSuccess);
}
