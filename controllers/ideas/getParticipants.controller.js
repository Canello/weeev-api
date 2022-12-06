const ideaModel = require('../../models/idea.model');
const participantModel = require('../../models/participant.model');
const { AVAILABLE_ERRORS } = require('../../utils/data/errors');
const { catchErrors } = require('../../utils/functions/catchErrors');
const { sendResponse } = require('../../utils/functions/sendResponse');


//-----------------------------------------------------------
//------------------------ Controller -----------------------

exports.getParticipants = async (req, res, next) => {
    catchErrors(res, async () => {
        const { userId, ideaId, page } = getDataFromRequest(req);
        
        const idea = await ideaModel.getIdea(ideaId);

        if (isCreator(idea, userId)) {
            await sendParticipants(res, ideaId, page);
        } else {
            doNotAuthorize();
        }
    });
}


//-----------------------------------------------------------
//------------------------ Functions ------------------------

function getDataFromRequest(req) {
    const userId = req.headers.userId;
    const ideaId = req.params.ideaId;
    const page = req.query.page ?? 0;
    return { userId, ideaId, page };
}

function isCreator(idea, userId) {
    return userId === idea.creator_id;
}

async function sendParticipants(res, ideaId, page) {
    const participants = await participantModel.getParticipants(ideaId, page);

    sendResponse(res, { participants: participants });
}

function doNotAuthorize() {
    throw Error(AVAILABLE_ERRORS.not_authorized);
}