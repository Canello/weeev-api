const CONNECTION = process.env.MODE === 'dev' ?
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
    :
    {
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    };

const db = require('knex')({
    client: 'pg',
    connection: CONNECTION
});

module.exports = db;