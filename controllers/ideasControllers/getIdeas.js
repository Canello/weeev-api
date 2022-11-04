const ideaModel = require("../../models/idea");

exports.getIdeas = async (req, res, next) => {
    try {
        const userId = null//req.headers.userId;
        const ideas = await ideaModel.getMyIdeas(userId, 0);
        res.json({
            status: 'ok',
            data: {
                ideas: ideas
            }
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