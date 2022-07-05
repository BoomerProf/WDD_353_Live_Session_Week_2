const express = require('express');
const router = require('../api/routes/router');
const app = express();
const path = require('path');

// middleware to serve up css/images/static content
let reqPath = path.join(__dirname, '../');
app.use(express.static(reqPath));

app.use('/', router);

// add middleware to handle errors and bad url paths
// app.use((req, res, next) => {
//   const error = new Error('NOT FOUND!!');
//   error.status = 404;
//   next(error);
// });

// app.use((error, req, res, next) => {
//   res.status(error.status || 500).json({
//     error: {
//       message: error.message,
//       status: error.status,
//       method: req.method,
//     },
//   });
// });

app.use((req, res, next) => {
  console.log('Bad url');
  res.status(404).sendFile(reqPath + '/pages/404.html');
});
module.exports = app;
