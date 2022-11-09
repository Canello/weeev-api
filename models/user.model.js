const db = require("../utils/database/database");

//Buscar usuiario por id
const getUserById = async (userId) => {
    const arr = await db
        .select('*')
        .from('users')
        .where({ 'id': userId });
    return arr[0];
}

// Buscar usuário por email
const getUserByEmail = async (email) => {
    const arr = await db
        .select('*')
        .from('users')
        .where({ 'email': email });
    return arr[0];
}

// Criar usuário
const createUser = (email, fullName, createdAt) => {
    return db
        .insert({
            'full_name': fullName,
            'email': email,
            'created_at': createdAt
        })
        .into('users')
        .returning('*');
}

// Editar usuário
const editUser = async (userId, fullName) => {
    const arr = await db('users')
        .where({ 'id': userId })
        .update({ 'full_name': fullName })
        .returning('*');
    return arr[0];
}

module.exports = {
    getUserById,
    getUserByEmail,
    createUser,
    editUser
}