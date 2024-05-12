const express = require('express');
const app = express();

app.get('/get-firebase-token', (req, res) => {
  getAccessToken().then(token => {
    res.send({ token });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
