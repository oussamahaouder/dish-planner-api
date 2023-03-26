// infrastructure/userRepository.js

const User = require('../domain/user');
const { ObjectId } = require('mongodb');

class UserRepository {
    constructor(db) {
    this.db = db;
  }
  async findById(id) {
    const user = await db.collection('users').findOne({ _id: ObjectId(id) });
    return user ? new User(user) : null;
  }

  async findByUsername(username) {
    const user = await db.collection('users').findOne({ username });
    return user ? new User(user) : null;
  }

  async create(userData) {
    const result = await db.collection('users').insertOne(userData);
    return this.findById(result.insertedId);
  }
}

module.exports = UserRepository;
