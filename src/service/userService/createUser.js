const User = require("../../domain/entities/User");

class CreateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ name, email, password }) {
    const user = new User({
      name,
      email,
      password,
    });

    return this.userRepository.create(user);
  }
}

module.exports = CreateUser;
