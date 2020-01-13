const express = require("express"); // adds http support
const app = express();

const port = 3000; // set port

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log('Example app listening on port 3000!')
});

