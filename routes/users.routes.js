const express = require('express');

const controllers = require('../controllers/users.controllers');

const router = express.Router();

// Criar usuário ou entrar com Google
router.post('/', controllers.loginWithGoogle);

// Dados do usuário
router.get('/', controllers.getUser);

// Editar perfil
router.patch('/', controllers.editUser);

module.exports = router;