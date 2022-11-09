const ideaModel = require("../../models/idea.model");
const { catchErrors } = require("../../utils/functions/catchErrors");

exports.getIdeas = async (req, res, next) => {
    catchErrors(async () => {
        const userId = req.headers.userId;
        const ideas = await ideaModel.getMyIdeas(userId, 0);
        res.json({
            status: 'ok',
            data: {
                ideas: ideas
            }
        });
    });
}