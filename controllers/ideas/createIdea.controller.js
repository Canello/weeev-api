const ideaModel = require('../../models/idea.model');
const { catchErrors } = require('../../utils/functions/catchErrors');
const { getUTCDate } = require('../../utils/functions/getUTCDate');

exports.createIdea = async (req, res, next) => {
    catchErrors(res, async () => {
        const userId = req.headers.userId;
        const { title } = req.body.data;
        const idea = await ideaModel.createIdea(title, userId, 0, getUTCDate());
        res.json({
            status : 'ok',
            data: {
                idea: idea
            }
        });
    });
}