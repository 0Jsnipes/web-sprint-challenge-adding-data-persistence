// build your `Task` model here
const db = require('../../data/dbConfig');

function getTasks() {
  return db('tasks')
    .join('projects', 'tasks.project_id', 'projects.project_id')
    .select('tasks.*', 'projects.project_name', 'projects.project_description');
}

function addTask(task) {
  return db('tasks').insert(task)
    .then(([id]) => db('tasks').where({ task_id: id }).first());
}

module.exports = {
  getTasks,
  addTask
};
