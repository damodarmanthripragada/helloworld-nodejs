const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Hello world received a request, testing the req res.');

  const target = process.env.TARGET || 'World';
  res.send('Hello Damodar Manthripragada Welcome');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});
