const User = require("../../../../domain/entities/User");

class UserRepository {
  constructor(db) {
    this.db = db;
  }

  async create(user) {
    const result = await this.db.query(`
        INSERT INTO users (name, email, password)
        VALUES ('${user.name}', '${user.email}', '${user.password}')
        SELECT SCOPE_IDENTITY() as userId
      `);

    user.id = result.recordset[0].userId;

    return user;
  }

  async findAll() {
    const result = await this.db.query("SELECT * FROM users");
    return result.recordset.map((row) => new User(row));
  }
}

module.exports = UserRepository;
