const CreateUser = require("../../../service/userService/createUser");
const ListUsers = require("../../../service/userService/listUsers");
const {
  userRepository,
} = require("../../db/sqlServer/index");

class UserController {
  static async create(req, res) {
    const { name, email, password } = req.body;
    const createUser = new CreateUser(userRepository);
    const user = await createUser.execute({ name, email, password });
    res.status(201).json(user);
  }
  static async list(req, res) {
    const listUsers = new ListUsers(userRepository);
    const users = await listUsers.execute();
    res.json(users);
  }
}

module.exports = UserController;
