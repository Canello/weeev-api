const ideaModel = require("../../models/idea.model");
const { catchErrors } = require("../../utils/functions/catchErrors");
const { addIsCreator } = require('../../utils/functions/addIsCreator');

exports.getIdea = async (req, res, next) => {
    catchErrors(res, async () => {
        const userId = req.headers.userId;
        const ideaId = req.params.ideaId;
        const idea = await ideaModel.getIdea(ideaId);
        const isCreator = userId === idea.creator_id;
        let resIdea = idea;
        if (!isCreator) {
            const { participants_count, ...filteredIdea } = idea;
            resIdea = filteredIdea;
        }
        resIdea = addIsCreator(resIdea, userId);
        res.json({
            status: 'ok',
            data: {
                idea: resIdea
            }
        });
    });
}