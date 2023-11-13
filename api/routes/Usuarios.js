const router = require('express').Router();
const verifyToken = require('../auth/verifyToken')
const { getUsuarios, getUsuario, createUsuario, updateUsuario, deleteUsuario } = require('../controllers/usuarioController')

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

router.get("/", verifyToken(), getUsuarios);
router.get("/:id", verifyToken(), getUsuario);
router.post("/", verifyToken(['administrador']), createUsuario);
router.put("/:id", verifyToken(), updateUsuario);
router.delete("/:id", verifyToken(['administrador']), deleteUsuario);

module.exports = router;
