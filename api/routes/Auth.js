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

/*
const payload = {
  userType: 'admin',
  name: 'Caro'
}

const token = jwt.sign(payload, 'secretoSuperSecreto', { expiresIn: '3s' })

tokenClient = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVHlwZSI6ImFkbWluIiwibmFtZSI6IkNhcm8iLCJpYXQiOjE2OTYzODkyMTB9.RR54cjdN0qTY_dIlBVtjLicobbx_jC5UKPepqef55NY0'

jwt.verify(token, 'secretoSuperSecreto', (err, decoded) => {
  console.log('VALIDO', err)
})

setTimeout(() => {
jwt.verify(token, 'secretoSuperSecreto', (err, decoded) => {
  console.log('4 segundos', err)
})
}, 4000);*/

module.exports = router;
