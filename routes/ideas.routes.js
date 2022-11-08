const express = require('express');

const controllers = require('../controllers/ideas.controllers');

const router = express.Router();

// Minhas ideias
router.get('/', controllers.getIdeas);

// Ideia
router.get('/:ideaId', controllers.getIdea);

// Criar ideia
router.post('/', controllers.createIdea);

// Participantes da ideia
router.get('/:ideaId/participants', controllers.getParticipants);

// Participar da ideia
router.post('/:ideaId/participants', controllers.participate);

module.exports = router;