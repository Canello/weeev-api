const ideaModel = require("../../models/idea.model");
const { catchErrors } = require("../../utils/functions/catchErrors");
const { addIsCreator } = require('../../utils/functions/addIsCreator');
const { sendResponse } = require("../../utils/functions/sendResponse");


//-----------------------------------------------------------
//------------------------ Controller -----------------------

exports.getIdeas = async (req, res, next) => {
    catchErrors(res, async () => {
        const { userId, page } = getDataFromRequest(req);

        const ideas = await ideaModel.getMyIdeas(userId, page);
        const formattedIdeas = formatIdeas(ideas, userId);
        
        const totalPages = await ideaModel.getTotalPages(userId);

        sendResponse(res, {
            ideas: formattedIdeas,
            total_pages: totalPages
        });
    });
}


//-----------------------------------------------------------
//------------------------ Functions ------------------------

function getDataFromRequest(req) {
    const userId = req.headers.userId;
    const page = req.query.page ?? 0;
    return { userId, page };
}

function formatIdeas(ideas, userId) {
    return ideas.map(idea => addIsCreator(idea, userId));
}