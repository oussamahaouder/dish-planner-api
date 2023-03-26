class UserRepository {
    constructor() {
      // Initialize an empty array to hold user objects
      this.users = [];
    }
  
    // Method to create a new user
    createUser(user) {
      this.users.push(user);
    }
  
    // Method to read a specific user by ID
    readUserById(userId) {
      return this.users.find((user) => user.id === userId);
    }
  
    // Method to read a specific user by email
    readUserByEmail(email) {
      return this.users.find((user) => user.email === email);
    }
  
    // Method to read all users
    readAllUsers() {
      return this.users;
    }
  
    // Method to update an existing user
    updateUser(user) {
      const index = this.users.findIndex((u) => u.id === user.id);
      if (index !== -1) {
        this.users[index] = user;
        return true;
      }
      return false;
    }
  
    // Method to delete a user by ID
    deleteUserById(userId) {
      const index = this.users.findIndex((u) => u.id === userId);
      if (index !== -1) {
        this.users.splice(index, 1);
        return true;
      }
      return false;
    }
  }
  
  module.exports = UserRepository;
  