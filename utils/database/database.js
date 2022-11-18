process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

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
        ssl: false
    };

const db = require('knex')({
    client: 'pg',
    connection: CONNECTION
});

module.exports = db;