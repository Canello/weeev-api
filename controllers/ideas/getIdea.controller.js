const ideaModel = require("../../models/idea.model");
const { catchErrors } = require("../../utils/functions/catchErrors");
const { addIsCreator } = require('../../utils/functions/addIsCreator');
const { sendResponse } = require('../../utils/functions/sendResponse');


//-----------------------------------------------------------
//------------------------ Controller -----------------------

exports.getIdea = async (req, res, next) => {
    catchErrors(res, async () => {
        const { userId, ideaId } = getDataFromRequest(req);

        const idea = await ideaModel.getIdea(ideaId);
        const formattedIdea = formatIdea(idea, userId);

        sendResponse(res, { idea: formattedIdea });
    });
}


//-----------------------------------------------------------
//------------------------ Functions ------------------------

function getDataFromRequest(req) {
    const userId = req.headers.userId;
    const ideaId = req.params.ideaId;
    return { userId, ideaId };
}

function formatIdea(idea, userId) {
    let formattedIdea = addIsCreator(idea, userId);
    if (!formattedIdea.is_creator) {
        formattedIdea = filterIdea(idea);
    }
    return formattedIdea;
}

function filterIdea(idea) {
    const { participants_count, ...filteredIdea } = idea;
    return filteredIdea;
}