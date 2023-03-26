class UserService {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
  
    async createUser(user) {
      return await this.userRepository.create(user);
    }
  
    async getUserById(id) {
      return await this.userRepository.getById(id);
    }
  
    async getUserByEmail(email) {
      return await this.userRepository.getByEmail(email);
    }
  
    async getAllUsers() {
      return await this.userRepository.getAll();
    }
  
    async updateUser(user) {
      return await this.userRepository.update(user);
    }
  
    async deleteUserById(id) {
      return await this.userRepository.deleteById(id);
    }
  }
  
  module.exports = UserService;
  