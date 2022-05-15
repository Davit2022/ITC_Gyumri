const path = require("path");
// const bodyParser = require("body-parser");

const express = require('express');
const app = express();
const hello = require('./src/Api/hello');

app.use(express.json());

app.use('/hello', hello);

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on Port: ${port}`));