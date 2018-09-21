const express = require('express');
const app = express();
app.use(express.static('dist'));
const jsonData = require('./data.json');
app.get('/api/getAppointments', (req, res) => res.send(jsonData));
app.listen(8080, () => console.log('Listening on port 8080!'));
