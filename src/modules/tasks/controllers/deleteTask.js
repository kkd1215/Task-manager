const logger = require('../../../lib/logger')
const {model:TaskModel} = require('..')

const deleteTask = async (req, res, next) => {
  try {
    const {id: taskID} = req.params;
    const result = await TaskModel.findOneAndDelete({ _id: taskID });
    if (!result) {
      return res.status(404).json({msg:`No task found with the id: ${taskID}`});
    }
    return res.status(200).json(result)
  } catch(err) {
    logger.error('ERROR > DELETE_TASK > ', err);
    return next(err);
  }
} 

module.exports = deleteTask