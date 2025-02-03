const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to fetch the user with userId ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});

//Problem: Incorrect handling of non-numeric user IDs.
//If a non-numeric ID is provided, the database operation will fail without error, leading to unexpected behavior.  The status code might not be accurate.

//Example:  Calling /users/abc would cause an error if the DB expects a number.