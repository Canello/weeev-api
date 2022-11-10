const ideaModel = require("../../models/idea.model");
const { catchErrors } = require("../../utils/functions/catchErrors");
const { addIsCreator } = require('../../utils/functions/addIsCreator');

exports.getIdeas = async (req, res, next) => {
    catchErrors(res, async () => {
        const userId = req.headers.userId;
        const ideas = await ideaModel.getMyIdeas(userId, 0);
        const resIdeas = ideas.map(idea => addIsCreator(idea, userId));
        res.json({
            status: 'ok',
            data: {
                ideas: resIdeas
            }
        });
    });
}