const logger = require('../../../lib/logger');
const { model: TaskModel } = require('..');

const createTask = async (req, res, next) => {
  try {
    const { body } = req;
    const taskResult = await TaskModel.create(body);
    return res.status(201).send(taskResult);
  } catch(err) {
    logger.error('ERROR > CREATE_TASK > ', err);
    return next(err);
  }
} 

module.exports = createTask