const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const taskRoutes = require('./routes/tasks');
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
app.use('/tasks', taskRoutes);


app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
