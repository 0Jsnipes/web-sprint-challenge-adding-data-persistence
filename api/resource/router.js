// build your `/api/resources` router here
const express = require('express');
const Resources = require('./model');
const router = express.Router();

// [GET] /api/resources
router.get('/', async (req, res, next) => {
  try {
    const resources = await Resources.getResources();
    res.json(resources);
  } catch (err) {
    next(err);
  }
});

// [POST] /api/resources
router.post('/', async (req, res, next) => {
  try {
    const newResource = await Resources.addResource(req.body);
    res.status(201).json(newResource);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
