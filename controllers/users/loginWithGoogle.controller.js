const jwt = require('jsonwebtoken');

const userModel = require("../../models/user.model");
const { catchErrors } = require('../../utils/functions/catchErrors');
const { decodeGoogleToken } = require('../../utils/functions/decodeGoogleToken');
const { getUTCDate } = require('../../utils/functions/getUTCDate');

exports.loginWithGoogle = async (req, res, next) => {
    catchErrors(res, async () => {
        const { googleToken } = req.body.data;
        const { email, fullName } = await decodeGoogleToken(googleToken);
        let user = await userModel.getUserByEmail(email);
        if (!user) {
            user = await userModel.createUser(email, fullName, getUTCDate());
        }
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
        res.json({
            status: 'ok',
            data: {
                token: token
            }
        });
    });
}