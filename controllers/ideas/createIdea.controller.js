const ideaModel = require('../../models/idea.model');
const { catchErrors } = require('../../utils/functions/catchErrors');
const { getUTCDate } = require('../../utils/functions/getUTCDate');
const { addIsCreator } = require('../../utils/functions/addIsCreator');
const { AVAILABLE_ERRORS } = require('../../utils/data/errors');
const { sendResponse } = require('../../utils/functions/sendResponse');


//-----------------------------------------------------------
//------------------------ Controller -----------------------

exports.createIdea = async (req, res, next) => {
    catchErrors(res, async () => {
        const { userId, title } = getDataFromRequest(req);

        validateTitle(title);
        const formattedTitle = formatTitle(title);

        const idea = await ideaModel.createIdea(formattedTitle, userId, 0, getUTCDate());
        const formattedIdea = addIsCreator(idea, userId);

        sendResponse(res, { idea: formattedIdea });
    });
}


//-----------------------------------------------------------
//------------------------ Functions ------------------------

function getDataFromRequest(req) {
    const userId = req.headers.userId;
    const { title } = req.body.data;
    return { userId, title };
}

function validateTitle(title) {
    if (title.length > 70) throw Error(AVAILABLE_ERRORS.title_length_exceeded);
}

function formatTitle(title) {
    const formattedTitle = 'Eu quero ' + title.trim();
    return formattedTitle;
}