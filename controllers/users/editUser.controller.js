const userModel = require("../../models/user.model");
const { catchErrors } = require("../../utils/functions/catchErrors");

exports.editUser = async (req, res, next) => {
    catchErrors(res, async () => {
        const userId = req.headers.userId;
        const { fullName } = req.body.data;
        const user = await userModel.editUser(userId, fullName);
        res.json({
            status: 'ok',
            data: {
                user: user
            }
        });
    });
}