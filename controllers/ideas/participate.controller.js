const participantModel = require("../../models/participant.model");
const ideaModel = require('../../models/idea.model');
const { catchErrors } = require("../../utils/functions/catchErrors");
const { getUTCDate } = require("../../utils/functions/getUTCDate");
const { AVAILABLE_ERRORS } = require("../../utils/data/errors");

exports.participate = async (req, res, next) => {
    catchErrors(res, async () => {
        const ideaId = req.params.ideaId;
        const { fullName, instagram, phoneNumber } = req.body.data;
        if (fullName.length > 70) throw Error(AVAILABLE_ERRORS.full_name_length_exceeded);
        if (phoneNumber.length > 40) throw Error(AVAILABLE_ERRORS.phone_number_length_exceeded);
        await participantModel.createParticipant(ideaId, fullName.trim(), instagram, phoneNumber.trim(), getUTCDate());
        await ideaModel.incrementParticipantsCount(ideaId);
        res.json({
            status: 'ok'
        });
    });
}