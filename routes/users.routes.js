const express = require('express');

const { loginWithGoogle } = require('../controllers/users/loginWithGoogle.controller');
const { getUser } = require('../controllers/users/getUser.controller');
const { editUser } = require('../controllers/users/editUser.controller');

const { authorization } = require('../middlewares/authorization.middleware');

const router = express.Router();

// Criar usuário ou entrar com Google
router.post('/', loginWithGoogle);

// Dados do usuário
router.get('/', authorization, getUser);

// Editar perfil
router.patch('/', authorization, editUser);

module.exports = router;