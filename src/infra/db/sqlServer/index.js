require("dotenv").config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT),
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

const SqlServerDatabase = require("./connection/index");
const UserRepository = require("./repositories/userRepository");

const db = new SqlServerDatabase(config);
const userRepository = new UserRepository(db);

module.exports = {
  userRepository,
};
