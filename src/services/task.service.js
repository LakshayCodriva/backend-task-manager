const repo = require("../repositories/task.repo");
const ApiError = require("../utils/ApiError");

const transitions = {
  todo: ["in_progress"],
  in_progress: ["done"],
  done: []
};

exports.createTask = async (data) => {
  return repo.createTask(data);
};

exports.updateStatus = async (id, newStatus) => {
  const task = await repo.getTaskById(id);

  if (!task)
    throw new ApiError(404, "Task not found");

  const allowed =
    transitions[task.status].includes(newStatus);

  if (!allowed)
    throw new ApiError(
      400,
      "Invalid status transition"
    );

  return repo.updateStatus(id, newStatus);
};

exports.filterTasks = async (status, priority) => {
  return repo.filterTasks(status, priority);
};

exports.overdueGrouped = async () => {
  return repo.getOverdueGrouped();
};