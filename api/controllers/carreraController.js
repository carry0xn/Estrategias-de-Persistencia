const models = require("../models");

const findCarrera = (id, onSuccess) => {
  models.carrera
    .findOne({
      attributes: ["id", "nombre"],
      where: { id }
    })
    .then(carrera => (carrera ? onSuccess(carrera) : res.status(404)))
    .catch(err => res.send(err));
};

exports.getCarreras = (req, res) => {
  const page = req.query.page || 1;
  const pageSize = parseInt(req.query.pageSize) || 5;

  const offset = (page - 1) * pageSize;
  models.carrera
    .findAndCountAll({
      attributes: ["id", "nombre"],
      
      limit: pageSize,
      offset,
    })
    .then(carreras => res.send(carreras))
    .catch((err) => res.send(err));
}

exports.getCarrera = (req, res) => {
  findCarrera(req.params.id, carrera => res.send(carrera));
}

exports.createCarrera = (req, res) => {
  models.carrera
    .create({ nombre: req.body.nombre, titulo: req.body.titulo })
    .then(nuevaCarrera => res.status(201).send(nuevaCarrera))
    .catch((err) => res.send(err));
}

exports.updateCarrera = (req, res) => {
  const onSuccess = carrera => {
    carrera
      .update({ nombre: req.body.nombre }, { fields: ["nombre"] })
      .then(() => res.status(200))
      .catch((err) => res.send(err));
  }

  findCarrera(req.params.id, onSuccess);
}

exports.deleteCarrera = (req, res) => {
  const onSuccess = carrera => {
    carrera
      .destroy()
      .then(() => res.status(200))
      .catch((err) => res.send(err));
  }

  findCarrera(req.params.id, onSuccess);
}
