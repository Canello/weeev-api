const userModel = require("../../models/user.model");
const { catchErrors } = require("../../utils/functions/catchErrors");
const { sendResponse } = require("../../utils/functions/sendResponse");


//-----------------------------------------------------------
//------------------------ Controller -----------------------

exports.editUser = async (req, res, next) => {
    catchErrors(res, async () => {
        const { userId, fullName } = getDataFromRequest(req);

        const user = await userModel.editUser(userId, fullName);

        sendResponse(res, { user: user });
    });
}


//-----------------------------------------------------------
//------------------------ Functions ------------------------

function getDataFromRequest(req) {
    const userId = req.headers.userId;
    const { fullName } = req.body.data;
    return { userId, fullName };
}