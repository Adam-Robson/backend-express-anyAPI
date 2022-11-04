const express = require('express');
const app = express();
app.use(express.json());

app.use('/doggys', require('./controllers/dogs'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));
module.exports = app;
