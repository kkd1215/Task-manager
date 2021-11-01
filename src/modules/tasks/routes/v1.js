const express = require('express');
const Controller = require('../controllers');

const router = express.Router();

router.get('/url', (req, res) => {
  res.status(200).send(`OK - ${req.baseUrl}`);
});

/** GET /api/v1/tasks - GET ALL TASKS */
router.get('/', Controller.getAllTasks);

/** GET /api/v1/task/:id - GET TASK */
router.get('/:id', Controller.getTask);

/** POST /api/v1/tasks - CREATE TASK */
router.post('/', Controller.createTask);

/** PATCH /api/v1/tasks/:id - UPDATE TASK */
router.patch('/:id', Controller.updateTask);

/** DELETE /api/v1/tasks/:id - DELETE TASK */
router.delete('/:id', Controller.deleteTask);

module.exports = router;