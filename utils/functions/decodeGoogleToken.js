exports.decodeGoogleToken = async (token) => {
    const apiResponse = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`);
    const decodedToken = await apiResponse.json();
    if (decodedToken.error) throw Error('JWT inválido.');
    const { email, given_name, family_name } = decodedToken;
    const fullName = `${given_name} ${family_name}`.trim();
    return { email, fullName };
}