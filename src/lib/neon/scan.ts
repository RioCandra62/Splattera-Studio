
import pool from "./neon";

export async function getScanData() {
  const data = await pool.query(`SELECT * FROM scan`);

  return data.rows;
}

export async function getFilter(id: number) {
  const data = await pool.query(
    "SELECT filter.filter_name as name FROM scan inner join filter on scan.id = filter.scan_id WHERE scan.id = $1",
    [id],
  );
  return data.rows
}
export async function getAllFilter() {
  const data = await pool.query(
    "SELECT * FROM scan RIGHT JOIN filter ON scan.id = filter.scan_id"
  );
  return data.rows;
}


