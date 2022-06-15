const express = require('express');

const app = express();
app.use((req, res) => {
    res.json({message:" je suis express non lol "})
})
module.exports = app;