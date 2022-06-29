const express = require('express');
const app = express();

app.get('/api/tasks', (req, res) => {
    console.log("Send something");
    
});

module.exports = app;