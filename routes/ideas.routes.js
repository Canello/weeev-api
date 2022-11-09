const express = require('express');

const { getIdeas } = require('../controllers/ideas/getIdeas.controller');
const { getIdea } = require('../controllers/ideas/getIdea.controller');
const { createIdea } = require('../controllers/ideas/createIdea.controller');
const { getParticipants } = require('../controllers/ideas/getParticipants.controller');
const { participate } = require('../controllers/ideas/participate.controller');

const { authorization } = require('../middlewares/authorization.middleware');
const { loginCheck } = require('../middlewares/loginCheck.middleware');

const router = express.Router();

// Minhas ideias
router.get('/', authorization, getIdeas);

// Ideia
router.get('/:ideaId', loginCheck, getIdea);

// Criar ideia
router.post('/', authorization, createIdea);

// Participantes da ideia
router.get('/:ideaId/participants', authorization, getParticipants);

// Participar da ideia
router.post('/:ideaId/participants', participate);

module.exports = router;