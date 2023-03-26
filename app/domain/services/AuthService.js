const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserRepository = require('../repositories/userRepository');

class AuthService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async authenticateUser(username, password) {
    const user = await this.userRepository.findByUsername(username);

    if (!user) {
      throw new Error('User not found');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Incorrect password');
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return { token };
  }
}

module.exports = AuthService;
