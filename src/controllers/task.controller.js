const service = require("../services/task.service");

exports.createTask = async (req, res, next) => {
  try {
    const task = await service.createTask(req.body);

    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

exports.updateStatus = async (req, res, next) => {
  try {
    const task =
      await service.updateStatus(
        req.params.id,
        req.body.status
      );

    res.json(task);
  } catch (err) {
    next(err);
  }
};


exports.getTasks = async (req, res, next) => {
  try {
    const tasks =
      await service.filterTasks(
        req.query.status,
        req.query.priority
      );

    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

exports.overdueGrouped = async (req, res, next) => {
  try {
    const tasks =
      await service.overdueGrouped();

    res.json(tasks);
  } catch (err) {
    next(err);
  }
};