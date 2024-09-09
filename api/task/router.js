// build your `/api/tasks` router here
const express = require('express');
const Tasks = require('./model');
const router = express.Router();

// [GET] /api/tasks
router.get('/', async (req, res, next) => {
  try {
    const tasks = await Tasks.getTasks();
    res.json(tasks.map(task => ({
      ...task,
      task_completed: !!task.task_completed
    })));
  } catch (err) {
    next(err);
  }
});

// [POST] /api/tasks
router.post('/', async (req, res, next) => {
  try {
    const newTask = await Tasks.addTask(req.body);
    res.status(201).json({
      ...newTask,
      task_completed: !!newTask.task_completed
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
