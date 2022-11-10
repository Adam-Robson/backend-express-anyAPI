const express = require('express');
const app = express();
app.use(express.json());
app.use('/doggys', require('./controllers/doggys'));
app.use('/cows', require('./controllers/cows'));
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));
module.exports = app;
