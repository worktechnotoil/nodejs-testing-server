const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// GET endpoint
app.get('/api', (req, res) => {
  res.send('GET request to the homepage');
});

// POST endpoint
app.post('/api', (req, res) => {
  const data = req.body;
  res.send(`POST request with data: ${JSON.stringify(data)}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
