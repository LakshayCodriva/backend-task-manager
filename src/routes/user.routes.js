const router = require("express").Router();

const controller =
  require("../controllers/user.controller");

router.get("/:id/tasks", controller.getUserTasks);

module.exports = router;