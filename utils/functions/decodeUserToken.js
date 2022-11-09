const jwt = require('jsonwebtoken');

exports.decodeUserToken = (authorizationToken) => {
    const token = authorizationToken.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const { userId } = decodedToken;
    return { userId };
}