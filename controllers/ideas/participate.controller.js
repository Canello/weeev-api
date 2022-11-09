const participantModel = require("../../models/participant.model");
const { catchErrors } = require("../../utils/functions/catchErrors");
const { getUTCDate } = require("../../utils/functions/getUTCDate");

exports.participate = async (req, res, next) => {
    catchErrors(async () => {
        const ideaId = req.params.ideaId;
        const { fullName, instagram, phoneNumber } = req.body.data;
        await participantModel.createParticipant(ideaId, fullName, instagram, phoneNumber, getUTCDate());
        res.json({
            status: 'ok'
        });
    });
}