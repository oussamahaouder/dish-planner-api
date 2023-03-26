// infrastructure/mealPlanRepository.js

const MealPlan = require('../domain/mealPlan');
const { ObjectId } = require('mongodb');
class MealPlanRepository {
    constructor(db) {
        this.db = db;
      }
  async findById(id) {
    const mealPlan = await db.collection('mealPlans').findOne({ _id: ObjectId(id) });
    return mealPlan ? new MealPlan(mealPlan) : null;
  }

  async create(mealPlanData) {
    const result = await db.collection('mealPlans').insertOne(mealPlanData);
    return this.findById(result.insertedId);
  }

  async update(id, updateData) {
    await db.collection('mealPlans').updateOne({ _id: ObjectId(id) }, { $set: updateData });
    return this.findById(id);
  }

  async delete(id) {
    await db.collection('mealPlans').deleteOne({ _id: ObjectId(id) });
  }
}

module.exports = MealPlanRepository;
