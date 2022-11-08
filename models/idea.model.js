const db = require('../utils/database');

// Minhas ideias
const getMyIdeas = (userId, offset) => {
    return db
        .select([
            'ideas.id',
            'ideas.title',
            'ideas.participants_count',
            'ideas.created_at',
            'users.full_name AS creator_name'
        ])
        .from('ideas')
        .leftJoin('users', 'ideas.creator_id', 'users.id')
        .where({ 'ideas.creator_id': userId })
        .orderBy('created_at', 'desc')
        .limit(50)
        .offset(offset);
}

// Ideia
const getIdea = async (ideaId) => {
    const arr = await db
        .select([
            'ideas.id',
            'ideas.title',
            'ideas.participants_count',
            'ideas.created_at',
            'users.full_name AS creator_name'
        ])
        .from('ideas')
        .leftJoin('users', 'ideas.creator_id', 'users.id')
        .where({ 'ideas.id': ideaId });
    return arr[0];
}

// Criar ideia
const createIdea = (title, creatorId, participantsCount, createdAt) => {
    return db
        .insert({
            'title': title,
            'creator_id': creatorId,
            'participants_count': participantsCount,
            'created_at': createdAt
        })
        .into('ideas')
        .returning('*');
}

module.exports = {
    getMyIdeas,
    getIdea,
    createIdea
}