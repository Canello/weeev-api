const userModel = require("../../models/user.model");
const { catchErrors } = require("../../utils/functions/catchErrors");
const { sendResponse } = require("../../utils/functions/sendResponse");


//-----------------------------------------------------------
//------------------------ Controller -----------------------

exports.getUser = async (req, res, next) => {
    catchErrors(res, async () => {
        const { userId } = getDataFromRequest(req);

        const user = await userModel.getUserById(userId);

        sendResponse(res, { user: user });
    });
}


//-----------------------------------------------------------
//------------------------ Functions ------------------------

function getDataFromRequest(req) {
    const userId = req.headers.userId;
    return { userId };
}