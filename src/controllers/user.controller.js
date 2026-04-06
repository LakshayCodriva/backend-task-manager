const service = require("../services/user.service");

exports.getUserTasks = async (req, res, next) => {
  try {
    const tasks =
      await service.getUserTasks(req.params.id);

    res.json(tasks);
  } catch (err) {
    next(err);
  }
};