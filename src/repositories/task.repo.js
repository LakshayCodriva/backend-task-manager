const db = require("../config/db");

exports.createTask = async (data) => {
  const query = `
  INSERT INTO tasks(title,assigned_to,priority,due_date)
  VALUES($1,$2,$3,$4)
  RETURNING *`;

  const { rows } = await db.query(query, [
    data.title,
    data.assigned_to,
    data.priority,
    data.due_date
  ]);

  return rows[0];
};

exports.updateStatus = async (id, status) => {
  const query = `
  UPDATE tasks
  SET status=$1
  WHERE id=$2
  RETURNING *`;

  const { rows } = await db.query(query, [status, id]);
  console.log(typeof id, id);

  return rows[0];
};

exports.getTaskById = async (id) => {
  const { rows } = await db.query(
    `SELECT * FROM tasks WHERE id=$1`,
    [id]
  );

  return rows[0];
};


exports.filterTasks = async (status, priority) => {
  let query = `SELECT * FROM tasks WHERE 1=1`;
  let values = [];

  if (status) {
    values.push(status);
    query += ` AND status=$${values.length}`;
  }

  if (priority) {
    values.push(priority);
    query += ` AND priority=$${values.length}`;
  }

  const { rows } = await db.query(query, values);

  return rows;
};

exports.getOverdueGrouped = async () => {
  const query = `
  SELECT u.name, json_agg(t.*) tasks
  FROM tasks t
  JOIN users u ON t.assigned_to=u.id
  WHERE t.due_date < CURRENT_DATE
  AND t.status!='done'
  GROUP BY u.name`;

  const { rows } = await db.query(query);

  return rows;
};