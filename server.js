const express = require('express');
const app = express();

// Serve all the files in '/dist' directory
app.use(express.static('dist'));


app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
