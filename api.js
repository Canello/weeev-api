const express = require('express');

const ideasRoutes = require('./routes/ideas');

const app = express();

//Middlewares
app.use(express.json());

//Routes
app.use('/ideas', ideasRoutes);

app.listen(3001);