const express = require('express');

const ideasRoutes = require('./routes/ideas.routes');
const usersRoutes = require('./routes/users.routes');

const app = express();

//Middlewares
app.use(express.json());

//Routes
app.use('/ideas', ideasRoutes);
app.use('/users', usersRoutes);

app.listen(3001);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Trocar fetch por lib na autenticação do token !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!