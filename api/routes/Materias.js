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
  models.materia
    .findAll({
      attributes: ["id", "nombre"]
    })
    .then(materias => res.send(materias))
    .catch((err) => res.send(err));
});

router.post("/", (req, res) => {
  models.materia
    .create({ nombre: req.body.nombre })
    .then(nuevaMateria => res.status(201).send(nuevaMateria))
    .catch((err) => res.send(err));
});

function findMateria (id, onSuccess) {
  models.materia
    .findOne({
      attributes: ["id", "nombre"],
      where: { id }
    })
    .then(materia => (materia ? onSuccess(materia) : res.status(404)))
    .catch(err => res.send(err));
};

router.get("/:id", (req, res) => {
  findMateria(req.params.id, materia => res.send(materia));
});

router.put("/:id", (req, res) => {
  const onSuccess = materia => {
    materia
      .update({ nombre: req.body.nombre }, { fields: ["nombre"] })
      .then(() => res.status(200))
      .catch((err) => res.send(err));
  }

  findMateria(req.params.id, onSuccess);
});

router.delete("/:id", (req, res) => {
  const onSuccess = materia => {
    materia
      .destroy()
      .then(() => res.status(200))
      .catch((err) => res.send(err));
  }

  findMateria(req.params.id, onSuccess);
});

module.exports = router;
