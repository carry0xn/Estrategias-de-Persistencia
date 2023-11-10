const router = require('express').Router();
const { singUp, singIn, singOut } = require('../controllers/authController')

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

router.post("/singup", singUp);
router.post("/singin", singIn);
router.post("/singout", singOut);

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
