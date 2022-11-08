const { editUser } = require("./usersControllers/editUser.controller");
const { getUser } = require("./usersControllers/getUser.controller");
const { loginWithGoogle } = require("./usersControllers/loginWithGoogle.controller");

module.exports = {
    loginWithGoogle,
    getUser,
    editUser
}