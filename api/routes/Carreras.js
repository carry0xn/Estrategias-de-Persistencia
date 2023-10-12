const express = require('express')
const router = express.Router();
const models = require("../models");

/**
* @swagger
* path:
* /api/docs:
* get:
*     summary: abc
*     description: abc
*     produces:
*       - application/json
*
*
*/

router.get("/", (req, res) => {
  models.carrera
    .findAll({
      attributes: ["id", "nombre"]
    })
    .then(carreras => res.send(carreras))
    .catch((err) => res.send(err));
});

router.post("/", (req, res) => {
  models.carrera
    .create({ nombre: req.body.nombre })
    .then(nuevaCarrera => res.status(201).send(nuevaCarrera))
    .catch((err) => res.send(err));
});

const findCarrera = (id, onSuccess) => {
  models.carrera
    .findOne({
      attributes: ["id", "nombre"],
      where: { id }
    })
    .then(carrera => (carrera ? onSuccess(carrera) : res.status(404)))
    .catch(err => res.send(err));
};

router.get("/:id", (req, res) => {
  findCarrera(req.params.id, carrera => res.send(carrera));
});

router.put("/:id", (req, res) => {
  const onSuccess = carrera => {
    carrera
      .update({ nombre: req.body.nombre }, { fields: ["nombre"] })
      .then(() => res.status(200))
      .catch((err) => res.send(err));
  }

  findCarrera(req.params.id, onSuccess);
});

router.delete("/:id", (req, res) => {
  const onSuccess = carrera => {
    carrera
      .destroy()
      .then(() => res.status(200))
      .catch((err) => res.send(err));
  }

  findCarrera(req.params.id, onSuccess);
});

module.exports = router;
