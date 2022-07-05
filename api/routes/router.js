const express = require('express');
const path = require('path');
const router = express.Router();

// router.get('/', (req, res) => {
//   res.status(200).json({
//     message: 'GET',
//     metadata: {
//       host: req.hostname,
//       method: req.method,
//     },
//   });
// });

// Get by ID
// localhost:3000/89
// router.get('/:id', (req, res) => {
//   const id = req.params.id;

//   res.status(200).json({
//     message: 'GET',
//     metadata: {
//       host: req.hostname,
//       method: req.method,
//       id: id,
//     },
//   });
// });
let reqPath = path.join(__dirname, '../../');
router.use(express.static(reqPath));

router.get('/', (req, res) => {
  res.sendFile(reqPath + '/pages/about.html');
});

router.get('/about', (req, res) => {
  res.sendFile(reqPath + '/pages/about.html');
});

router.get('/services', (req, res) => {
  res.sendFile(reqPath + '/pages/services.html');
});

router.get('/portfolio', (req, res) => {
  res.sendFile(reqPath + '/pages/portfolio.html');
});

module.exports = router;
