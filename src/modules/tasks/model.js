const mongoose = require('mongoose');

const { Schema } = mongoose;

const TaskSchema = new Schema({
  taskName: {
    type: String,
    required: [true, 'Task name is required'],
    trim:true,
    maxlength: [20, 'Cannot be more than 20 characters']
  },
  completed: {
    type: Boolean,
    default: false,
  }
}, {
  collection: 'Task',
  minimize: false,
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;