const express = require('express');

const ideasRoutes = require('./routes/ideas.routes');
const usersRoutes = require('./routes/users.routes');

const { allowCors } = require('./middlewares/allowCors.middleware');

const app = express();

//Middlewares
app.use(express.json());
app.use(allowCors);

//Routes
app.use('/ideas', ideasRoutes);
app.use('/users', usersRoutes);

app.listen(3001);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Trocar fetch por lib na autenticação do token !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! PRÓXIMO PASSO: CONECTAR FRONT-END COM BACK-END !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!