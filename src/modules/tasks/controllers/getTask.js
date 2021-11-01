const logger = require('../../../lib/logger')
const { model: TaskModel } = require('..');

const getTask = async (req, res, next) => {
  try {
    const {id: taskID} = req.params;
    const result = await TaskModel.findOne({ _id: taskID });
    if (!result) {
      return res.status(404).json({msg:`No task found with the id: ${taskID}`});
    }
    return res.status(200).json(result)
  } catch(err) {
    logger.error('ERROR > GET_TASK > ', err);
    return next(err);
  }
} 

module.exports = getTask