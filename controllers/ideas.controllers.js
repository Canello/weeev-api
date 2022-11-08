const { getIdeas } = require('./ideasControllers/getIdeas.controller');
const { getIdea } = require('./ideasControllers/getIdea.controller');
const { createIdea } = require('./ideasControllers/createIdea.controller');
const { getParticipants } = require('./ideasControllers/getParticipants.controller');
const { participate } = require('./ideasControllers/participate.controller');

module.exports = {
    getIdeas,
    getIdea,
    createIdea,
    getParticipants,
    participate
}