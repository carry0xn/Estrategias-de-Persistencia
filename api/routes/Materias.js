const router = require('express').Router();
const verifyToken = require('../auth/verifyToken')
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

router.get("/", verifyToken(), getMaterias);
router.get("/:id", verifyToken(), getMateria);
router.post("/", verifyToken(['administrador']), createMateria);
router.put("/:id", verifyToken(['administrador']), updateMateria);
router.delete("/:id", verifyToken(['administrador']), deleteMateria);

module.exports = router;
