const { catchErrors } = require("../utils/functions/catchErrors");
const { decodeUserToken } = require("../utils/functions/decodeUserToken");

exports.authorization = (req, res, next) => {
    catchErrors(res, async () => {
        const { userId } = decodeUserToken(req.headers.authorization);
        req.headers.userId = userId;
        next();
    });
}