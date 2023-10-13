const router = require('express').Router();
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
router.post("/", createCarrera);
router.put("/:id", updateCarrera);
router.delete("/:id", deleteCarrera);

module.exports = router;
