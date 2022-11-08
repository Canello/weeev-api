const userModel = require("../../models/user.model");

exports.getUser = async (req, res, next) => {
    try {
        const userId = req.headers.userId;
        const user = await userModel.getUserById(userId);
        res.json({
            status: 'ok',
            data: {
                user: user
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