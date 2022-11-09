const { AVAILABLE_ERRORS } = require('../data/errors');

exports.catchErrors = async (f) => {
    try {
        await f();
    } catch (err) {
        const error = AVAILABLE_ERRORS[err] ?? AVAILABLE_ERRORS.default;
        res.json({
            status: 'failed',
            data: {
                error: error
            }
        });
        console.log(err);
    }
}