const router = require('express').Router();
const verifyToken = require('../auth/verifyToken');
const { getInscripciones, getInscripcion, createInscripcion, updateInscripcion, deleteInscripcion } = require('../controllers/inscripcionController')

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

router.get("/", verifyToken(['administrador', 'estudiante']), getInscripciones);
router.get("/:id", verifyToken(['administrador', 'estudiante']), getInscripcion);
router.post("/", verifyToken(['administrador', 'estudiante']), createInscripcion);
router.put("/:id", verifyToken(['administrador', 'estudiante']), updateInscripcion);
router.delete("/:id", verifyToken(['administrador', 'estudiante']), deleteInscripcion);

module.exports = router;
