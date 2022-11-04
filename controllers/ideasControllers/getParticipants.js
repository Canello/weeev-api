const ideaModel = require('../../models/idea');
const participantModel = require('../../models/participant');

exports.getParticipants = async (req, res, next) => {
    try {
        const userId = null//req.headers.userId;
        const ideaId = req.params.ideaId;
        const idea = await ideaModel.getIdea(ideaId);
        const isCreator = idea.creator_id === userId;
        if (isCreator) {
            const participants = await participantModel.getParticipants(ideaId, 0);
            res.json({
                status: 'ok',
                data: {
                    participants: participants
                }
            });
        } else {
            throw Error('Não autorizado.');
        }
    } catch (err) {
        res.json({
            status: 'failed',
            data: {
                error: 'Alguma coisa deu errado.'
            }
        });
        console.log(err);
    }
}