// Import required modules
const MealPlan = require('../models/mealPlan');

// Define controller methods
const getMealPlans = async (req, res, next) => {
  try {
    const mealPlans = await MealPlan.find();
    res.json(mealPlans);
  } catch (err) {
    next(err);
  }
};

const getMealPlanById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const mealPlan = await MealPlan.findById(id);
    if (!mealPlan) {
      return res.status(404).json({ message: 'Meal plan not found' });
    }
    res.json(mealPlan);
  } catch (err) {
    next(err);
  }
};

const createMealPlan = async (req, res, next) => {
  try {
    const { name, description, recipes } = req.body;

    // Create a new meal plan object using the provided data
    const mealPlan = new MealPlan({
      name,
      description,
      recipes,
    });

    // Save the new meal plan object to the database
    const createdMealPlan = await mealPlan.save();

    // Return the created meal plan object to the client
    res.status(201).json(createdMealPlan);
  } catch (err) {
    next(err);
  }
};

const updateMealPlan = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, recipes } = req.body;

    // Find the meal plan by id and update its data
    const updatedMealPlan = await MealPlan.findByIdAndUpdate(
      id,
      {
        name,
        description,
        recipes,
      },
      { new: true } // Return the updated document instead of the original
    );

    if (!updatedMealPlan) {
      return res.status(404).json({ message: 'Meal plan not found' });
    }

    // Return the updated meal plan object to the client
    res.json(updatedMealPlan);
  } catch (err) {
    next(err);
  }
};

const deleteMealPlan = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Find the meal plan by id and remove it from the database
    const deletedMealPlan = await MealPlan.findByIdAndRemove(id);

    if (!deletedMealPlan) {
      return res.status(404).json({ message: 'Meal plan not found' });
    }

    // Return the deleted meal plan object to the client
    res.json(deletedMealPlan);
  } catch (err) {
    next(err);
  }
};

// Export the controller methods
module.exports = {
  getMealPlans,
  getMealPlanById,
  createMealPlan,
  updateMealPlan,
  deleteMealPlan,
};
