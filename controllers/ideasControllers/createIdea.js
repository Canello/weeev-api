const ideaModel = require('../../models/idea');

exports.createIdea = async (req, res, next) => {
    try {
        const userId = req.headers.userId;
        const { title } = req.body.data;
        const UTCDate = new Date().toISOString();
        const idea = await ideaModel.createIdea(title, userId, 0, UTCDate);
        res.json({
            status : 'ok',
            data: {
                idea: idea
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