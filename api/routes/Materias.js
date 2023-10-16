const router = require('express').Router();
const { getMaterias, getMateria, createMateria, updateMateria, deleteMateria } = require('../controllers/materiaController')

/**
* @swagger
* path:
* /api/docs:
* get:
*     summary: abc
*     description: abc
*     produces:
*       - application/json
*/

router.get("/", getMaterias);
router.get("/:id", getMateria);
router.post("/", createMateria);
router.put("/:id", updateMateria);
router.delete("/:id", deleteMateria);

module.exports = router;
