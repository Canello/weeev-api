const participantModel = require("../../models/participant.model");
const ideaModel = require('../../models/idea.model');
const { catchErrors } = require("../../utils/functions/catchErrors");
const { getUTCDate } = require("../../utils/functions/getUTCDate");

exports.participate = async (req, res, next) => {
    catchErrors(res, async () => {
        const ideaId = req.params.ideaId;
        const { fullName, instagram, phoneNumber } = req.body.data;
        await participantModel.createParticipant(ideaId, fullName, instagram, phoneNumber, getUTCDate());
        await ideaModel.incrementParticipantsCount(ideaId);
        res.json({
            status: 'ok'
        });
    });
}