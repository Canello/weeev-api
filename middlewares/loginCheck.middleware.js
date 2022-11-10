const { decodeUserToken } = require("../utils/functions/decodeUserToken");

exports.loginCheck = (req, res, next) => {
    try {
        const { userId } = decodeUserToken(req.headers.authorization);
        req.headers.userId = userId;
    } catch (err) {
        // Continuar sem o token, ou seja, o usuário não está logado.
    } finally {
        next();
    }
}