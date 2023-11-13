const router = require('express').Router();
const { signUp, signIn, signOut } = require('../controllers/authController')

/**
* @swagger
* path:
* /singup:
* post:
*     summary: Registers a new student in the database
*     description: ABC
*     produces:
*       - application/json
*/

router.post("/singup", signUp);
router.post("/singin", signIn);
router.post("/singout", signOut);

module.exports = router;
