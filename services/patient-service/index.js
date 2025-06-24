const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Patient-service is running'));

app.listen(PORT, () => console.log('Patient-service running on port', PORT));
