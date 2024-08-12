const express = require('express');
const mongoose = require('mongoose');


const app = express();

app.use(express.json());
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));
