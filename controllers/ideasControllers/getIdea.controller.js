const ideaModel = require("../../models/idea.model");

exports.getIdea = async (req, res, next) => {
    try {
        const userId = req.headers.userId;
        const ideaId = req.params.ideaId;
        const idea = await ideaModel.getIdea(ideaId);
        const isCreator = userId === idea.creatorId;
        let resIdea;
        if (isCreator) {
            resIdea = idea;
        } else {
            const { participants_count, ...x } = idea;
            resIdea = x;
        }
        res.json({
            status: 'ok',
            data: {
                idea: resIdea
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