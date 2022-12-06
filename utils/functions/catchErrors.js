const { AVAILABLE_ERRORS } = require('../data/errors');


//-----------------------------------------------------------
//------------------------ catchErrors ----------------------

exports.catchErrors = async (res, f) => {
    try {
        await f();
    } catch (err) {
        sendError(res, err);
        console.log(err);
    }
}


//-----------------------------------------------------------
//------------------- Secondary functions -------------------

function sendError(res, err) {
    const error = makeErrorMessage(err);

    res.json({
        status: 'failed',
        data: {
            error: error
        }
    });
}

function makeErrorMessage(err) {
    return AVAILABLE_ERRORS[err] ?? AVAILABLE_ERRORS.default;
}