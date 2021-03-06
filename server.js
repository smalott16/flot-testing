"use strict"

const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8080;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log("Server listening on port" + PORT);
})