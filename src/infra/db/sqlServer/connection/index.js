const sql = require("mssql");

class SqlServerDatabase {
  constructor(config) {
    this.config = config;
  }

  async query(sqlQuery) {
    try {
      const pool = await sql.connect(this.config);
      const result = await pool.request().query(sqlQuery);
      return result;
    } catch (err) {
      throw new Error(`Error executing query: ${sqlQuery}. Error: ${err}`);
    }
  }
}

module.exports = SqlServerDatabase;
