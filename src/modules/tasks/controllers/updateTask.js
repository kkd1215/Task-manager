const logger = require('../../../lib/logger')
const {model:TaskModel} = require('..')

const updateTask = async (req, res, next) => {
  try {
    const { id: taskID } = req.params;
    const { body } = req;
    const result = await TaskModel.findOneAndUpdate({ _id: taskID }, body, {new: true, runValidators: true});
    if (!result) {
      return res.status(404).json({msg:`No task found with the id: ${taskID}`});
    }
    return res.status(200).json(result)
  } catch(err) {
    logger.error('ERROR > UPDATE_TASK > ', err);
    return next(err);
  }
} 

module.exports = updateTask