const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/usuario/:nombre_usuario/:password', usuarioController.loginUsuario)

module.exports = router;