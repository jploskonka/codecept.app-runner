const express = require('express');
const app     = express();

app.get('/', (req, res) => res.send('Up!'));

app.listen(8888, () => console.log('App listening on port 8888'));
