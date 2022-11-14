const db = require('../utils/database/database');

// Minhas ideias
const getMyIdeas = (userId, offset) => {
    return db
        .select([
            'ideas.id',
            'ideas.title',
            'ideas.creator_id',
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
            'ideas.creator_id',
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
const createIdea = async (title, creatorId, participantsCount, createdAt) => {
    const arr = await db
        .insert({
            'title': title,
            'creator_id': creatorId,
            'participants_count': participantsCount,
            'created_at': createdAt
        })
        .into('ideas')
        .returning('*');
    return arr[0];
}

// Incrementar contagem de participantes
const incrementParticipantsCount = async (ideaId) => {
    return db('ideas')
        .where({ 'id': ideaId })
        .increment('participants_count', 1);
}

module.exports = {
    getMyIdeas,
    getIdea,
    createIdea,
    incrementParticipantsCount
}