const { editUser } = require("./users/editUser.controller");
const { getUser } = require("./users/getUser.controller");
const { loginWithGoogle } = require("./users/loginWithGoogle.controller");

module.exports = {
    loginWithGoogle,
    getUser,
    editUser
}