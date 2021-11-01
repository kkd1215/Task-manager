const controller = require('./controllers');
const routes = require('./routes');
const model = require('./model');

const tasks = {
  controller,
  routes,
  model
};

module.exports = tasks;