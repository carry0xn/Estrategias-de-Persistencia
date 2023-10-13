const router = require('express').Router();
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

router.get("/", getUsuarios);
router.get("/:id", getUsuario);
router.post("/", createUsuario);
router.put("/:id", updateUsuario);
router.delete("/:id", deleteUsuario);


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
