const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Auth-service is running'));

app.listen(PORT, () => console.log('Auth-service running on port', PORT));
