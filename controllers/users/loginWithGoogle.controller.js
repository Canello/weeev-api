const jwt = require('jsonwebtoken');
const axios = require("axios");

const userModel = require("../../models/user.model");
const { catchErrors } = require('../../utils/functions/catchErrors');
const { getUTCDate } = require('../../utils/functions/getUTCDate');
const { sendResponse } = require('../../utils/functions/sendResponse');


//-----------------------------------------------------------
//------------------------ Controller -----------------------

exports.loginWithGoogle = async (req, res, next) => {
    catchErrors(res, async () => {
        const { googleToken } = getDataFromRequest(req);

        const { email, fullName } = await decodeGoogleToken(googleToken);
        const user = await getExistingUserOrCreateNewOne(email, fullName);
        const userToken = createUserToken(user);

        sendResponse(res, { token: userToken });
    });
}


//-----------------------------------------------------------
//------------------------ Functions ------------------------

function getDataFromRequest(req) {
    const { googleToken } = req.body.data;
    return { googleToken };
}

async function decodeGoogleToken(token) {
    const decodedToken = await getDecodedToken(token);
    validateDecodedToken(decodedToken);
    const { email, fullName } = getEmailAndFullName(decodedToken);
    return { email, fullName };
}

async function getDecodedToken(token) {
    const apiResponse = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`);
    return apiResponse.data;
}

function validateDecodedToken(decodedToken) {
    if (decodedToken.error) throw Error('JWT inválido.');
}

function getEmailAndFullName(decodedToken) {
    const { email, given_name, family_name } = decodedToken;
    const fullName = `${given_name} ${family_name}`.trim();
    return { email, fullName };
}

async function getExistingUserOrCreateNewOne(email, fullName) {
    let user = await userModel.getUserByEmail(email);
    if (!user) {
        user = await userModel.createUser(email, fullName, getUTCDate());
    }
    return user;
}

function createUserToken(user) {
    return jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
}