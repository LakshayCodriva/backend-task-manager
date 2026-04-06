const router = require("express").Router();

const controller =
  require("../controllers/task.controller");

router.post("/", controller.createTask);

router.patch(
  "/:id/status",
  controller.updateStatus
);

router.get("/", controller.getTasks);

router.get(
  "/overdue",
  controller.overdueGrouped
);

module.exports = router;