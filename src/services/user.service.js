const repo = require("../repositories/user.repo");

exports.getUserTasks = async (id) => {
  return repo.getUserTasks(id);
};  
