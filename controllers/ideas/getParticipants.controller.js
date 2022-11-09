const ideaModel = require('../../models/idea.model');
const participantModel = require('../../models/participant.model');
const { AVAILABLE_ERRORS } = require('../../utils/data/errors');
const { catchErrors } = require('../../utils/functions/catchErrors');

exports.getParticipants = async (req, res, next) => {
    catchErrors(async () => {
        const userId = req.headers.userId;
        const ideaId = req.params.ideaId;
        const idea = await ideaModel.getIdea(ideaId);
        const isCreator = userId === idea.creator_id;
        if (isCreator) {
            const participants = await participantModel.getParticipants(ideaId, 0);
            res.json({
                status: 'ok',
                data: {
                    participants: participants
                }
            });
        } else {
            throw Error(AVAILABLE_ERRORS.not_authorized);
        }
    });
}