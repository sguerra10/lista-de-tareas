const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    _id: {
      type: String,
      default: crypto.randomUUID,
      alias: 'id'
    },
    title: String,
    description: String,
    status: Boolean
  });

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
