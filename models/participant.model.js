const db = require("../utils/database/database");

// Participantes de uma ideia
const getParticipants = (ideaId, page) => {
    return db
        .select('*')
        .from('participants')
        .where({ 'idea_id': ideaId })
        .orderBy('created_at', 'desc')
        .limit(50)
        .offset(page*50);
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