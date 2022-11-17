const db = require("../utils/database/database");

const PARTICIPANTS_PER_PAGE = 15;

// Participantes de uma ideia
const getParticipants = (ideaId, page) => {
    return db
        .select('*')
        .from('participants')
        .where({ 'idea_id': ideaId })
        .orderBy('created_at', 'desc')
        .limit(PARTICIPANTS_PER_PAGE)
        .offset(page*PARTICIPANTS_PER_PAGE);
}

// Criar participante
const createParticipant = (ideaId, fullName, instagram, phoneNumber, createdAt) => {
    return db
        .insert({
            'idea_id': ideaId,
            'full_name': fullName,
            'instagram': instagram,
            'phone_number': phoneNumber,
            'created_at': createdAt
        })
        .into('participants');
}

module.exports = {
    getParticipants,
    createParticipant
}