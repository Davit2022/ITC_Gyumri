const express = require('express');
const app = express();
//const http = require("http");
app.use(express.static(__dirname + '/src'));
const port = 8888

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})