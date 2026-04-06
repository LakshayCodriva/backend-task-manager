const db = require("../config/db");

exports.getUserTasks = async (id) => {
  const { rows } = await db.query(
    `SELECT * FROM tasks WHERE assigned_to=$1`,
    [id]
  );

  return rows;
};