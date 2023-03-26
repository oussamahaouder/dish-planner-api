// infrastructure/recipeRepository.js

const Recipe = require('../domain/recipe');
const { ObjectId } = require('mongodb');

class RecipeRepository {
    constructor(db) {
      this.db = db;
    }
  async findById(id) {
    const recipe = await db.collection('recipes').findOne({ _id: ObjectId(id) });
    return recipe ? new Recipe(recipe) : null;
  }

  async create(recipeData) {
    const result = await db.collection('recipes').insertOne(recipeData);
    return this.findById(result.insertedId);
  }

  async update(id, updateData) {
    await db.collection('recipes').updateOne({ _id: ObjectId(id) }, { $set: updateData });
    return this.findById(id);
  }

  async delete(id) {
    await db.collection('recipes').deleteOne({ _id: ObjectId(id) });
  }
}

module.exports = RecipeRepository;
