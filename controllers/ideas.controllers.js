const { getIdeas } = require('./ideas/getIdeas.controller');
const { getIdea } = require('./ideas/getIdea.controller');
const { createIdea } = require('./ideas/createIdea.controller');
const { getParticipants } = require('./ideas/getParticipants.controller');
const { participate } = require('./ideas/participate.controller');

module.exports = {
    getIdeas,
    getIdea,
    createIdea,
    getParticipants,
    participate
}