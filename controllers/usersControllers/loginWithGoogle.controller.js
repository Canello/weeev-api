const jwt = require('jsonwebtoken');

const userModel = require("../../models/user.model");
const { decodeGoogleToken } = require("../../utils/functions");

exports.loginWithGoogle = async (req, res, next) => {
    try {
        const { googleToken } = req.body.data;
        const { email, fullName } = await decodeGoogleToken(googleToken);
        let user = await userModel.getUserByEmail(email);
        if (!user) {
            const UTCDate = new Date().toISOString();
            user = await userModel.createUser(email, fullName, UTCDate);
        }
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
        res.json({
            status: 'ok',
            data: {
                token: token
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