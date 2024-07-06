const express = require('express');
const app = express();
const port = 3000;

// Define a simple route
app.get('/api/example', (req, res) => {

    const data = [
        {
            id:1,
            name:'babaji'
        },
        {
            id:2,
            name:'babaji---2'
        }
    ]
  const responseData = {
    message: 'Hello, this is a sample API!',
    data: data,
  };

  // Send a JSON response
  res.json(responseData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
