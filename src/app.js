const express = require("express");

const taskRoutes =
  require("./routes/task.routes");

const userRoutes =
  require("./routes/user.routes");

const errorHandler =
  require("./middlewares/error.middleware");

const app = express();

app.use(express.json());

app.use("/tasks", taskRoutes);

app.use("/users", userRoutes);

app.use(errorHandler);

module.exports = app;