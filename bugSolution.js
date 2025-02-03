const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  if (isNaN(userId)) {
    return res.status(400).send('Invalid user ID');
  }
  // ... some database operation to fetch the user with userId ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});

//Solution: Added input validation using parseInt and isNaN to check if the ID is a valid number.
//If not a number, it sends a 400 Bad Request response.
//This prevents the database query from failing unexpectedly.