const logger = require('../../../lib/logger')
const { model: TaskModel } = require('..');

const getAllTasks = async (req, res, next) => {
  try {
    const result = await TaskModel.find({})
    return res.status(200).send(result)
  } catch(err) {
    logger.error('ERROR > GET_ALL_TASKS > ', err);
    return next(err);
  }
} 

module.exports = getAllTasks