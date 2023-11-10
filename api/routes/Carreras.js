const router = require('express').Router();
const verifyToken = require('../auth/verifyToken');
const { getCarreras, getCarrera, createCarrera, updateCarrera, deleteCarrera } = require('../controllers/carreraController')

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

router.get("/", getCarreras);
router.get("/:id", getCarrera);
router.post("/", verifyToken, createCarrera);
router.put("/:id", updateCarrera);
router.delete("/:id", deleteCarrera);

module.exports = router;
