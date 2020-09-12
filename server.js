const express = require('express');
const app = express();
const serveStatic = require('serve-static');

// Serve all the files in '/dist' directory
app.use(serveStatic(`${__dirname}/dist`));


const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`server started ${port}`);
});
