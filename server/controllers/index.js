const express = require('express');

const app = express();

app.use(require('./userController'));
app.use(require('./profileController'));
app.use(require('./configurationController'));
app.use(require('./login'));

module.exports = app;