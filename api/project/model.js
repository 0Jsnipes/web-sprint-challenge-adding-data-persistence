const db = require('../../data/dbConfig');

function getProjects() {
  return db('projects').then(projects =>
    projects.map(project => ({
      ...project,
      project_completed: !!project.project_completed // Converts 0/1 to false/true
    }))
  );
}

function addProject(project) {
  return db('projects').insert(project)
    .then(([id]) => db('projects').where({ project_id: id }).first())
    .then(project => ({
      ...project,
      project_completed: !!project.project_completed // Converts 0/1 to false/true
    }));
}

module.exports = {
  getProjects,
  addProject
};
