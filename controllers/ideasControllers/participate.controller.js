const participantModel = require("../../models/participant.model");

exports.participate = async (req, res, next) => {
    try {
        const userId = req.headers.userId;
        const ideaId = req.params.ideaId;
        const { fullName, instagram, phoneNumber } = req.body.data;
        await participantModel.createParticipant(ideaId, fullName, instagram, phoneNumber);
        res.json({
            status: 'ok'
        });
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