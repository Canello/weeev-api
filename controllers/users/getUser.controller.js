const userModel = require("../../models/user.model");
const { catchErrors } = require("../../utils/functions/catchErrors");

exports.getUser = async (req, res, next) => {
    catchErrors(async () => {
        const userId = req.headers.userId;
        const user = await userModel.getUserById(userId);
        res.json({
            status: 'ok',
            data: {
                user: user
            }
        });
    });
}