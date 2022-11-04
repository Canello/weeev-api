const { getIdeas } = require('./ideasControllers/getIdeas');
const { getIdea } = require('./ideasControllers/getIdea');
const { createIdea } = require('./ideasControllers/createIdea');
const { getParticipants } = require('./ideasControllers/getParticipants');
const { participate } = require('./ideasControllers/participate');

module.exports = {
    getIdeas,
    getIdea,
    createIdea,
    getParticipants,
    participate
}