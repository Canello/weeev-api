const ideaModel = require('../../models/idea.model');
const { catchErrors } = require('../../utils/functions/catchErrors');
const { getUTCDate } = require('../../utils/functions/getUTCDate');
const { addIsCreator } = require('../../utils/functions/addIsCreator');
const { AVAILABLE_ERRORS } = require('../../utils/data/errors');

exports.createIdea = async (req, res, next) => {
    catchErrors(res, async () => {
        const userId = req.headers.userId;
        const { title } = req.body.data;
        if (title.length > 70) throw Error(AVAILABLE_ERRORS.title_length_exceeded);
        const fullTitle = 'Eu quero ' + title.trim();
        let idea = await ideaModel.createIdea(fullTitle, userId, 0, getUTCDate());
        idea = addIsCreator(idea, userId);
        res.json({
            status : 'ok',
            data: {
                idea: idea
            }
        });
    });
}