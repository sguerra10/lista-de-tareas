const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const authMiddleware = require('../middleware/auth');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
  });
  
  router.post('/',authMiddleware, async (req, res) => {
    const newTask = new Task(req.body);
    await newTask.save();
    res.json(newTask);
  });
  

module.exports = router;
