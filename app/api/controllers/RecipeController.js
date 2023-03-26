// Import required modules
const Recipe = require('../models/recipe');

// Define controller methods
const getRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    next(err);
  }
};

const getRecipeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (err) {
    next(err);
  }
};

const createRecipe = async (req, res, next) => {
  try {
    const { name, description, ingredients, steps } = req.body;

    // Create a new recipe object using the provided data
    const recipe = new Recipe({
      name,
      description,
      ingredients,
      steps,
    });

    // Save the new recipe object to the database
    const createdRecipe = await recipe.save();

    // Return the created recipe object to the client
    res.status(201).json(createdRecipe);
  } catch (err) {
    next(err);
  }
};

const updateRecipe = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, ingredients, steps } = req.body;

    // Find the recipe by id and update its data
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      id,
      {
        name,
        description,
        ingredients,
        steps,
      },
      { new: true } // Return the updated document instead of the original
    );

    if (!updatedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    // Return the updated recipe object to the client
    res.json(updatedRecipe);
  } catch (err) {
    next(err);
  }
};

const deleteRecipe = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Find the recipe by id and remove it from the database
    const deletedRecipe = await Recipe.findByIdAndRemove(id);

    if (!deletedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    // Return the deleted recipe object to the client
    res.json(deletedRecipe);
  } catch (err) {
    next(err);
  }
};

// Export the controller methods
module.exports = {
  getRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};