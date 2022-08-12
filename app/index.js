const express = require('express');
const app = express();

app.use(express.static('public'));

const {getRouter,postRouter} = require("./router");
app.use(getRouter);

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(postRouter);

module.exports = app;