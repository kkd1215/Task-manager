const getAllTasks = require('./getAllTasks');
const getTask = require('./getTask');
const createTask = require('./createTask');
const updateTask = require('./updateTask');
const deleteTask = require('./deleteTask');

const Controller = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
};

module.exports = Controller;