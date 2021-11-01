const express = require('express');
const TaskRoutes = require('../modules/tasks/routes/v1');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send(`OK - ${req.baseUrl}`);
});

router.use('/tasks', TaskRoutes);

module.exports = router;