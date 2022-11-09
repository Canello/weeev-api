const ideaModel = require("../../models/idea.model");
const { catchErrors } = require("../../utils/functions/catchErrors");

exports.getIdea = async (req, res, next) => {
    catchErrors(async () => {
        const userId = req.headers.userId;
        const ideaId = req.params.ideaId;
        const idea = await ideaModel.getIdea(ideaId);
        const isCreator = userId === idea.creator_id;
        let resIdea = idea;
        if (!isCreator) {
            const { participants_count, ...filteredIdea } = idea;
            resIdea = filteredIdea;
        }
        res.json({
            status: 'ok',
            data: {
                idea: resIdea
            }
        });
    });
}