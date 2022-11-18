const axios = require("axios");

exports.decodeGoogleToken = async (token) => {
    const apiResponse = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`);
    const decodedToken = apiResponse.data;
    if (decodedToken.error) throw Error('JWT inválido.');
    const { email, given_name, family_name } = decodedToken;
    const fullName = `${given_name} ${family_name}`.trim();
    return { email, fullName };
}